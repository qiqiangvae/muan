---
title: Prometheus入门
createTime: 2022-06-02 18:53:20
permalink: /middleware/prometheus/b902c1/
---

# Prometheus入门

[官方网站](https://prometheus.io/)
[下载地址](https://prometheus.io/download/)

## 安装

```shell
docker run -d --name=prometheus -p 9090:9090 -v /your-path/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus:v2.43.0
```

## 架构

![SFoEi6](https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/SFoEi6.jpg)
拉模式，默认15s拉一次
支持服务发现

Server:

1. Retrieval 数据采集模块
2. Storage 数据存储模块 SSD
3. PromQL 查询模块

### 存储设计

![lTgLDq](https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/lTgLDq.jpg)
一块到内存，两小时归档
直接抓取、间接抓取（Exporter）
chunks、index、meta.json tombstones

### 基本概念

#### Metrics

##### Metrics 种类

| 名称          | 特点          | 使用场景         |
|-------------|-------------|--------------|
| Counter 计数器 | 始终增加        | http请求数、下单数  |
| Gauge 测量仪   | 当前值的快照，可增可减 | 磁盘使用率、在线用户数  |
| Histogram   |             | 通过分桶方式统计样本分布 |
| Summary 汇总  | 在客户端计算      | 根据样本统计出百分位   |

##### 格式

http_requests_total {code="200",path="/status"} 8

MetricName Label Value

## AlterManager 告警模块

转发到不同渠道
去重
分组
路由

## 安装

### docker 安装
```yaml
docker run --name prometheus \
    -v path/to/prometheus.yml:/opt/bitnami/prometheus/conf/prometheus.yml \
    bitnami/prometheus:latest
```

