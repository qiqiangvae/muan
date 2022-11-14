---
title: NIO 测试堆内内存和直接内存
date: 2022-06-04 17:30:42
permalink: /java/jvm/8013e62/
---
# NIO 测试堆内内存和直接内存

```java
public class DirectMemoryDemo {
    static int count = 1000000;

    public static void main(String[] args) {
        allocate();
        allocateDirect();
        allocateOperate();
        allocateDirectOperate();
    }

    public static void allocateOperate() {
        long start = System.currentTimeMillis();
        ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
        for (int i = 0; i < count; i++) {
            for (int j = 0; j < 100; j++) {
                byteBuffer.putInt(j);
            }
            byteBuffer.flip();
            for (int j = 0; j < 100; j++) {
                byteBuffer.get(j);
            }
            byteBuffer.clear();
        }
        System.out.println("堆内内存操作耗时" + (System.currentTimeMillis() - start));
    }

    public static void allocateDirectOperate() {
        long start = System.currentTimeMillis();
        ByteBuffer byteBuffer = ByteBuffer.allocateDirect(1024);
        for (int i = 0; i < count; i++) {
            for (int j = 0; j < 100; j++) {
                byteBuffer.putInt(j);
            }
            byteBuffer.flip();
            for (int j = 0; j < 100; j++) {
                byteBuffer.get(j);
            }
            byteBuffer.clear();
        }
        System.out.println("直接内存操作耗时" + (System.currentTimeMillis() - start));
    }

    public static void allocate() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < count; i++) {
            ByteBuffer.allocate(1024);
        }
        System.out.println("堆内内存空间分配耗时" + (System.currentTimeMillis() - start));
    }

    public static void allocateDirect() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < count; i++) {
            ByteBuffer.allocateDirect(1024);
        }
        System.out.println("直接内存空间分配耗时" + (System.currentTimeMillis() - start));
    }
}
```
结果：
```
堆内内存空间分配耗时212
直接内存空间分配耗时651
堆内内存操作耗时153
直接内存操作耗时88
```
总结：

1. 堆内内存的创建和销毁比直接内存的更快。
2. 在直接内存上的读写操作比在堆内内存上的性能更高。
