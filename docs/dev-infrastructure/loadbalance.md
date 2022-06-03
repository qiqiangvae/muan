# 手写常用的负载均衡算法

## 随机

### 普通随机

随机负载是最简单的负载，通过在 **[0,ip个数]** 之间产生随机数获得 ip 地址。

```java
public class Random {
    public static final List<String> IP_LIST = new ArrayList<String>() {{
        add("127.0.0.1");
        add("127.0.0.2");
        add("127.0.0.3");
    }};

    public String getServer() {
        java.util.Random random = new java.util.Random();
        return IP_LIST.get(random.nextInt(IP_LIST.size()));
    }

    public static void main(String[] args) {
        Random random = new Random();
        for (int i = 0; i < 10; i++) {
            System.out.println(random.getServer());
        }
    }
}
```

运行结果如下：

```
127.0.0.2
127.0.0.2
127.0.0.2
127.0.0.1
127.0.0.3
127.0.0.2
127.0.0.3
127.0.0.3
127.0.0.3
127.0.0.2
```

### 权重随机

由于服务器配置高低不一定，可能`127.0.0.1`服务器性能最好，但是通过普通随机算法获取到的结果比例是不一定的，所以需要引入**权重**的概念，增大分发到性能较好的服务器上的几率。

算法分析如下：

如果总权重是 10，权重分配是`127.0.0.1 -> 1,127.0.0.2 -> 3,127.0.0.3 -> 6`，可以将它们的权重看成一个坐标轴，范围是[0,1,4,10)，那么就可以在 [0,10) 中获取一个随机值，然后看这个随机值落在坐标轴的哪个范围内，从而确定 ip 地址。

```java
public class WeightRandom {
    public static final int TOTAL_WEIGHT = 10;
    public static final Map<String, Integer> WEIGHT_IP = new LinkedHashMap<String, Integer>() {{
        put("127.0.0.1", 1);
        put("127.0.0.2", 3);
        put("127.0.0.3", 6);
    }};

    public String getServer() {
        java.util.Random random = new java.util.Random();
        int i = random.nextInt(TOTAL_WEIGHT);
        Iterator<Map.Entry<String, Integer>> iterator = WEIGHT_IP.entrySet().iterator();
        Map.Entry<String, Integer> entry = iterator.next();
        while (i >= entry.getValue()) {
            i -= entry.getValue();
            entry = iterator.next();
        }
        return entry.getKey();
    }

    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        WeightRandom weightRandom = new WeightRandom();
        for (int i = 0; i < 100000; i++) {
            String server = weightRandom.getServer();
            Integer count = map.getOrDefault(server, 0);
            map.put(server, count + 1);
        }
        System.out.println("随机结果量");
        map.forEach((k, v) -> System.out.printf("%s  %d\n", k, v));
    }
}
```

结果如下：

```
随机结果量
127.0.0.3  60174
127.0.0.2  29727
127.0.0.1  10099
```

获取十万次，结果大致是按权重分配的。

## 轮询

### 普通轮询

普通轮询思路很简单，将所有的 ip 依次遍历就行了。

```java
public class RoundRobin {
    // 当前需要返回的 ip
    private int position;
    public static final List<String> IP_LIST = new ArrayList<String>() {{
        add("127.0.0.1");
        add("127.0.0.2");
        add("127.0.0.3");
    }};

    public String getServer() {
        return IP_LIST.get(position++ % ServerIp.IP_LIST.size());
    }

    public static void main(String[] args) {
        RoundRobin roundRobin = new RoundRobin();
        for (int i = 0; i < 10; i++) {
            System.out.println(roundRobin.getServer());
        }
    }
}
```

结果如下：

```
127.0.0.1
127.0.0.2
127.0.0.3
127.0.0.1
127.0.0.2
127.0.0.3
127.0.0.1
127.0.0.2
127.0.0.3
127.0.0.1
```

### 加权轮询

加权轮询跟加权随机差不多，只不过是将随机值换成了轮询自增值。

```java
public class WeightRoundRobin {
    public static final int WEIGHT = 10;
    public static final Map<String, Integer> WEIGHT_IP = new LinkedHashMap<String, Integer>() {{
        put("127.0.0.1", 1);
        put("127.0.0.2", 3);
        put("127.0.0.3", 6);
    }};
    private int position;

    public String getServer() {
        int i = position++ % WEIGHT;
        Iterator<Map.Entry<String, Integer>> iterator = WEIGHT_IP.entrySet().iterator();
        Map.Entry<String, Integer> entry = iterator.next();
        while (i >= entry.getValue()) {
            i -= entry.getValue();
            entry = iterator.next();
        }
        return entry.getKey();
    }

    public static void main(String[] args) {
        WeightRoundRobin roundRobin = new WeightRoundRobin();
        for (int i = 0; i < 15; i++) {
            System.out.println(roundRobin.getServer());
        }
    }
}
```

结果如下：

```
127.0.0.3
127.0.0.3
127.0.0.3
127.0.0.3
127.0.0.3
127.0.0.3
127.0.0.1
127.0.0.2
127.0.0.2
127.0.0.2
127.0.0.3
```

### 平滑加权轮询

加权轮询存在一个分布不均匀的问题，短时间大量请求都落在同一台服务器上去了，所以平滑加权轮询可以在加权轮询的基础上，实现请求平滑过渡。

原理如下：

定义一个动态的权重**currentWeight**作为中间参数来协助选取 ip 地址。

如果总权重是 10，权重分配是`127.0.0.1 -> 1,127.0.0.2 -> 3,127.0.0.3 -> 6`,初始动态权重是[0,0,0],分配权重是[1,3,6]公式如下：

- 本次动态权重 = 上次结束时动态权重+ip 地址分配的权重

- 最大的动态权重 = Max(本次动态权重)

- 结果 = 最大的动态权重对应的 ip 地址

- 结束时的动态权重 = 本次动态权重 - 总共的权重（只有最大的动态权重才有这个操作）

| 本次动态权重  | 最大的动态权重 | 结果        | 结束时的动态权重 |
| ------- | ------- | --------- | -------- |
| 1,3,6   | 6       | 127.0.0.3 | 1,3,-4   |
| 2,6,2   | 6       | 127.0.0.2 | 2,-4,2   |
| 3,-1,8  | 8       | 127.0.0.3 | 3,-1,-2  |
| 4,2,4   | 4       | 127.0.0.1 | -6,2,4   |
| -5,5,10 | 10      | 127.0.0.3 | -5,5,0   |
| -4,8,6  | 8       | 127.0.0.2 | -4,-2,6  |
| -3,1,12 | 12      | 127.0.0.3 | -3,1,2   |
| -2,4,8  | 8       | 127.0.0.3 | -2,4,-2  |
| -1,7,4  | 7       | 127.0.0.2 | -1,-3,4  |
| 0,0,10  | 10      | 127.0.0.3 | 0,0,0    |

十次之后动态权重又回到了初始状态，而且结果是按权重分散的。代码如下：

```java
public class SmoothingWeightRoundRobin {

    public static final int WEIGHT = 10;
    public static final Map<String, Integer> WEIGHT_IP = new LinkedHashMap<String, Integer>() {{
        put("127.0.0.1", 1);
        put("127.0.0.2", 3);
        put("127.0.0.3", 6);
    }};

    private List<Weight> weightList;

    public SmoothingWeightRoundRobin() {
        weightList = new ArrayList<>(WEIGHT_IP.size());
        Weight weight;
        for (Map.Entry<String, Integer> entry : WEIGHT_IP.entrySet()) {
            weight = new Weight(entry.getValue(), 0, entry.getKey());
            weightList.add(weight);
        }
    }

    public String getServer() {
        // 当前权重最大的ip
        Weight maxWeight = weightList.get(0);
        // 处理 currentWeight，currentWeight = currentWeight+weight
        for (Weight weight : weightList) {
            weight.currentWeight += weight.weight;
            if (maxWeight.currentWeight < weight.currentWeight) {
                maxWeight = weight;
            }
        }
        // 将返回的ip的currentWeight - 总权重
        maxWeight.currentWeight -= WEIGHT;
        return maxWeight.ipAddress;
    }

    static class Weight {
        int weight;
        int currentWeight;
        String ipAddress;

        public Weight(int weight, int currentWeight, String ipAddress) {
            this.weight = weight;
            this.currentWeight = currentWeight;
            this.ipAddress = ipAddress;
        }
    }

    public static void main(String[] args) {
        SmoothingWeightRoundRobin roundRobin = new SmoothingWeightRoundRobin();
        for (int i = 0; i < 20; i++) {
            System.out.println(roundRobin.getServer());
        }
    }
}
```

结果如上表一样。

## 一致性哈希

每当客户端请求服务器的时候，会带有一个参数或者利用客户端的ip地址，经过一致性哈希算法将这个 ip 地址转换成一个 hashCode。而服务器的服务地址也可以通过这个算法转换成一个 hashCode，通过比较这两个 hashCode 的关系，可以实现服务器与客户端一对多的匹配。

为了使对应关系更加合理，可以将一个服务器地址分成很多个虚拟地址（其实是同一个实际地址），然后均匀的分散到一个哈希环中（就是一个圆圈）。当计算出客户端ip 的 hashCode 之后，就可以根据这个 hashCode 所在圆圈的范围确定到实际的服务器地址。

```java
public class ConsistentHash {
    // 保存所有的虚拟服务器地址的 hashCode
    private TreeMap<Long, String> ipMap;
    private static final int VIRTUAL_NODE_NUMBER = 100;

    public ConsistentHash() {
        // 初始化虚拟地址
        ipMap = new TreeMap<>();
        for (String ip : ServerIp.IP_LIST) {
            for (int i = 0; i < VIRTUAL_NODE_NUMBER; i++) {
                ipMap.put(hash(ip + "V" + i), ip);
            }
        }
    }

    public String getServer(String clientIp) {
        // 计算客户端 ip 的 hashCode
        long hash = hash(clientIp);
        // 默认取第一个虚拟节点
        Long ipKey = ipMap.firstKey();
        // 由于 TreeMap 是根据 key 排序的，所以可以获取到大于 client hashCode 的集合
        SortedMap<Long, String> tailMap = ipMap.tailMap(hash);
        // 如果这个集合有元素，则取这个集合里的第一个元素
        if (!tailMap.isEmpty()) {
            ipKey = tailMap.firstKey();
        }
        return ipMap.get(ipKey);
    }

    public static void main(String[] args) {
        ConsistentHash consistentHash = new ConsistentHash();
        for (int i = 0; i < 5; i++) {
            System.out.println(consistentHash.getServer("www.111.com"));
        }
        for (int i = 0; i < 5; i++) {
            System.out.println(consistentHash.getServer("www.222.com"));
        }
    }

    public long hash(String value) {
        MessageDigest md5;
        try {
            md5 = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("MD5 not supported", e);
        }
        md5.reset();
        byte[] keyBytes;
        keyBytes = value.getBytes(StandardCharsets.UTF_8);
        md5.update(keyBytes);
        byte[] digest = md5.digest();
        long hashCode = ((long) (digest[3] & 0xFF) << 24)
                | ((long) (digest[2] & 0xFF) << 16)
                | ((long) (digest[1] & 0xFF) << 8)
                | (digest[0] & 0xFF);

        return hashCode & 0xffffffffL;
    }
}
```

## 最小活跃数

从字面上理解就是选择当前连接客户端最少的服务器。

客户端每次请求时都回去比较当前所有服务器的连接数，选择连接数最少的一个地址，然后将该地址的连接数+1，如果断开连接则-1。
