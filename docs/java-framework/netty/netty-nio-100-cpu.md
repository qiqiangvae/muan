# Netty 如何解决 NIO 100% CPU

直接上代码，连netty作者的注释都很直接，翻译过来就是：通过创建一个新的 Selector 替代当前 event loop 中的 Selector 以此解决臭名昭著的 CPU 100% 的 bug。

```java
/**
 * Replaces the current {@link Selector} of this event loop with newly created {@link Selector}s to work
 * around the infamous epoll 100% CPU bug.
 */
public void rebuildSelector() {
    if (!inEventLoop()) {
        execute(new Runnable() {
            @Override
            public void run() {
                rebuildSelector0();
            }
        });
        return;
    }
    rebuildSelector0();
}
```

当 select 次数大于 512次（该数字可以通过参数io.netty.selectorAutoRebuildThreshold配置）的时候会出发。

看看重建 Selector 做了什么。


```java
private void rebuildSelector0() {
    //当前 event loop 中工作的 Selector
    final Selector oldSelector = selector;
    final SelectorTuple newSelectorTuple;

    if (oldSelector == null) {
        return;
    }

    try {
        // 创建新的 Selector
        newSelectorTuple = openSelector();
    } catch (Exception e) {
        logger.warn("Failed to create a new Selector.", e);
        return;
    }

    // Register all channels to the new Selector.
    int nChannels = 0;
    for (SelectionKey key: oldSelector.keys()) {
        Object a = key.attachment();
        try {
            if (!key.isValid() || key.channel().keyFor(newSelectorTuple.unwrappedSelector) != null) {
                continue;
            }

            int interestOps = key.interestOps();
            key.cancel();
            // 将 SelectionKey 重新注册到新的 Selector 上
            SelectionKey newKey = key.channel().register(newSelectorTuple.unwrappedSelector, interestOps, a);
            if (a instanceof AbstractNioChannel) {
                // Update SelectionKey
                ((AbstractNioChannel) a).selectionKey = newKey;
            }
            nChannels ++;
        } catch (Exception e) {
            logger.warn("Failed to re-register a Channel to the new Selector.", e);
            if (a instanceof AbstractNioChannel) {
                AbstractNioChannel ch = (AbstractNioChannel) a;
                ch.unsafe().close(ch.unsafe().voidPromise());
            } else {
                @SuppressWarnings("unchecked")
                NioTask<SelectableChannel> task = (NioTask<SelectableChannel>) a;
                invokeChannelUnregistered(task, key, e);
            }
        }
    }

    selector = newSelectorTuple.selector;
    unwrappedSelector = newSelectorTuple.unwrappedSelector;

    try {
        // time to close the old selector as everything else is registered to the new one
        // 因为所有的事件都注册到新的 Selector 上了，是时候关闭旧的 Selector 了
        oldSelector.close();
    } catch (Throwable t) {
        if (logger.isWarnEnabled()) {
            logger.warn("Failed to close the old Selector.", t);
        }
    }

    if (logger.isInfoEnabled()) {
        logger.info("Migrated " + nChannels + " channel(s) to the new Selector.");
    }
}
```



1. 新建一个 Selector。
2. 将注册到旧的 Selector 上的事件重新注册到新的 Selector 上。
3. 关闭旧的 Selector。