---
title: Linux 简单有趣的命令
date: 2020-11-22 19:01:15
tags: linux
categories: 操作系统
---

本文不定期更新。

# 网络命令

## nc tcp连接工具

nc 可以建立 TCP 连接

```bash
$ nc localhost 6379
set name jonkee
+OK
get name
$6
jonkee
```

## telnet 端口测试

```bash
$ telnet mycloud 3306
```

## ssh & sshpass 服务器连接

生成密钥对

```bash
# -t 指定加密算法
# -b 指定密钥的二进制位数
# -C 注释
$ ssh-keygen -t rsa -b 4096 -C "qiqiangvae@foxmail.com"
# 查看生成的密钥对
$ ls ~/.ssh/
id_rsa  id_rsa.pub
```

上传公钥。也可以在服务器上创建一个`~/.ssh/authorized_keys`文件，并修改权限为664，然后在将本地客户端内`id_rsa.pub`的内容复制进去。

```bash
# -i 指定公钥文件
$ ssh-copy-id -i ~/.ssh/id_rsa.pub username@host
```

ssh 命令可以连接服务器，但是连接服务器的时候要输入密码，而sshpass可以免去手动输入密码的操作。

```bash
$ ssh -p 22 {username}@{ip}
$ sshpass -p {password} ssh -p 22 {username}@{ip}
```

ssh 还可以实现跳板机隧道功能。

如本机 **Local** 想要访问 **Server** 的 **Port** 端口，但是 **Server** 是在内网，无法访问，但是跳板机 **Jump** 可以访问 **Server**，而 **Local** 可以访问跳板机，此时可以使用ssh实现隧道功能。

```bash
# 要输入 jump 跳板机密码
$ ssh -N -f -L {localPort}:{ServerIP}:{ServerPort} {JumpUsername}@{JumpIP}
# 使用sshpass免去输入跳板机密码过程
$ sshpass -p {JumpPass} ssh -N -f -L {localPort}:{ServerIP}:{ServerPort} {JumpUsername}@{JumpIP}
```

此时连接 Local 的 localPort 就可以连接上 Server 的 ServerPort 了。

通过跳板机连接服务器，然后依次输入跳板机和服务器的密码。

```bash
$ ssh {ServerUsername}@{ServerIP} -p 22 -o ProxyCommand='ssh -p 22 {JumpUsername}@{JumpIP} -W %h:%p'
```

## curl 网络请求客户端

curl 命令可以用来发送 web 请求。

```bash
# 发送 get 请求
$ curl http://www.baidu.com
# 头信息
$ curl -H 'Authorization:mytoken' http://www.baidu.com
# 发送 cookie
$ curl -b 'name=jonkee;sex=1' http://www.baidu.com
# 存储响应 cookie
$ curl -c resp_cookie.txt http://www.baidu.com
# 发送 POST 请求
$ curl -X POST -d '{"username":"jonkee","password":"mypass"}' http://xxx.com/login
# 保存响应信息
$ curl -o resp.txt http://www.baidu.com
```

| 使用           | 符号  | 说明         |
| ------------ | --- | ---------- |
| 代理头          | -A  | User-Agent |
| 请求头          | -H  | Header     |
| 发送 cookie    | -b  |            |
| 存储响应 cookie  | -c  |            |
| 发送 body      | -d  |            |
| 指定 Http 请求方式 | -X  |            |
| 打印响应头        | -i  |            |
| 保存响应信息       | -o  |            |

## scp 服务器间复制文件

在服务器之间复制文件和目录。`scp fileName user@ip:fileName2`。

```bash
# 将 demo.log 复制到服务器的 /home/dc2-user 目录下
$ scp demo.log dc2-user@mycloud:/home/dc2-user
```

如果是复制目录，则需要加上参数`-r`

## masscan & nmap 端口扫描

masscan 和 nmap 都可以扫描服务器开放的端口，nmap 可以扫描域名，masscan不可以。masscan 扫描速度比 nmap 快很多。

```bash
$ sudo masscan -p1-65535 xxx.xxx.xx.xxx
$ sudo nmap -sS -Pn -p1-65535 www.baidu.com
```

## tcpdump 抓包工具

tcpdump 命令可以抓取指定网卡的指定ip和端口的数据包。

```bash
$ tcpdump -A dst xxx.xxx.x.xxx and port 3306 -w redis_dump.dump
```

# 文本命令

## xargs 参数转换

xargs 的作用是将标准输入转为命令行参数。

简单的案例

```bash
$ echo "1.txt 2.txt 3.txt" | xargs touch
$ ls
1.txt 2.txt 3.txt
```

使用 xargs 批量删除redis key。以下命令的意思是，先找出所有的 key，然后通过 xargs 命令将结果用空格分开，然后删除。    

```bash
$ redis-cli -a password -h localhost -p 6379 keys "*" | xargs redis-cli -a password -h localhost -p 6379 del
```

默认情况下 xargs 会将输入用空格或者换行符分割，也可以用 -d 指定分割符。

```bash
# -e 表示解释转义字符
$ echo -e "韩信\t李白\t百里守约" | xargs -d "\t" echo
韩信 李白 百里守约
```

| 参数  | 解释                       |
| --- | ------------------------ |
| -p  | 打印需要执行的命令，询问是否执行，输入y或Y确认 |
| -t  | 打印需要执行的命令，不需要用户确认        |

## awk

```bash
# 每行按空格或TAB分割，输出文本中的1、4项
$ awk '{print $1,$4}' log.txt
# 输出 java 进程的 pid
$ ps -ef|grep java|awk '{print $2}'
67396
69344
75192
# -F 指定分隔符为 =
$ awk -F '=' '{print $1,$2}' txt
k1 1
k2 2
$ -v 设置变量
$ awk -F '=' -v p=2 '{print $1,$2,$2+p}' txt
# 只输出第列的值等于2的行
$ awk -F '=' '{if ($2 == 2) print $1,$2}' txt
k2 2
# 按=分割并去重
$ awk -F '=' '{print $3}' filename |awk '!a[$0]++'
```

NF 代表当前行有多少个字段，即 NF-1代表倒数第二个字段。

NR 代表当前行数。

## sed

替换字符串

```bash
$ sed 's/原字符串/替换字符串/g'
```

截取行数

```bash
$ sed -n '1,10p' filename
```

## wc 文本统计

- -c 或 --bytes 或 --chars 只显示 Bytes 数。
- -l 或 --lines 显示行数。
- -w 或 --words 只显示字数。

```bash
$ wc -l filename
```

## grep 匹配

+ -C n 或者 --context=n 显示前后 n 行的内容。

+ -A n 或者 --after-context=n 显示之后 n 行的内容。

+ -B n 或者 --before-context=n 显示之前 n 行的内容。

+ -v 显示不匹配的（忽略匹配的）。

+ -n 显示行数。

# 压缩命令

## tar

加`-z` 表示 gzip，`-c`压缩，`-x`解压，`-v`显示过程。

```bash
# 从文件 foo 和 bar 创建归档文件 archive.tar。
$ tar -cf archive.tar foo bar  
# 详细列举归档文件 archive.tar 中的所有文件。
$ tar -tvf archive.tar         
# 展开归档文件 archive.tar 中的所有文件。
$ tar -xf archive.tar          
```

# 其它命令

## nohup 不挂断运行

no hang up 不挂断。

```bash
$ nohup command > myout.log 2>&1 &  
```

- 0 标准输入 

- 1 标准输出

- 2 标准错误

`2>&1` 是将标准错误`2`重定向到标准输出`&1`，`&1`再重定向到`myout.log`中。

编写一个脚本`nohup_demo.sh`循环打印。

```bash
count=0
while [ $count -lt "100" ]; do
    echo 'hello jonkee'
    sleep 1s
    count=$(expr $count + 1)
done
```

测试

```bash
# 启动
$ nohup sh nohup_demo.sh > demo.log 2>&1 &
80306
# 查看日志
$ tail -f demo.log
hello jonkee
hello jonkee
hello jonkee
hello jonkee
# 停止
$ kill -9 80306
```

## mv 命令冷知识

mv 命令可以用来移动文件和改名，那么什么时候是移动文件什么时候是改名呢

```bash
# 新建两个文件夹
$ mkdir d1 d2
# 在d1里面新建两个文件
$ touch d1/f1 d1/f2
# 将d1改为d3
$ mv d1 d3
$ ls d3
f1  f2
# 将d3移入d2
$ mv d3 d2
$ ls d2/d3/
f1  f2
```

为什么最后一个命令不是将 d3 改名为 d2 呢？因为d2目录已经存在来，所以不会改名。

总结：目标文件不存在则改名，目标文件存在则移动。
