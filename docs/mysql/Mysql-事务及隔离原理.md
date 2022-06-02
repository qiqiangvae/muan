---
title: Mysql 事务及隔离原理
date: 2022-03-31 09:41:36
tags: [mysql]
categories: [中间件,数据库]
summary: 
---

# 什么是事务and怎样开启事务

## 事务的四大特性 ACID

即原子性、一致性、隔离性、持久性

开启事务的语句有两种

```sql
begin;
start transaction ;
```

回滚语句

```sql
rollback;
```

提交事务

```sql
commit;
```

# 隔离性与隔离级别

读未提交（read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（serializable ）

# 当前读与快照度

## 当前读

更新数据都是先读再写，这个读被称为当前读（Locking Read）。update 、delete 、insert都属于更新数据。加锁的 select 语句也是当前读，如

```sql
SELECT * FROM T lock in share mode;
SELECT * FROM T lock for update;
```

## 快照度

普通的 select 被称为快照度（Consistent Read），原理是生成一致性视图，利用MVCC机制进行读数据，并不会对记录加锁。

# MVCC 多版本并发控制

`begin/start transaction` 并不会立刻启动一个事务，只有在遇到 insert、update、delete 时才会真正的开启事务，这时候才会分配事务ID，只有在执行快照读的时候才会生成一致性视图。

如果想要立马启动一个事务，可以使用如下语句，执行该语句后也会立马创建一致性视图：

```sql
start transaction with consistent snapshot;
```

一个案例验证一致性视图是在执行 select 的时候生成的：

创建表并插入数据

```sql
-- auto-generated definition
create table user
(
    id   int         not null primary key,
    age  int         null
);
INSERT INTO test.user (id, age) VALUES (1, 1);
```

事务1和事务2分别按序号执行如下命令。

事务1：

```sql
-- 1.此时没有生成一致性视图，也没有真正开启事务
begin ;
-- 3.事务1生成一致性视图，查询结果是 age = 1
select * from user where id = 1;
-- 6.查询，查询结果是 age = 1
select * from user where id = 1;
-- 8.此时事务2已经提交了，此时查询，结果是 age = 1
select * from user where id = 1;
-- 9.提交
commit ;
```

事务2：

```sql
-- 2.此时没有生成一致性视图，也没有真正开启事务
begin ;
-- 4.事务2生成一致性视图，查询结果是 age = 1
select * from user where id = 1;
-- 5.真正的开启事务
update user set age = age+1 where id = 1;
-- 6.查询，查询结果是 age = 2
select * from user where id = 1;
-- 7.提交
commit ;
```

问题来了，什么是一致性视图？

## 一致性视图和 undo log

## MVCC 工作原理
