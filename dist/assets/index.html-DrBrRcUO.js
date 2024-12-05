import{_ as i,c as e,e as a,o as n}from"./app-DITZCmiV.js";const t={};function l(h,s){return n(),e("div",null,s[0]||(s[0]=[a(`<p>记录一些开发者必备的傻瓜式配置，方便忘记的时候快速找到。</p><h2 id="镜像中心" tabindex="-1"><a class="header-anchor" href="#镜像中心"><span>镜像中心</span></a></h2><ol><li><a href="https://mirrors.ustc.edu.cn/" target="_blank" rel="noopener noreferrer">中科大镜像中心</a>，网址<code>https://mirrors.ustc.edu.cn/</code>;</li><li><a href="http://mirrors.aliyun.com/" target="_blank" rel="noopener noreferrer">阿里云镜像中心</a>，网址<code>http://mirrors.aliyun.com/</code>;</li><li><a href="https://mirrors.tuna.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">清华大学镜像中心</a>，网址<code>https://mirrors.tuna.tsinghua.edu.cn/</code>;</li><li><a href="https://mirrors.163.com/" target="_blank" rel="noopener noreferrer">网易镜像中心</a>，网址<code>https://mirrors.163.com/</code>;</li></ol><h2 id="开发配置" tabindex="-1"><a class="header-anchor" href="#开发配置"><span>开发配置</span></a></h2><h3 id="github-访问加速" tabindex="-1"><a class="header-anchor" href="#github-访问加速"><span>Github 访问加速</span></a></h3><p>推荐使用 SwitchHosts 工具动态配置 Github 的 hosts，<a href="#%E8%BD%AF%E4%BB%B6%E6%8E%A8%E8%8D%90">软件</a>下载见上。 选择远程 hosts 类型，输入地址 <a href="https://gitlab.com/ineo6/hosts/-/raw/master/next-hosts" target="_blank" rel="noopener noreferrer">https://gitlab.com/ineo6/hosts/-/raw/master/next-hosts</a>。</p><p>该项目仓库地址 <a href="https://github.com/ineo6/hosts" target="_blank" rel="noopener noreferrer">https://github.com/ineo6/hosts</a> 或 <a href="https://gitlab.com/ineo6/hosts" target="_blank" rel="noopener noreferrer">https://gitlab.com/ineo6/hosts</a>（推荐 gitlab，访问速度快）。</p><p>配置如下图：</p><p><img src="https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/KZgCg2.jpg" alt="KZgCg2"></p><h3 id="zsh-安装配置" tabindex="-1"><a class="header-anchor" href="#zsh-安装配置"><span>zsh 安装配置</span></a></h3><p>安装 <strong>zsh</strong></p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ubuntu 安装命令</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zsh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 <strong>oh-my-zsh</strong></p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 国内访问更快</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐主题 <code>steeef</code>或者<code>ys</code>。</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .zshrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置主题样式名称</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ZSH_THEME=&quot;steeef&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="相关-zsh-插件推荐" tabindex="-1"><a class="header-anchor" href="#相关-zsh-插件推荐"><span>相关 ZSH 插件推荐</span></a></h4><p><a href="https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md" target="_blank" rel="noopener noreferrer"><strong>zsh-syntax-highlighting</strong></a> 高亮插件</p><p><a href="https://github.com/MichaelAquilina/zsh-you-should-use" target="_blank" rel="noopener noreferrer"><strong>you-should-use</strong></a> 命令优化插件</p><p><a href="https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md" target="_blank" rel="noopener noreferrer"><strong>zsh-autosuggestions</strong></a> 自动建议命令的插件</p><p><a href="https://github.com/lukechilds/zsh-better-npm-completion" target="_blank" rel="noopener noreferrer"><strong>zsh-better-npm-completion</strong></a> 自动完成命令的插件，可以按 tab 键切换选项</p><h3 id="brew-安装" tabindex="-1"><a class="header-anchor" href="#brew-安装"><span>brew 安装</span></a></h3><p>推荐这个仓库 <a href="https://gitee.com/cunkai/HomebrewCN" target="_blank" rel="noopener noreferrer">https://gitee.com/cunkai/HomebrewCN</a>。</p><p>一键安装并设置国内镜像源</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/bin/zsh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="vim-配置" tabindex="-1"><a class="header-anchor" href="#vim-配置"><span>vim 配置</span></a></h3><p>在<code>~/.vimrc</code>中添加如下配置，如果没有该文件则新建文件。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 设置编码格式</span></span>
<span class="line"><span>set encoding=utf-8</span></span>
<span class="line"><span># 设置行号</span></span>
<span class="line"><span>set number</span></span>
<span class="line"><span># 设置高亮</span></span>
<span class="line"><span>syntax on</span></span>
<span class="line"><span># 自动缩进</span></span>
<span class="line"><span>set autoindent</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="macos-dock-加速隐藏和显示" tabindex="-1"><a class="header-anchor" href="#macos-dock-加速隐藏和显示"><span>Macos Dock 加速隐藏和显示</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 加快速度</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">defaults</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> write</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> com.apple.Dock</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> autohide-delay</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -float</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> killall</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Dock</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 恢复默认</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">defaults</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> delete</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> com.apple.Dock</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> autohide-delay</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> killall</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Dock</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node-和-npm-安装" tabindex="-1"><a class="header-anchor" href="#node-和-npm-安装"><span>node 和 npm 安装</span></a></h3><h4 id="node-安装和版本管理" tabindex="-1"><a class="header-anchor" href="#node-安装和版本管理"><span>node 安装和版本管理</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 安装 node 版本管理工具</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">brew</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nvm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据提示在 .zshrc 文件中加入以下配置</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> NVM_DIR</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HOME/.nvm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">   [</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -s</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/opt/nvm/nvm.sh</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> \\.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/opt/nvm/nvm.sh</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # This loads nvm</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">   [</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -s</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/opt/nvm/etc/bash_completion.d/nvm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> \\.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/opt/nvm/etc/bash_completion.d/nvm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # This     loads nvm bash_completion</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置"><span>VsCode 配置</span></a></h3><h4 id="配置从命令行用-vscode-打开文件" tabindex="-1"><a class="header-anchor" href="#配置从命令行用-vscode-打开文件"><span>配置从命令行用 Vscode 打开文件</span></a></h4><p>打开 .zshrc 文件编辑，加入一下代码</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">alias</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="插件推荐" tabindex="-1"><a class="header-anchor" href="#插件推荐"><span>插件推荐</span></a></h4><p><strong>Project Manager</strong> 可以很方面管理你的项目，快速切换</p>`,43)]))}const p=i(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/dev/configuration-share/","title":"开发配置分享","lang":"en-US","frontmatter":{"title":"开发配置分享","createTime":"2022-06-02T18:53:20.000Z","permalink":"/dev/configuration-share/"},"headers":[],"readingTime":{"minutes":1.84,"words":552},"git":{"updatedTime":1732499705000,"contributors":[{"name":"qiqiang","email":"qiqiang@pingpongx.com","commits":3,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"}]},"filePathRelative":"notes/dev/22.开发配置分享.md","bulletin":false}');export{p as comp,d as data};