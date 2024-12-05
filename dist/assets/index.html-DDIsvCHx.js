import{_ as t,c as i,e as n,o as a}from"./app-DITZCmiV.js";const e={};function l(d,s){return a(),i("div",null,s[0]||(s[0]=[n(`<p>计算机内部存储数据都是用0和1来存储的，现在的计算机都是32位或者64位，即如果表示数字5，在32位的计算机中是这样表示的：</p><p><strong>00000000 00000000 00000000 00000101</strong></p><p>其中8位表示一个字节byte。</p><h2 id="原码、反码和补码" tabindex="-1"><a class="header-anchor" href="#原码、反码和补码"><span>原码、反码和补码</span></a></h2><p>以下表格用8位来表示十进制的原码、反码和补码</p><table><thead><tr><th>十进制</th><th>原码</th><th>反码</th><th>补码</th></tr></thead><tbody><tr><td>5</td><td>00000101</td><td>00000101</td><td>00000101</td></tr><tr><td>-5</td><td>10000101</td><td>11111010</td><td>11111011</td></tr><tr><td>2</td><td>00000010</td><td>00000010</td><td>00000010</td></tr><tr><td>-2</td><td>10000010</td><td>11111101</td><td>11111110</td></tr><tr><td>3</td><td>00000011</td><td>00000011</td><td>00000011</td></tr><tr><td>-3</td><td>10000011</td><td>1111100</td><td>1111101</td></tr></tbody></table><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h3><ol><li>正数的原码、反码和补码都是一样。</li><li>负数的反码是在原码的基础上，保持符号位（第一位）不变，后面的每一位都取反，负数的补码是在反码的基础上 <strong>+1</strong>。</li></ol><p>验算：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>5 - 2 = 5 + ( -2 )</span></span>
<span class="line"><span>=00000101(补码)+11111110(补码)</span></span>
<span class="line"><span>=00000011(补码)</span></span>
<span class="line"><span>=3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="左移和右移" tabindex="-1"><a class="header-anchor" href="#左移和右移"><span>左移和右移</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">jshell</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&gt; </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">1</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$1 ==&gt; 6</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jshell&gt; 3&gt;&gt;1</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$2 ==&gt; 1</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jshell&gt; -3&lt;&lt;1</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$3 ==&gt; -6</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jshell&gt; -3&gt;&gt;1</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$4 ==&gt; -2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>怎么解释上面这些计算数字呢，想知道这个其实只要知道左移右移到底是移什么。</p><ol><li>将3的原码<strong>00000011</strong>往左移动一位是<strong>00000110</strong>，这个表示十进制是6。</li><li>将3的原码<strong>00000011</strong>往右移动一位是<strong>00000001</strong>，这个表示十进制是1。</li><li>将-3的补码<strong>1111101</strong>往左移动一位是<strong>1111010</strong>，然后-1得到反码<strong>1111001</strong>，再取反得到原码<strong>0000110</strong>，这个表示十进制是-6。</li><li>将-3的补码<strong>1111101</strong>往右移动一位是<strong>0****111110</strong>，然后-1得到反码<strong>0111101</strong>，再取反得到原码<strong>1000010</strong>这个表示十进制是-2。</li></ol><h3 id="结论-1" tabindex="-1"><a class="header-anchor" href="#结论-1"><span>结论</span></a></h3><ol><li>正数左右移就是原码的左右移。</li><li>负数的左右移是补码左右移之后再-1得到反码，然后取反得到原码。</li><li>m &lt;&lt; n = m * 2^n。</li></ol>`,16)]))}const p=t(e,[["render",l],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/dev/4b8467/","title":"位运算基础","lang":"en-US","frontmatter":{"title":"位运算基础","createTime":"2022-06-02T18:53:20.000Z","permalink":"/dev/4b8467/"},"headers":[],"readingTime":{"minutes":1.57,"words":471},"git":{},"filePathRelative":"notes/dev/80.位运算基础.md","bulletin":false}');export{p as comp,h as data};