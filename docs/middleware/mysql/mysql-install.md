# Mysql 安装总结教程

## CentOS

### 检查并卸载已安装的 mysql

```bash
# 检查是否安装了mysql
$ rpm -qa | grep mysql 
# 检查是否安装了mariadb
$ rpm -qa | grep mariadb 
# 一般使用此命令即可卸载成功
$ rpm -e xxx  
# 卸载不成功时使用此命令强制卸载
$ rpm -e --nodeps xxx 
```

### 安装

```bash
# 下载mysql的rpm的包
$ wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
$ yum -y install mysql57-community-release-el7-10.noarch.rpm
$ yum -y install mysql-community-server
```

如果网速太慢，则可以先将依赖下载下来。

```bash
$ cd /var/cache/yum/x86_64/7/mysql-5.7-community/packages
$ wget http://uni.mirrors.163.com/mysql/Downloads/MySQL-5.7/mysql-community-client-5.7.31-1.el7.x86_64.rpm
$ wget http://uni.mirrors.163.com/mysql/Downloads/MySQL-5.7/mysql-community-server-5.7.31-1.el7.x86_64.rpm
$ yum -y install mysql-community-server
```

## 初次启动和配置

```bash
# 启动
$ systemctl start  mysqld.service
# 查看密码
$ grep 'password' /var/log/mysqld.log 
2020-09-24T06:20:35.501792Z 1 [Note] A temporary password is generated for root@localhost: efTxxx3U32)t
# 进入数据库，输入密码
$ mysql -uroot -p
```

修改密码。

```sql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'mypassword';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
```

直接修改会报错，所以需要修改密码校验规则。

```sql
# 设置0表示只校验密码长度
set global validate_password_policy=0;
# 密码长度最少是6
set global validate_password_length=6;
```

设置远程登陆

```sql
use mysql;
# 这里的%是允许所有的ip地址登录这个服务器的mysql服务器，如果需要限制IP，将 % 改为相应的 IP 即可
update user set host='%' where user='root' and host='localhost';
# 刷新权限
flush privileges;
```

创建用户

```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'user-password';
```

## 常见文件地址

| 文件                  | 文件路径    |
| ------------------- | ------- |
| /etc/my.cnf         | 配置文件    |
| /var/lib/mysql      | 数据库文件目录 |
| /var/log/mysqld.log | 日志文件    |

## 常见操作

### 开启 binlog

```
log-bin=/your-path/my-binlog
server-id=123456
```

然后重启`systemctl restart  mysqld.service`

## docker 安装 mysql

[官方镜像仓库](https://hub.docker.com/_/mysql)

1. 先启动一个mysql，这个mysql。然后拷贝出配置文件。

```bash
$ docker --name mysql.temp --rm mysql5.7
$ docker cp mysql.temp:/etc/mysql /etc/mysql
```

1. 修改配置文件。

```bash
$ vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

1. 启动一个新的 mysql 服务。

```bash
$ docker run --name mysql3306 -d -e MYSQL_ROOT_PASSWORD=mountain -v /var/lib/mysql:/var/lib/mysql -v /etc/mysql:/etc/mysql -p 3306:3306 mysql:5.7
```
