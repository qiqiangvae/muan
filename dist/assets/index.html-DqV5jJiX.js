import{_ as s,c as n,b as t,o as e}from"./app-BZRVOKAf.js";const i={};function d(l,a){return e(),n("div",null,a[0]||(a[0]=[t(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><h3 id="jps" tabindex="-1"><a class="header-anchor" href="#jps"><span>jps</span></a></h3><p>该命令可以查看计算机所有的 java 进程，默认打印出 <strong>pid</strong> 和<strong>文件名</strong>。</p><h3 id="jstat" tabindex="-1"><a class="header-anchor" href="#jstat"><span>jstat</span></a></h3><table><thead><tr><th>options参数</th><th>说明</th></tr></thead><tbody><tr><td>-class</td><td>类加载器</td></tr><tr><td>-compiler</td><td>JIT</td></tr><tr><td>-gc</td><td>GC堆状态</td></tr><tr><td>-gccapacity</td><td>各区大小</td></tr><tr><td>-gccause</td><td>最近一次GC统计和原因</td></tr><tr><td>-gcmetacapacity</td><td>元空间状态</td></tr><tr><td>-gcnew</td><td>新生代垃圾回收统计</td></tr><tr><td>-gcnewcapacity</td><td>新生代内存空间统计</td></tr><tr><td>-gcold</td><td>老年代垃圾回收统计</td></tr><tr><td>-gcoldcapacity</td><td>老年代内存空间统计</td></tr><tr><td>-gcutil</td><td>动态显示垃圾回收状态</td></tr><tr><td>-printcompilation</td><td>当前VM执行的信息</td></tr></tbody></table><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">jstat</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -gc</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 38620</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span> S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT   </span></span>
<span class="line"><span>10752.0 10752.0 4850.9  0.0   65536.0  55434.0   175104.0    1272.2   19328.0 18559.8 2432.0 2248.8      4    0.055   1      0.008    0.062</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>S0C：第一个幸存区的大小；</li><li>S1C：第二个幸存区的大小；</li><li>S0U：第一个幸存区的使用大小；</li><li>S1U：第二个幸存区的使用大小；</li><li>EC：伊甸园区的大小；</li><li>EU：伊甸园区的使用大小；</li><li>OC：老年代大小；</li><li>OU：老年代使用大小</li><li>MC：方法区大小；</li><li>MU：方法区使用大小；</li><li>CCSC:压缩类空间大小；</li><li>CCSU:压缩类空间使用大小；</li><li>YGC：年轻代垃圾回收次数；</li><li>YGCT：年轻代垃圾回收消耗时间；</li><li>FGC：老年代垃圾回收次数；</li><li>FGCT：老年代垃圾回收消耗时间；</li><li>GCT：垃圾回收消耗总时间；</li></ul><h3 id="jstack-查看-jvm-线程状态" tabindex="-1"><a class="header-anchor" href="#jstack-查看-jvm-线程状态"><span>jstack 查看 Jvm 线程状态</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">jstack</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 11392</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>控制台输出信息如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>2022-11-14 15:56:42</span></span>
<span class="line"><span>Full thread dump OpenJDK 64-Bit Server VM (25.352-b08 mixed mode):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Attach Listener&quot; #24 daemon prio=9 os_prio=31 tid=0x0000000131071000 nid=0x4813 waiting on condition [0x0000000000000000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;RMI TCP Connection(23)-127.0.0.1&quot; #22 daemon prio=5 os_prio=31 tid=0x0000000130b5b800 nid=0xa607 runnable [0x000000017281d000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span>        at java.net.SocketInputStream.socketRead0(Native Method)</span></span>
<span class="line"><span>        at java.net.SocketInputStream.socketRead(SocketInputStream.java:116)</span></span>
<span class="line"><span>        at java.net.SocketInputStream.read(SocketInputStream.java:171)</span></span>
<span class="line"><span>        at java.net.SocketInputStream.read(SocketInputStream.java:141)</span></span>
<span class="line"><span>        at java.io.BufferedInputStream.fill(BufferedInputStream.java:246)</span></span>
<span class="line"><span>        at java.io.BufferedInputStream.read(BufferedInputStream.java:265)</span></span>
<span class="line"><span>        - locked &lt;0x00000007b38c3390&gt; (a java.io.BufferedInputStream)</span></span>
<span class="line"><span>        at java.io.FilterInputStream.read(FilterInputStream.java:83)</span></span>
<span class="line"><span>        at sun.rmi.transport.tcp.TCPTransport.handleMessages(TCPTransport.java:555)</span></span>
<span class="line"><span>        at sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.run0(TCPTransport.java:834)</span></span>
<span class="line"><span>        at sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.lambda$run$0(TCPTransport.java:688)</span></span>
<span class="line"><span>        at sun.rmi.transport.tcp.TCPTransport$ConnectionHandler$$Lambda$5/1146627806.run(Unknown Source)</span></span>
<span class="line"><span>        at java.security.AccessController.doPrivileged(Native Method)</span></span>
<span class="line"><span>        at sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.run(TCPTransport.java:687)</span></span>
<span class="line"><span>        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)</span></span>
<span class="line"><span>        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)</span></span>
<span class="line"><span>        at java.lang.Thread.run(Thread.java:750)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jconsole、visualvm-图形化工具" tabindex="-1"><a class="header-anchor" href="#jconsole、visualvm-图形化工具"><span>jconsole、visualvm 图形化工具</span></a></h3><h3 id="jmap-dump-jvm-堆数据" tabindex="-1"><a class="header-anchor" href="#jmap-dump-jvm-堆数据"><span>jmap dump Jvm 堆数据</span></a></h3><h2 id="cpu-100-排查" tabindex="-1"><a class="header-anchor" href="#cpu-100-排查"><span>CPU 100%排查</span></a></h2><ol><li>找到最耗 CPU 的进程。用<code>top -c</code>显示所有进程的信息，然后输入<code>P</code>按 CPU 频率进行排序，找到最耗 CPU 的进程的 PID。</li><li>找到最耗 CPU 的线程。用<code>top -Hp {进程PID}</code>显示进程 PID 的所有线程，然后输入<code>P</code>按 CPU 频率进行排序，找到最耗 CPU 的线程 PID。</li><li>将线程 PID 转换成16进制。<code>printf &quot;%x\\n&quot; {线程PID}</code></li><li>查看栈信息。<code>jstack {进程PID}|grep &quot;{线程 PID 16进制结果}&quot; -C 10</code></li></ol><h2 id="内存溢出排查" tabindex="-1"><a class="header-anchor" href="#内存溢出排查"><span>内存溢出排查</span></a></h2><h2 id="jvm-常用调优参数" tabindex="-1"><a class="header-anchor" href="#jvm-常用调优参数"><span>JVM 常用调优参数</span></a></h2><h3 id="内存调优" tabindex="-1"><a class="header-anchor" href="#内存调优"><span>内存调优</span></a></h3><table><thead><tr><th>参数命令</th><th>说明</th></tr></thead><tbody><tr><td>-Xmn</td><td>新生代内存最大值</td></tr><tr><td>-Xms/-XX:InitialHeapSize</td><td>初始堆大小，默认物理内存的1/64</td></tr><tr><td>-Xmx/-XX:MaxHeapSize</td><td>堆最大值，推荐和 -Xms 一样，默认物理内存的1/4</td></tr><tr><td>-Xss</td><td>线程最大栈</td></tr></tbody></table><h3 id="gc调优" tabindex="-1"><a class="header-anchor" href="#gc调优"><span>GC调优</span></a></h3><table><thead><tr><th>参数命令</th><th>说明</th></tr></thead><tbody><tr><td>-XX:+HeapDumpOnOutOfMemoryError</td><td>当出现 OOM 时，自动转存dump文件</td></tr><tr><td>-XX:HeapDumpPath=dumpPath</td><td>指定 dump 文件路径</td></tr><tr><td>-XX:MaxTenuringThreshold=15</td><td>设置对象在新生代的存活周期，默认15</td></tr><tr><td>-XX:SurvivorRatio=8</td><td>设置 Eden 和 Survivor S0 S1的比例，默认是8:1:1</td></tr><tr><td>-XX:PretenureSizeThreshold=0</td><td>手动设置对象直接到老年代的大小</td></tr><tr><td>-XX:+UseParNewGC</td><td>指定新生代使用 ParNew 收集器</td></tr><tr><td>-XX:+UseConcMarkSweepGC</td><td>指定老年代使用 CMS 收集器</td></tr><tr><td>-XX:+UseCMSInitiatingOccupancyOnly</td><td>Hotspot 会根据计算成本决定是否使用 CMS 收集器，可以用该参数关闭计算策略强制使用 CMS</td></tr><tr><td>-XX:+CMSClassUnloadingEnabled</td><td>指定 CMS 对非永久代进行回收，默认不回收</td></tr><tr><td>-XX:CMSInitiatingOccupancyFraction=92</td><td>指定老年代回收垃圾回收时的空间使用比例，默认92%</td></tr><tr><td>-XX:CMSInitiatingPermOccupancyFraction=92</td><td>指定永久代回收垃圾回收时的空间使用比例，默认92%</td></tr><tr><td>-XX:+DisableExplicitGC</td><td>禁止使用外部调用 System.gc() 进行垃圾回收</td></tr><tr><td>-XX:-CMSParallelRemarkEnabled</td><td>手动开启并行标记，节省年轻代标记时间</td></tr><tr><td>-Xnoclassgc</td><td>关闭 CLASS 的垃圾回收功能，默认20分钟这个 class 未被使用，虚拟机会卸载这个类。再次使用时重新加载</td></tr><tr><td>-XX:+UseG1GC</td><td>启用 G1 收集器</td></tr><tr><td>-XX:+ParallelRefProcEnabled</td><td>并行处理Reference，加快处理速度，缩短耗时。默认关闭。</td></tr></tbody></table><h3 id="gc-日志" tabindex="-1"><a class="header-anchor" href="#gc-日志"><span>GC 日志</span></a></h3><table><thead><tr><th>参数命令</th><th>说明</th></tr></thead><tbody><tr><td>-verbose:gc</td><td></td></tr><tr><td>-XX:+PrintGCDetails</td><td></td></tr><tr><td>-Xlog:gc*</td><td></td></tr></tbody></table><h2 id="oom-排查" tabindex="-1"><a class="header-anchor" href="#oom-排查"><span>OOM 排查</span></a></h2><p>生产环境发生OOM是一件非常严重的事故，所以需要很快定位问题。</p><p>第一步查看当前存活的类的实例，到底是谁占用了内存。</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 12345 是pid，这个命令是找出排名前18个类的占用（因为有两行表头）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># jmap -histo:live 这个命令执行，JVM 会先触发 Full GC，然后再统计信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">jmap</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -histo</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 12345</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> head</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到结果如下</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span> num     #instances         #bytes  class name (module)</span></span>
<span class="line"><span>-------------------------------------------------------</span></span>
<span class="line"><span>   1:       1558100       90686008  [B (java.base@17.0.6)</span></span>
<span class="line"><span>   2:        925359       37014360  java.util.TreeMap$Entry (java.base@17.0.6)</span></span>
<span class="line"><span>   3:       1538441       36922584  java.lang.String (java.base@17.0.6)</span></span>
<span class="line"><span>   4:         49500       15334904  [I (java.base@17.0.6)</span></span>
<span class="line"><span>   5:          3462       13307240  [J (java.base@17.0.6)</span></span>
<span class="line"><span>   6:        114050       10431048  [Ljava.lang.Object; (java.base@17.0.6)</span></span>
<span class="line"><span>   7:         50392        5939896  java.lang.Class (java.base@17.0.6)</span></span>
<span class="line"><span>   8:        182148        5828736  java.util.HashMap$Node (java.base@17.0.6)</span></span>
<span class="line"><span>   9:         32262        4042136  [C (java.base@17.0.6)</span></span>
<span class="line"><span>  10:        104266        3336512  java.util.concurrent.ConcurrentHashMap$Node (java.base@17.0.6)</span></span>
<span class="line"><span>  11:         30360        3227368  [Ljava.util.HashMap$Node; (java.base@17.0.6)</span></span>
<span class="line"><span>  12:         72974        2918960  java.util.LinkedHashMap$Entry (java.base@17.0.6)</span></span>
<span class="line"><span>  13:         17686        1556368  java.lang.reflect.Method (java.base@17.0.6)</span></span>
<span class="line"><span>  14:         57779        1386696  java.util.ArrayList (java.base@17.0.6)</span></span>
<span class="line"><span>  15:          2833        1260216  [Ljava.util.concurrent.ConcurrentHashMap$Node; (java.base@17.0.6)</span></span>
<span class="line"><span>  16:         21424        1028352  java.util.HashMap (java.base@17.0.6)</span></span>
<span class="line"><span>  17:         12516         901152  java.lang.reflect.Field (java.base@17.0.6)</span></span>
<span class="line"><span>  18:         19072         762880  com.intellij.psi.css.impl.descriptor.CssCommonDescriptorData</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到前18个类的实例数和占用内存的大小。</p>`,32)]))}const p=s(i,[["render",d],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/java/jvm/8013e61/","title":"Jvm 调优总结","lang":"en-US","frontmatter":{"title":"Jvm 调优总结","createTime":"2022-06-04T17:30:42.000Z","permalink":"/java/jvm/8013e61/"},"headers":[],"readingTime":{"minutes":4.36,"words":1308},"git":{"updatedTime":1732499705000,"contributors":[{"name":"qiqiang","email":"qiqiang@pingpongx.com","commits":2,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"},{"name":"Quince","email":"qiqiangvae@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Quince?v=4","url":"https://github.com/Quince"},{"name":"qiqiang","email":"qiqiang","commits":3,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"}]},"filePathRelative":"notes/java/jvm/Jvm调优总结.md","bulletin":false}');export{p as comp,c as data};
