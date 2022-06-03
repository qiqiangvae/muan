# Java 网络编程的演进史和 epoll

## BIO

```java
public class BioServer {
    private static ExecutorService executorService = Executors.newFixedThreadPool(8);

    public static void main(String[] args) throws IOException {
        // 绑定端口，启动服务器
        ServerSocket serverSocket = new ServerSocket(9999);
        System.out.println("服务器启动成功");
        while (true) {
            // 接收客户端连接，这里是阻塞的
            Socket socket = serverSocket.accept();
            System.out.println(socket.getRemoteSocketAddress() + "已连接");
            // 开启其它线程处理io事件
            executorService.execute(() -> {
                try {
                    handMsg(socket);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
        }
    }

    private static void handMsg(Socket socket) throws IOException {
        InputStream inputStream = socket.getInputStream();
        byte[] bytes = new byte[1024];
        while (true) {
            // 读取数据，这里也是阻塞的
            inputStream.read(bytes);
            System.out.println(new String(bytes, StandardCharsets.UTF_8));
        }
    }
}
```

上面的代码是使用 BIO 模式编写的服务器，阻塞的原因是`serverSocket.accept()`和`inputStream.read(bytes)`都是阻塞的，虽然主线程只处理接收连接的事件，但是读取数据的时候会阻塞，此方法无法处理高并发。

## NIO

### 普通 NIO 编程

```java
public class NioServer {
    public static void main(String[] args) throws IOException {
        // 绑定端口，启动服务器
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
        serverSocketChannel.socket().bind(new InetSocketAddress(9999));
        // 设置非阻塞
        serverSocketChannel.configureBlocking(false);
        List<SocketChannel> channelList = new ArrayList<>();
        while (true) {
            // 接收连接事件
            SocketChannel socketChannel = serverSocketChannel.accept();
            if (socketChannel != null) {
                System.out.println("连接成功");
                socketChannel.configureBlocking(false);
                // 设置非阻塞
                channelList.add(socketChannel);
            }
            // 处理连接到客户端的io事件
            Iterator<SocketChannel> iterator = channelList.iterator();
            while (iterator.hasNext()) {
                SocketChannel channel = iterator.next();
                ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
                int read = channel.read(byteBuffer);
                if (read > 0) {
                    String msg = new String(byteBuffer.array(), StandardCharsets.UTF_8);
                    System.out.println(channel.getRemoteAddress() + ":" + msg);
                } else if (read == -1) {
                    // 关闭连接
                    iterator.remove();
                }
            }
        }
    }
}
```

此方式使用 NIO 编写，在接收客户端连接和处理读写事件的时候都是非阻塞的。但是在处理读写事件时候，会遍历所有连接的 socket，在实际情况下，很多客户端只是连接了服务器但并没有读写操作发生，这样就会产生无用的遍历。

### 多路复用 NIO 编程

```java
public class NioSelectorServer {
    public static void main(String[] args) throws IOException {
        // 开启多路复用器
        Selector selector = Selector.open();
        // 开启服务器
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
        serverSocketChannel.socket().bind(new InetSocketAddress(9999));
        System.out.println("服务器启动");
        // 设置服务器非阻塞
        serverSocketChannel.configureBlocking(false);
        // 将ServerSocketChannel注册到Selector上，监听 OP_ACCEPT 事件
        serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);
        while (true) {
            int select = selector.select();
            // 当有事件发生的时候，处理事件
            if (select > 0) {
                Set<SelectionKey> selectionKeys = selector.selectedKeys();
                Iterator<SelectionKey> selectionKeyIterator = selectionKeys.iterator();
                if (selectionKeyIterator.hasNext()) {
                    SelectionKey selectionKey = selectionKeyIterator.next();
                    // 如果是连接事件
                    if (selectionKey.isAcceptable()) {
                        ServerSocketChannel serverSocket = (ServerSocketChannel) selectionKey.channel();
                        // 接收客户端连接，并且设置非阻塞，然后注册SocketChannel到多路复用器上，监听读事件
                        SocketChannel socketChannel = serverSocket.accept();
                        System.out.println(socketChannel.getRemoteAddress() + "已连接");
                        socketChannel.configureBlocking(false);
                        socketChannel.register(selector, SelectionKey.OP_READ);
                    } else if (selectionKey.isReadable()) {
                        // 如果有可读事件，那么处理数据
                        SocketChannel socketChannel = (SocketChannel) selectionKey.channel();
                        ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
                        int read = socketChannel.read(byteBuffer);
                        if (read > 0) {
                            String msg = new String(byteBuffer.array(), StandardCharsets.UTF_8);
                            System.out.println(socketChannel.getRemoteAddress() + ":" + msg);
                        } else if (read == -1) {
                            socketChannel.close();
                            System.out.println(socketChannel.getLocalAddress() + "断开连接");
                        }
                    }
                    selectionKeyIterator.remove();
                }
            }
        }
    }
}
```

使用多路复用器编程是普通 NIO 编程的进阶版，该方法可以避免普通 NIO 编程的无效遍历的问题，选择性的处理各种事件。

## Netty

```java
public class NettyServer {
    public static void main(String[] args) {
        ServerBootstrap serverBootstrap = new ServerBootstrap();
        EventLoopGroup boss = new NioEventLoopGroup(1);
        EventLoopGroup workers = new NioEventLoopGroup();
        serverBootstrap.group(boss, workers)
                .channel(NioServerSocketChannel.class)
                .childHandler(new ChannelInitializer<SocketChannel>() {
                    @Override
                    protected void initChannel(SocketChannel ch) throws Exception {
                        ch.pipeline().addLast(new StringEncoder());
                        ch.pipeline().addLast(new StringDecoder());
                        ch.pipeline().addLast(new SimpleChannelInboundHandler<String>() {
                            @Override
                            protected void channelRead0(ChannelHandlerContext ctx, String msg) throws Exception {
                                System.out.println(msg);
                            }
                        });
                    }
                });
        try {
            ChannelFuture  channelFuture = serverBootstrap.bind(9999).sync();
            channelFuture.channel().closeFuture().sync();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }finally {
            boss.shutdownGracefully();
            workers.shutdownGracefully();
        }
    }
}
```

## 客户端连接测试

客户端连接可以使用`nc`命令。

```shell
$ nc localhost 9999
1233
rrrrrrrrr
```

## NIO 多路复用原理详解（epoll）

NIO 多路复用编码的三个要素。

```java
Selector selector = Selector.open();
SelectableChannel.register(selector, SelectionKey.OP_ACCEPT);
selector.select();
```

1. 得到一个 Selector。
2. 将 Channel 注册到Selector上，并设置一个感兴趣的事件。
3. 执行 selecte 方法，看看是否有 IO 事件发生。

### Selector selector = Selector.open()

首先看是如何得到 Selector 的。看看 open 方法。

```java
public static Selector open() throws IOException {
    return SelectorProvider.provider().openSelector();
}
public static SelectorProvider provider() {
    synchronized (lock) {
        if (provider != null)
            return provider;
        return AccessController.doPrivileged(
            new PrivilegedAction<SelectorProvider>() {
                public SelectorProvider run() {
                    if (loadProviderFromProperty())
                        return provider;
                    if (loadProviderAsService())
                        return provider;
                    provider = sun.nio.ch.DefaultSelectorProvider.create();
                    return provider;
                }
            });
    }
}
```

通过抽象类`SelectorProvider`获取到一个`SelectorProvider`的实现类，然后再调用该实现类的`openSelector()`方法。重点是这行代码。`provider = sun.nio.ch.DefaultSelectorProvider.create()`。那就看看`sun.nio.ch.DefaultSelectorProvider`这个类到底做了什么。在openjdk的源码中，找到三个这样的类。
![DefaultSelectorProvider](https://img-blog.csdnimg.cn/20210225114432269.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pvbktlZQ==,size_16,color_FFFFFF,t_70#pic_center)

可以看到他们是针对不同的操作系统有不同的实现，这里看第一个。

```java
public static SelectorProvider create() {
    String osname = AccessController
        .doPrivileged(new GetPropertyAction("os.name"));
    if (osname.equals("SunOS"))
        return createProvider("sun.nio.ch.DevPollSelectorProvider");
    if (osname.equals("Linux"))
        return createProvider("sun.nio.ch.EPollSelectorProvider");
    return new sun.nio.ch.PollSelectorProvider();
}
```

很简单的一行代码，如果操作系统是Linux，那么创建的是`sun.nio.ch.EPollSelectorProvider`。

```java
public class EPollSelectorProvider
    extends SelectorProviderImpl{
    public AbstractSelector openSelector() throws IOException {
        return new EPollSelectorImpl(this);
    }

    public Channel inheritedChannel() throws IOException {
        return InheritedChannel.getChannel();
    }
}
```

可以看到最终返回了一个`EPollSelectorImpl`类，这是`Selector`的一个实现类，它的重要成员变量和构造方法如下：

```java
// 用来中断的文件描述符
protected int fd0;
protected int fd1;
// 轮询对象
EPollArrayWrapper pollWrapper;
// SelectionKey 的文件描述符映射
private Map<Integer,SelectionKeyImpl> fdToKey;
EPollSelectorImpl(SelectorProvider sp) throws IOException {
    super(sp);
    long pipeFds = IOUtil.makePipe(false);
    fd0 = (int) (pipeFds >>> 32);
    fd1 = (int) pipeFds;
    pollWrapper = new EPollArrayWrapper();
    pollWrapper.initInterrupt(fd0, fd1);
    fdToKey = new HashMap<>();
}
```

```java
EPollArrayWrapper() throws IOException {
    // creates the epoll file descriptor
    epfd = epollCreate();
    // the epoll_event array passed to epoll_wait
    int allocationSize = NUM_EPOLLEVENTS * SIZE_EPOLLEVENT;
    pollArray = new AllocatedNativeObject(allocationSize, true);
    pollArrayAddress = pollArray.address();

    // eventHigh needed when using file descriptors > 64k
    if (OPEN_MAX > MAX_UPDATE_ARRAY_SIZE)
        eventsHigh = new HashMap<>();
}
```

重点关注`epfd = epollCreate()`。这里调用的是一个本地方法，获取到 epoll 的文件描述符，实际调用的是linux操作系统方法`epoll_create`。
使用`man epoll_create`命令参看操作系统函数。

### SelectableChannel.register(selector, SelectionKey.OP_ACCEPT)

第二步将 Channel 注册到 Selector 上。

```java
public final SelectionKey register(Selector sel, int ops,
                                   Object att)
    throws ClosedChannelException{
        synchronized (regLock) {
            if (!isOpen())
                throw new ClosedChannelException();
            if ((ops & ~validOps()) != 0)
                throw new IllegalArgumentException();
            if (blocking)
                throw new IllegalBlockingModeException();
            SelectionKey k = findKey(sel);
            if (k != null) {
                k.interestOps(ops);
                k.attach(att);
            }
            if (k == null) {
                // New registration
                synchronized (keyLock) {
                    if (!isOpen())
                        throw new ClosedChannelException();
                    k = ((AbstractSelector)sel).register(this, ops, att);
                    addKey(k);
                }
            }
            return k;
        }
    }
```

重点代码是`k = ((AbstractSelector)sel).register(this, ops, att);` 

```java
protected final SelectionKey register(AbstractSelectableChannel var1, int var2, Object var3) {
    if (!(var1 instanceof SelChImpl)) {
        throw new IllegalSelectorException();
    } else {
        SelectionKeyImpl var4 = new SelectionKeyImpl((SelChImpl)var1, this);
        var4.attach(var3);
        synchronized(this.publicKeys) {
            this.implRegister(var4);
        }

        var4.interestOps(var2);
        return var4;
    }
}
```

`implRegister`是一个抽象方法，最后调用到了`EPollSelectorImpl.implRegister`。

```java
protected void implRegister(SelectionKeyImpl ski) {
    if (closed)
        throw new ClosedSelectorException();
    SelChImpl ch = ski.channel;
    int fd = Integer.valueOf(ch.getFDVal());
    fdToKey.put(fd, ski);
    pollWrapper.add(fd);
    keys.add(ski);
}
```

这段代码里面只是对相关对象和文件描述符做了绑定。

### selector.select()

```java
public int select(long var1) throws IOException {
    if (var1 < 0L) {
        throw new IllegalArgumentException("Negative timeout");
    } else {
        return this.lockAndDoSelect(var1 == 0L ? -1L : var1);
    }
}
private int lockAndDoSelect(long var1) throws IOException {
    synchronized(this) {
        if (!this.isOpen()) {
            throw new ClosedSelectorException();
        } else {
            int var10000;
            synchronized(this.publicKeys) {
                synchronized(this.publicSelectedKeys) {
                    var10000 = this.doSelect(var1);
                }
            }

            return var10000;
        }
    }
}
```

在抽象类`SelectorImpl`中，最终调用到了`EPollSelectorImpl.doSelect(long timeout)`

```java
protected int doSelect(long timeout) throws IOException {
    if (closed)
        throw new ClosedSelectorException();
    processDeregisterQueue();
    try {
        begin();
        pollWrapper.poll(timeout);
    } finally {
        end();
    }
    processDeregisterQueue();
    int numKeysUpdated = updateSelectedKeys();
    if (pollWrapper.interrupted()) {
        // Clear the wakeup pipe
        pollWrapper.putEventOps(pollWrapper.interruptedIndex(), 0);
        synchronized (interruptLock) {
            pollWrapper.clearInterrupted();
            IOUtil.drain(fd0);
            interruptTriggered = false;
        }
    }
    return numKeysUpdated;
}
```

重点是`pollWrapper.poll(timeout);`这行代码就是轮询的过程。

```java
int poll(long timeout) throws IOException {
    updateRegistrations();
    // 获取IO事件数量
    updated = epollWait(pollArrayAddress, NUM_EPOLLEVENTS, timeout, epfd);
    for (int i=0; i<updated; i++) {
        if (getDescriptor(i) == incomingInterruptFD) {
            interruptedIndex = i;
            interrupted = true;
            break;
        }
    }
    return updated;
}
/**
 * 更新挂起的注册事件
 **/
private void updateRegistrations() {
    synchronized (updateLock) {
        int j = 0;
        while (j < updateCount) {
            int fd = updateDescriptors[j];
            short events = getUpdateEvents(fd);
            boolean isRegistered = registered.get(fd);
            int opcode = 0;

            if (events != KILLED) {
                if (isRegistered) {
                    opcode = (events != 0) ? EPOLL_CTL_MOD : EPOLL_CTL_DEL;
                } else {
                    opcode = (events != 0) ? EPOLL_CTL_ADD : 0;
                }
                if (opcode != 0) {
                    epollCtl(epfd, opcode, fd, events);
                    if (opcode == EPOLL_CTL_ADD) {
                        registered.set(fd);
                    } else if (opcode == EPOLL_CTL_DEL) {
                        registered.clear(fd);
                    }
                }
            }
            j++;
        }
        updateCount = 0;
    }
}
```

重点代码是`epollCtl(epfd, opcode, fd, events)`和`updated = epollWait(pollArrayAddress, NUM_EPOLLEVENTS, timeout, epfd)`。这两个方法也是本地方法，可以通过`man epoll_ctl`和`man epoll_wait`查看。
至此 NIO 和 epoll 的关联关系就梳理完成了。

### epoll 工作原理

看大神的解释，地址[Epoll原理解析](https://blog.csdn.net/armlinuxww/article/details/92803381)
总结 epoll 三步走：

1. epoll_create
2. epoll_ctl
3. epoll_wait

在 redis 中其实也是这样的，可以在 redis 源码的`ae_epoll.c`文件中看到epoll的三个步骤。
