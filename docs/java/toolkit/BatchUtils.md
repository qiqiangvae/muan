# BatchUtils 批处理工具类

## 开发中的痛点

在开发过程中，会遇到这样一个场景：有一百万数据需要插入到数据库中，但是不能一次插入这么多，所以需要分批插入，每次插入1000条。这时候会有下面一段代码：

```java
@Test
public void withoutBatchUtils() {
  // 定义一次插入数据的数量，临时集合
  List<Object> list = new ArrayList<>(10);
  long count = 0;
  for (int i = 0; i < 99; i++) {
    // 添加需要插入的数据
    list.add(new Object());
    count++;
    if (list.size() == 10) {
      // 插入数据操作
      System.out.println("插入数据" + list);
      // 清空临时集合
      list.clear();
    }
  }
  // 处理剩余的数据
  if (!list.isEmpty()) {
    System.out.println("插入数据" + list);
  }
  System.out.println("共处理" + count);
}
```

上面这段其实是有一段通用模板的：

1. 定义一次插入数据的数量，临时集合。
2. 添加需要插入的数据。
3. 当临时集合满的时候执行插入操作，然后清空临时集合。
4. 处理剩余未满的数据。

既然是通用模板，那么久可以抽象出通用方法了。

## 批处理方法模板工具化

直接上代码：

::: tip 参考
OptionalCollection 是模仿 Optional 定义的集合类的 Optional，参考 [OptionalCollection](OptionalCollection)。
:::

```java
import org.nature.forest.common.java.util.OptionalCollection;

/**
 * OptionalCollection 是模范 Optional 定义的集合类的 Optional，可参考 <a href="https://github.com/qiqiangvae/forest/blob/main/forest-common/src/main/java/org/nature/forest/common/java/util/OptionalCollection.java"></a>
 */
public class BatchUtils {

    /**
     * 批量操作
     * 通过 Generator#add 添加元素，每当元素达到 max 时，执行 handler 的方法，结束时没满 max 的集合需要再执行一次 handler 方法
     *
     * @param max       每批次最大数量
     * @param generator 生成对象
     * @param handler   满 max 时的操作
     * @param <T>       对象类型
     * @return 总数量
     */
    public static <T> long execute(int max, Consumer<Generator<T>> generator, Consumer<OptionalCollection<T>> handler) {
        final Generator<T> g = new Generator<>(max, handler);
        generator.accept(g);
        g.end();
        return g.count;
    }

    public static class Generator<T> {
        final List<T> list;
        final int max;
        final Consumer<OptionalCollection<T>> handler;
        long count;

        public Generator(int max, Consumer<OptionalCollection<T>> handler) {
            this.max = max;
            this.handler = handler;
            list = new ArrayList<>(max);
        }


        public void add(T object) {
            list.add(object);
            if (list.size() == max) {
                count += max;
                handler.accept(OptionalCollection.of(list));
                list.clear();
            }
        }

        private void end() {
            count += list.size();
            handler.accept(OptionalCollection.of(list));
        }
    }
}
```

使用的时候可以这样使用：

```java
@Test
public void execute() {
  // 定义每次处理10条，
  long count = BatchUtils.execute(10, generator -> {
    for (int i = 0; i < 99; i++) {
      // 添加需要插入的数据
      generator.add(new Object());
    }
  },
  // 定义批处理操作
  optionalCollection -> optionalCollection.isNotEmpty(System.out::println));
  System.out.println("共处理" + count);
}
```

# 升级的批处理方法

有时候要根据生成的数据做不同的批处理方法，可以参考下面这个方法

```java
@Slf4j
public class BatchUtils {

    public static long execute(int max, Consumer<ExGenerator> generator, Map<Predicate<Class<?>>, Consumer<OptionalCollection<Object>>> consumerMap) {
        final ExGenerator g = new ExGenerator(max, consumerMap);
        generator.accept(g);
        g.end();
        return g.count;
    }

    public static class Factory {
        private final Map<Predicate<Class<?>>, Consumer<OptionalCollection<Object>>> consumerMap;

        private Factory() {
            consumerMap = new LinkedHashMap<>();
        }

        public static Factory builder() {
            return new Factory();
        }

        public Factory add(Predicate<Class<?>> predicate, Consumer<OptionalCollection<Object>> consumer) {
            consumerMap.put(predicate, consumer);
            return this;
        }

        public Map<Predicate<Class<?>>, Consumer<OptionalCollection<Object>>> build() {
            return consumerMap;
        }
    }

    public static class ExGenerator {
        final Map<Class<?>, List<Object>> map;
        final int max;
        final Map<Predicate<Class<?>>, Consumer<OptionalCollection<Object>>> consumerMap;
        long count;

        public ExGenerator(int max, Map<Predicate<Class<?>>, Consumer<OptionalCollection<Object>>> consumerMap) {
            this.max = max;
            this.consumerMap = consumerMap;
            map = new HashMap<>();
        }


        public void add(Object object) {
            Class<?> clazz = object.getClass();
            List<Object> list = map.computeIfAbsent(clazz, k -> new ArrayList<>(max));
            list.add(object);
            if (list.size() == max) {
                consumerMap.entrySet().stream()
                        .filter(entry -> entry.getKey().test(clazz))
                        .forEach(handler -> {
                            handler.getValue().accept(OptionalCollection.of(list));
                        });
                count += max;
                list.clear();
            }
        }

        private void end() {
            map.forEach((key, value) -> {
                consumerMap.entrySet().stream()
                        .filter(predicateConsumerEntry -> predicateConsumerEntry.getKey().test(key))
                        .forEach(handler -> {
                            handler.getValue().accept(OptionalCollection.of(value));
                        });
                count += value.size();
            });
        }
    }
}
```

使用案例：

```java
@Test
public void execute2() {
  long l = BatchUtils.execute(3, generator -> {
    for (int i = 0; i < 100; i++) {
      if (i % 3 == 0) {
        generator.add(new Object());
      } else if (i % 3 == 1) {
        generator.add(i);
      } else {
        generator.add(i);
      }
    }
  }, BatchUtils.Factory
        .builder()
        .add(clazz -> clazz.equals(Object.class), optionalCollection -> optionalCollection.isNotEmpty(System.out::println))
        .add(clazz -> clazz.equals(String.class), optionalCollection -> optionalCollection.isNotEmpty(System.out::println))
        .add(clazz -> clazz.equals(Integer.class), optionalCollection -> optionalCollection.isNotEmpty(System.out::println))
        .add(clazz -> true, optionalCollection -> optionalCollection.isNotEmpty(item -> System.out.println("全量打印" + item)))
        .build());
  System.out.println(l);
}
```

同样的方法生成数据，通过不同的 Predicate 区分不同的处理方式。

# 尾声

完整代码可参考 [BatchUtils](https://github.com/qiqiangvae/forest/blob/main/forest-common/src/main/java/org/nature/forest/common/utils/BatchUtils.java) 。

更多好用的 Java 封装和工具类可以看看我的开源项目 [forest](https://github.com/qiqiangvae/forest)。
