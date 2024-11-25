import{_ as i,c as a,b as n,o as l}from"./app-BZRVOKAf.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="安装教程" tabindex="-1"><a class="header-anchor" href="#安装教程"><span>安装教程</span></a></h2><ol><li>下载 tar 包然后解压。<a href="http://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">下载地址</a></li><li>进入目录，执行命令。</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./configure</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> make</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> make</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果出现模块未安装，那么需要根据提示安装相应的模块。</p><ol start="3"><li>更新模块。</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./configure</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --with-pcre</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --with-http_stub_status_module</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --with-http_ssl_module</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --with-stream</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> make</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> objs/nginx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/nginx/sbin/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>--with-stream。支持 tcp、udp 转发。</li></ul><h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令"><span>基础命令</span></a></h2><ol><li>启动</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 默认启动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/nginx/sbin/nginx</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 指定配置文件启动 -c</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/nginx/conf/nginx.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>停止</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 普通停止</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stop</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 优雅停止</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> quit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>重启</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>验证配置文件</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="模块配置" tabindex="-1"><a class="header-anchor" href="#模块配置"><span>模块配置</span></a></h2><h3 id="http-配置" tabindex="-1"><a class="header-anchor" href="#http-配置"><span>http 配置</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">http</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    include </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      mime.types</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    default_type </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> application/octet-stream</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    log_format </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> main</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  &#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">remote_addr - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">remote_user [</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">time_local] &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">request&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                      &#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">status </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">body_bytes_sent &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http_referer&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                      &#39;&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http_user_agent&quot; &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http_x_forwarded_for&quot;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    access_log </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> logs/http.log  </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    sendfile </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">       on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    keepalive_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 65</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    include </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">http-conf/*.conf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>http-conf/index.conf 配置如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      80</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    server_name </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> localhost</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    charset </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">utf-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> / </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        root </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        index </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> index.html index.htm</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    error_page </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  500</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 502</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 503</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 504</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  /50x.html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    location</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =</span><span style="--shiki-light:#AB5E3F;--shiki-dark:#C4704F;"> /50x.html </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        root </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>http-conf/file.conf 文件服务器配置</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      80</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  server_name </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> localhost</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  charset </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">utf-8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 资源服务器</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> /resources </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    root </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/home/ubuntu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    autoindex on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   #允许nginx在浏览器以文件夹形式访问</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    autoindex_exact_size off</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #显示文件大小</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    autoindex_localtime on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #显示文件时间</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="https-配置" tabindex="-1"><a class="header-anchor" href="#https-配置"><span>https 配置</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      80</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  server_name </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> www.qiqiang.online</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 重定向到 https</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  rewrite</span><span style="--shiki-light:#AB5E3F;--shiki-dark:#C4704F;"> ^(.*) https://www.qiqiang.online/$</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">1 </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">permanent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #SSL 访问端口号为 443</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">443</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ssl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #填写绑定证书的域名</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  server_name </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">www.qiqiang.online</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #证书文件名称，可用相对路径</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  ssl_certificate </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/your_path/1_www.qiqiang.online_bundle.crt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #私钥文件名称，可用相对路径</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  ssl_certificate_key </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/your_path/2_www.qiqiang.online.key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  ssl_session_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5m</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #请按照以下协议配置  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  ssl_protocols </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">TLSv1 TLSv1.1 TLSv1.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  ssl_ciphers </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  ssl_prefer_server_ciphers on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 主页地址 </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> / </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    root </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/your_index_path/xxx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    index </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> index.html index.htm</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tcp-配置" tabindex="-1"><a class="header-anchor" href="#tcp-配置"><span>tcp 配置</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">stream</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    log_format </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">proxy </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">remote_addr [</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">time_local] &#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                 &#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">protocol </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">status </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bytes_sent </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bytes_received &#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                 &#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">session_time &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">upstream_addr&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                 &#39;&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">upstream_bytes_sent&quot; &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">upstream_bytes_received&quot; &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">upstream_connect_time&quot;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    access_log </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">logs/stream.log proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    open_log_file_cache off</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    include </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">stream-conf/*.conf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stream-conf/tcp.conf 配置如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">upstream</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> redis-server </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> mycloud:6379;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # redis</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">6379</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    proxy_pass </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">redis-server</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const k=i(e,[["render",t],["__file","b802c1.html.vue"]]),d=JSON.parse('{"path":"/middleware/nginx/b802c1","title":"nginx入门教程","lang":"en-US","frontmatter":{"title":"nginx入门教程","createTime":"2022-06-02T18:53:20.000Z","permalink":"/middleware/nginx/b802c1"},"headers":[],"readingTime":{"minutes":1.57,"words":471},"git":{"updatedTime":1732499705000,"contributors":[{"name":"qiqiang","email":"qiqiang@pingpongx.com","commits":2,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"},{"name":"qiqiang","email":"qiqiang","commits":5,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"}]},"filePathRelative":"notes/middleware/nginx/10.nginx入门教程.md","bulletin":false}');export{k as comp,d as data};
