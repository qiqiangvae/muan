import{_ as s,c as a,b as n,o as e}from"./app-BZRVOKAf.js";const t={};function l(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h2 id="lazyholder-实现单例" tabindex="-1"><a class="header-anchor" href="#lazyholder-实现单例"><span>LazyHolder 实现单例</span></a></h2><p>Java中实现单例的几种方式之一是使用LazyHolder单例模式。这是一种懒加载方式，当需要使用时再去初始化，避免了提前初始化的浪费，同时也是线程安全的。</p><p>LazyHolder单例模式的核心思想是定义一个私有的静态类，在这个类内部定义一个私有的静态变量，用于持有单例对象，外部通过公共的静态方法获取单例对象。</p><p>以下是LazyHolder单例模式的实现方式：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> LazySingleton</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> LazySingleton</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> LazyHolder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> LazySingleton</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> INSTANCE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> LazySingleton</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> LazySingleton </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> LazyHolder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">INSTANCE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式定义的单例模式，生命周期与整个应用程序相同，只有在应用程序退出时才会释放掉。</p>`,6)]))}const k=s(t,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/java/code/java/","title":"Java常用编码技巧","lang":"en-US","frontmatter":{"title":"Java常用编码技巧","createTime":"2023-03-03T18:53:20.000Z","permalink":"/java/code/java/"},"headers":[],"readingTime":{"minutes":0.77,"words":230},"git":{"updatedTime":1732499705000,"contributors":[{"name":"qiqiang","email":"qiqiang@pingpongx.com","commits":2,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"},{"name":"Quince","email":"qiqiangvae@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Quince?v=4","url":"https://github.com/Quince"},{"name":"qiqiang","email":"qiqiang","commits":1,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"}]},"filePathRelative":"notes/java/code/10.Java常用编码技巧.md","bulletin":false}');export{k as comp,r as data};
