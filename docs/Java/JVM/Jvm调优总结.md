---
title: Jvm 调优总结
date: 2022-06-04 17:30:42
permalink: /java/jvm/8013e61/
---

# Jvm 调优总结

## 常用命令

### jps

该命令可以查看计算机所有的 java 进程，默认打印出 **pid** 和**文件名**。

### jstat

| options参数         | 说明          |
|-------------------|-------------|
| -class            | 类加载器        |
| -compiler         | JIT         |
| -gc               | GC堆状态       |
| -gccapacity       | 各区大小        |
| -gccause          | 最近一次GC统计和原因 |
| -gcmetacapacity   | 元空间状态       |
| -gcnew            | 新生代垃圾回收统计   |
| -gcnewcapacity    | 新生代内存空间统计   |
| -gcold            | 老年代垃圾回收统计   |
| -gcoldcapacity    | 老年代内存空间统计   |
| -gcutil           | 动态显示垃圾回收状态  |
| -printcompilation | 当前VM执行的信息   |

```shell
jstat -gc 38620
```

输出

```text
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT   
10752.0 10752.0 4850.9  0.0   65536.0  55434.0   175104.0    1272.2   19328.0 18559.8 2432.0 2248.8      4    0.055   1      0.008    0.062
```

- S0C：第一个幸存区的大小；
- S1C：第二个幸存区的大小；
- S0U：第一个幸存区的使用大小；
- S1U：第二个幸存区的使用大小；
- EC：伊甸园区的大小；
- EU：伊甸园区的使用大小；
- OC：老年代大小；
- OU：老年代使用大小
- MC：方法区大小；
- MU：方法区使用大小；
- CCSC:压缩类空间大小；
- CCSU:压缩类空间使用大小；
- YGC：年轻代垃圾回收次数；
- YGCT：年轻代垃圾回收消耗时间；
- FGC：老年代垃圾回收次数；
- FGCT：老年代垃圾回收消耗时间；
- GCT：垃圾回收消耗总时间；

### jstack 查看 Jvm 线程状态

```shell
jstack 11392
```

控制台输出信息如下：

```text
2022-11-14 15:56:42
Full thread dump OpenJDK 64-Bit Server VM (25.352-b08 mixed mode):

"Attach Listener" #24 daemon prio=9 os_prio=31 tid=0x0000000131071000 nid=0x4813 waiting on condition [0x0000000000000000]
   java.lang.Thread.State: RUNNABLE

"RMI TCP Connection(23)-127.0.0.1" #22 daemon prio=5 os_prio=31 tid=0x0000000130b5b800 nid=0xa607 runnable [0x000000017281d000]
   java.lang.Thread.State: RUNNABLE
        at java.net.SocketInputStream.socketRead0(Native Method)
        at java.net.SocketInputStream.socketRead(SocketInputStream.java:116)
        at java.net.SocketInputStream.read(SocketInputStream.java:171)
        at java.net.SocketInputStream.read(SocketInputStream.java:141)
        at java.io.BufferedInputStream.fill(BufferedInputStream.java:246)
        at java.io.BufferedInputStream.read(BufferedInputStream.java:265)
        - locked <0x00000007b38c3390> (a java.io.BufferedInputStream)
        at java.io.FilterInputStream.read(FilterInputStream.java:83)
        at sun.rmi.transport.tcp.TCPTransport.handleMessages(TCPTransport.java:555)
        at sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.run0(TCPTransport.java:834)
        at sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.lambda$run$0(TCPTransport.java:688)
        at sun.rmi.transport.tcp.TCPTransport$ConnectionHandler$$Lambda$5/1146627806.run(Unknown Source)
        at java.security.AccessController.doPrivileged(Native Method)
        at sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.run(TCPTransport.java:687)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
        at java.lang.Thread.run(Thread.java:750)
```

### jconsole、visualvm 图形化工具

### jmap dump Jvm 堆数据

## CPU 100%排查

1. 找到最耗 CPU 的进程。用`top -c`显示所有进程的信息，然后输入`P`按 CPU 频率进行排序，找到最耗 CPU 的进程的 PID。
2. 找到最耗 CPU 的线程。用`top -Hp {进程PID}`显示进程 PID 的所有线程，然后输入`P`按 CPU 频率进行排序，找到最耗 CPU 的线程
   PID。
3. 将线程 PID 转换成16进制。`printf "%x\n" {线程PID}`
4. 查看栈信息。`jstack {进程PID}|grep "{线程 PID 16进制结果}" -C 10`

## 内存溢出排查

## JVM 常用调优参数

### 内存调优

| 参数命令                     | 说明                          |
|--------------------------|-----------------------------|
| -Xmn                     | 新生代内存最大值                    |
| -Xms/-XX:InitialHeapSize | 初始堆大小，默认物理内存的1/64           |
| -Xmx/-XX:MaxHeapSize     | 堆最大值，推荐和 -Xms 一样，默认物理内存的1/4 |
| -Xss                     | 线程最大栈                       |

### GC调优

| 参数命令                                      | 说明                                                       |
|-------------------------------------------|----------------------------------------------------------|
| -XX:+HeapDumpOnOutOfMemoryError           | 当出现 OOM 时，自动转存dump文件                                     |
| -XX:HeapDumpPath=dumpPath                 | 指定 dump 文件路径                                             |
| -XX:MaxTenuringThreshold=15               | 设置对象在新生代的存活周期，默认15                                       |
| -XX:SurvivorRatio=8                       | 设置 Eden 和 Survivor S0 S1的比例，默认是8:1:1                     |
| -XX:PretenureSizeThreshold=0              | 手动设置对象直接到老年代的大小                                          |
| -XX:+UseParNewGC                          | 指定新生代使用 ParNew 收集器                                       |
| -XX:+UseConcMarkSweepGC                   | 指定老年代使用 CMS 收集器                                          |
| -XX:+UseCMSInitiatingOccupancyOnly        | Hotspot 会根据计算成本决定是否使用 CMS 收集器，可以用该参数关闭计算策略强制使用 CMS       |
| -XX:+CMSClassUnloadingEnabled             | 指定 CMS 对非永久代进行回收，默认不回收                                   |
| -XX:CMSInitiatingOccupancyFraction=92     | 指定老年代回收垃圾回收时的空间使用比例，默认92%                                |
| -XX:CMSInitiatingPermOccupancyFraction=92 | 指定永久代回收垃圾回收时的空间使用比例，默认92%                                |
| -XX:+DisableExplicitGC                    | 禁止使用外部调用 System.gc() 进行垃圾回收                              |
| -XX:-CMSParallelRemarkEnabled             | 手动开启并行标记，节省年轻代标记时间                                       |
| -Xnoclassgc                               | 关闭 CLASS 的垃圾回收功能，默认20分钟这个 class 未被使用，虚拟机会卸载这个类。再次使用时重新加载 |
| -XX:+UseG1GC                              | 启用 G1 收集器                                                |
| -XX:+ParallelRefProcEnabled               | 并行处理Reference，加快处理速度，缩短耗时。默认关闭。                          |

### GC 日志

| 参数命令                | 说明 |
|---------------------|----|
| -verbose:gc         |    |
| -XX:+PrintGCDetails |    |
|  -Xlog:gc*          |    |

## OOM 排查

生产环境发生OOM是一件非常严重的事故，所以需要很快定位问题。

第一步查看当前存活的类的实例，到底是谁占用了内存。

```shell
# 12345 是pid，这个命令是找出排名前18个类的占用（因为有两行表头）
# jmap -histo:live 这个命令执行，JVM 会先触发 Full GC，然后再统计信息
jmap -histo 12345 | head -n 20
```

可以看到结果如下

```
 num     #instances         #bytes  class name (module)
-------------------------------------------------------
   1:       1558100       90686008  [B (java.base@17.0.6)
   2:        925359       37014360  java.util.TreeMap$Entry (java.base@17.0.6)
   3:       1538441       36922584  java.lang.String (java.base@17.0.6)
   4:         49500       15334904  [I (java.base@17.0.6)
   5:          3462       13307240  [J (java.base@17.0.6)
   6:        114050       10431048  [Ljava.lang.Object; (java.base@17.0.6)
   7:         50392        5939896  java.lang.Class (java.base@17.0.6)
   8:        182148        5828736  java.util.HashMap$Node (java.base@17.0.6)
   9:         32262        4042136  [C (java.base@17.0.6)
  10:        104266        3336512  java.util.concurrent.ConcurrentHashMap$Node (java.base@17.0.6)
  11:         30360        3227368  [Ljava.util.HashMap$Node; (java.base@17.0.6)
  12:         72974        2918960  java.util.LinkedHashMap$Entry (java.base@17.0.6)
  13:         17686        1556368  java.lang.reflect.Method (java.base@17.0.6)
  14:         57779        1386696  java.util.ArrayList (java.base@17.0.6)
  15:          2833        1260216  [Ljava.util.concurrent.ConcurrentHashMap$Node; (java.base@17.0.6)
  16:         21424        1028352  java.util.HashMap (java.base@17.0.6)
  17:         12516         901152  java.lang.reflect.Field (java.base@17.0.6)
  18:         19072         762880  com.intellij.psi.css.impl.descriptor.CssCommonDescriptorData
```

可以看到前18个类的实例数和占用内存的大小。