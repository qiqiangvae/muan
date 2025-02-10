import{_ as i,c as a,e as n,o as e}from"./app-B0Ppf8HT.js";const l={};function t(h,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="ubuntu-使用-kubeadm-安装k8s集群环境" tabindex="-1"><a class="header-anchor" href="#ubuntu-使用-kubeadm-安装k8s集群环境"><span>Ubuntu 使用 kubeadm 安装k8s集群环境</span></a></h1><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker.io</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 启动 docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">将用户添加到用户组</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gpasswd</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {username}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改镜像代理</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/docker/daemon.json</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;&lt;-</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  &quot;registry-mirrors&quot;: [&quot;https://52msq4gm.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">}</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-k8s" tabindex="-1"><a class="header-anchor" href="#安装-k8s"><span>安装 k8s</span></a></h2><h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备"><span>准备</span></a></h3><ol><li>由于 Kubernetes 使用主机名来区分集群里的节点，所以每个节点的 hostname 必须不能重名,所以需要修改 hostname</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/hostname</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">master</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sysctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kernel.hostname=master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>学习环境我们需要使用 docker 作为底层支持，需要把 cgroup 的驱动程序改成 systemd。</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/docker/daemon.json</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  &quot;exec-opts&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">native.cgroupdriver=systemd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">],</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  &quot;registry-mirrors&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://52msq4gm.mirror.aliyuncs.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>为了让 Kubernetes 能够检查、转发网络流量，你需要修改 iptables 的配置，启用“br_netfilter”模块。</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/modules-load.d/k8s.conf</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">br_netfilter</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/sysctl.d/k8s.conf</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">net.ipv4.ip_forward=1 # better than modify /etc/sysctl.conf</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sysctl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>关闭 Linux 的 swap 分区，提升 Kubernetes 的性能。</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> swapoff</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sed</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -ri</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/\\sswap\\s/s/^#?/#/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-kubeadm" tabindex="-1"><a class="header-anchor" href="#安装-kubeadm"><span>安装 kubeadm</span></a></h3><ol><li>安装 kubeadm、kubelet 和 kubectl。</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-transport-https</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ca-certificates</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> curl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-key</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/apt/sources.list.d/kubernetes.list</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kubeadm=1.23.3-00</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kubelet=1.23.3-00</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kubectl=1.23.3-00</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 验证是否成功安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubeadm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> version</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> version</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --client</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 锁定这三个软件的版本，避免意外升级导致版本错误</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-mark</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hold</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kubeadm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kubelet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kubectl</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>下载相关组件。</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 查看相关版本号的组件镜像名称</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubeadm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> config</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> images</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> list</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --kubernetes-version</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> v1.23.3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">k8s.gcr.io/kube-apiserver:v1.23.3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">k8s.gcr.io/kube-controller-manager:v1.23.3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">k8s.gcr.io/kube-scheduler:v1.23.3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">k8s.gcr.io/kube-proxy:v1.23.3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">k8s.gcr.io/pause:3.6</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">k8s.gcr.io/etcd:3.5.1-0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">k8s.gcr.io/coredns/coredns:v1.8.6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提前下载组件镜像</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">registry.aliyuncs.com/google_containers</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> in</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubeadm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> config images list </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--kubernetes-version</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> v1.23.3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> do</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    src_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=\${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">#</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">k8s</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">gcr</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">io</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    src_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=\${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">src_name</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">#</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">coredns</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pull</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $repo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$src_name</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $repo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$src_name</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $name</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rmi</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $repo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$src_name</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-master-节点" tabindex="-1"><a class="header-anchor" href="#安装-master-节点"><span>安装 master 节点</span></a></h3><ol><li>初始化 kubeadm</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kubeadm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --pod-network-cidr=10.10.0.0/16</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --apiserver-advertise-address=192.168.0.89</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 如果你想在外网访问K8s集群，那么这里设置你的外网IP</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    --apiserver-cert-extra-sans</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">121.121.121.121</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --kubernetes-version=v1.23.3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>初始化成功够，会打印出一串命令，直接执行就可以了。</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $HOME</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/.kube</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/kubernetes/admin.conf</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $HOME</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/.kube/config</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> chown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">id</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -u</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">id</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $HOME</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/.kube/config</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> KUBECONFIG</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">etc</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">kubernetes</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">admin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>其他节点要加入集群必须要用指令里的 token 和 ca 证书，所以这条命令务必拷贝后保存好。</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubeadm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> join</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 192.168.0.89:6443</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --token</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ki6bfe.9tzzeigubxdni7wj</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --discovery-token-ca-cert-hash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sha256:26267dcb0eb6033f6d0e613eb266056956bd42901fcd664acd05e1dd6443bbd4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>此时查看节点状态是 NotReady，这是因为还没有安装网络插件的原因。</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                 </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">NAME</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">     STATUS</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   ROLES</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                  AGE</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   VERSION</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">hw-dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   NotReady</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    control-plane,master</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   13m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   v1.23.3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装网络插件-flannel" tabindex="-1"><a class="header-anchor" href="#安装网络插件-flannel"><span>安装网络插件 Flannel</span></a></h3><p>这里是 flannel 官方配置，改一下就可以了，地址<a href="https://github.com/flannel-io/flannel/blob/master/Documentation/kube-flannel.yml" target="_blank" rel="noopener noreferrer">https://github.com/flannel-io/flannel/blob/master/Documentation/kube-flannel.yml</a> 。修改文件里的“net-conf.json”字段，把 Network 改成刚才 kubeadm 的参数 --pod-network-cidr 设置的地址段。如</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">net-conf.json</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> |</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      &quot;Network&quot;: &quot;10.10.0.0/16&quot;,</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      &quot;Backend&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        &quot;Type&quot;: &quot;vxlan&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      }</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>截止 2022-8-15 完成配置如下：</summary><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">&lt;!-- @include</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> @</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">document/k8s/kube-flannel.yml --&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></details><p>应用这个配置：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kube-flannel.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>稍等一会儿可以看到节点的状态已经是 Ready 了。</p><h3 id="安装-worker-节点" tabindex="-1"><a class="header-anchor" href="#安装-worker-节点"><span>安装 worker 节点</span></a></h3><p>执行刚才备份的命令，命令结束之后等待一段时间，worker 节点的 k8s 就安装好了。</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubeadm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> join</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 192.168.0.89:6443</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --token</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> e074xs.2vz38d7g49f592x8</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        --discovery-token-ca-cert-hash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sha256:2f9cd0471982a71c9842efad15bd1da9e8caadf795eaf7dc5e311c10afceb255</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,42)]))}const p=i(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/cloudNative/517b0e/","title":"Ubuntu使用kubeadm安装k8s集群","lang":"en-US","frontmatter":{"title":"Ubuntu使用kubeadm安装k8s集群","createTime":"2022-08-14T20:27:24.000Z","permalink":"/cloudNative/517b0e/"},"headers":[],"readingTime":{"minutes":2.76,"words":829},"git":{"updatedTime":1732511545000,"contributors":[{"name":"qiqiang","email":"qiqiang@pingpongx.com","commits":3,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"},{"name":"Quince","email":"qiqiangvae@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Quince?v=4","url":"https://github.com/Quince"},{"name":"qiqiang","email":"qiqiangvae@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"},{"name":"qiqiang","email":"qiqiang","commits":9,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"}]},"filePathRelative":"notes/云原生/50.Ubuntu使用kubeadm安装k8s集群.md","bulletin":false}');export{p as comp,d as data};
