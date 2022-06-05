# nginx入门教程

## 安装教程

1. 下载 tar 包然后解压。[下载地址](http://nginx.org/en/download.html)
2. 进入目录，执行命令。

```bash
$ ./configure && make && make install
```

如果出现模块未安装，那么需要根据提示安装相应的模块。

3. 更新模块。

```bash
$ ./configure --with-pcre --with-http_stub_status_module --with-http_ssl_module --with-stream
$ make
$ cp objs/nginx /usr/local/nginx/sbin/
```

- --with-stream。支持 tcp、udp 转发。

## 基础命令

1. 启动

```bash
# 默认启动
$ /usr/local/nginx/sbin/nginx
# 指定配置文件启动 -c
$ /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```

2. 停止

```bash
# 普通停止
$ /usr/local/nginx/sbin/nginx -s stop
# 优雅停止
$ /usr/local/nginx/sbin/nginx -s quit
```

3. 重启

```bash
$ /usr/local/nginx/sbin/nginx -s reload
```

4. 验证配置文件

```bash
$ /usr/local/nginx/sbin/nginx -t
```

## 模块配置

### http 配置

```nginx
http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/http.log  main;

    sendfile        on;
    keepalive_timeout  65;

    include http-conf/*.conf;
}
```

http-conf/index.conf 配置如下：

```nginx
server {
    listen       80;
    server_name  localhost;
    charset utf-8;

    location / {
        root   html;
        index  index.html index.htm;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

http-conf/file.conf 文件服务器配置

```nginx
server {
  listen       80;
  server_name  localhost;
  charset utf-8;
  # 资源服务器
  location /resources {
    root /home/ubuntu;
    autoindex on;   #允许nginx在浏览器以文件夹形式访问
    autoindex_exact_size off;  #显示文件大小
    autoindex_localtime on;    #显示文件时间
  }
}
```

### https 配置

```nginx
server {
  listen       80;
  server_name  www.qiqiang.online;
  # 重定向到 https
  rewrite ^(.*) https://www.qiqiang.online/$1 permanent;
}

server {
  #SSL 访问端口号为 443
  listen 443 ssl;
  #填写绑定证书的域名
  server_name www.qiqiang.online;
  #证书文件名称，可用相对路径
  ssl_certificate /your_path/1_www.qiqiang.online_bundle.crt;
  #私钥文件名称，可用相对路径
  ssl_certificate_key /your_path/2_www.qiqiang.online.key;
  ssl_session_timeout 5m;
  #请按照以下协议配置  
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
  #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
  ssl_prefer_server_ciphers on;
  # 主页地址 
  location / {
    root /your_index_path/xxx;
    index  index.html index.htm;
  }
}
```

### tcp 配置

```nginx
stream {
    log_format proxy '$remote_addr [$time_local] '
                 '$protocol $status $bytes_sent $bytes_received '
                 '$session_time "$upstream_addr" '
                 '"$upstream_bytes_sent" "$upstream_bytes_received" "$upstream_connect_time"';

    access_log logs/stream.log proxy;
    open_log_file_cache off;

    include stream-conf/*.conf;
}
```

stream-conf/tcp.conf 配置如下：

```nginx
upstream redis-server {
    server mycloud:6379;
}

server {
    # redis
    listen 6379;
    proxy_pass redis-server;
}
```
