---
title: Sharding JDBC 如何动态刷新表配置
date: 2021-10-23 22:02:09
tags: sharding
categires: 后端
permalink: /pages/b8f179/
---

Sharding JDBC 在配置实际表的时候，会写一个 Groovy 表达式，但是实际使用中，分表会不定时增加，这时候就要重启修改表达式然后重启应用，这样显然是不合适的。

翻看源码后发现 Sharding 是将表信息存储到 TableRule 对象中，所以通过修改 TableRule 就可以实现动态修改 actualDataNodes 的效果。代码如下：

```java
@Slf4j
public class RefreshShardingTableActualDataNodesComponent  {
    private final ShardingDataSource dataSource;

    public RefreshShardingTableActualDataNodesComponent(ShardingDataSource dataSource){
        this.datasource = datasource;
    }

    /**
     * 刷新表
     */
    public synchronized void refresh(ShardingConfigModel configModel) {
        String logicTableName = configModel.getLogicTableName();
        String actualDataNodes = configModel.getActualDataNodes();
        log.info("刷新 sharding 配置，table:【{}】,actualDataNodes【{}】", logicTableName, actualDataNodes);
        try {
            ShardingRuntimeContext shardingRuntimeContext = dataSource.getRuntimeContext();
            ShardingRule shardingRule = shardingRuntimeContext.getRule();
            TableRule tableRule = shardingRule.getTableRule(logicTableName);
            ShardingRuleConfiguration shardingRuleRuleConfiguration = shardingRule.getRuleConfiguration();
            Optional<TableRuleConfiguration> tableRuleConfigurationOptional = shardingRuleRuleConfiguration.getTableRuleConfigs().stream().filter(config -> config.getLogicTable().equals(logicTableName)).findFirst();
            if (tableRuleConfigurationOptional.isPresent()) {
                TableRuleConfiguration tableRuleConfig = tableRuleConfigurationOptional.get();
                modifyField(actualDataNodes, tableRuleConfig, "actualDataNodes");
                TableRule newTableRule = new TableRule(tableRuleConfig, shardingRule.getShardingDataSourceNames(), getDefaultGenerateKeyColumn(shardingRuleRuleConfiguration));
                // 修改 actualDataNodes
                modifyField(newTableRule.getActualDataNodes(), tableRule, "actualDataNodes");
                // 修改 actualTables
                modifyField(getActualTables(newTableRule.getActualDataNodes()), tableRule, "actualTables");
                // 修改 dataNodeIndexMap
                List<String> dataNodes = new InlineExpressionParser(tableRuleConfig.getActualDataNodes()).splitAndEvaluate();
                Map<String, Integer> dataNodeIndexMap = new HashMap<>(dataNodes.size(), 1);
                modifyField(dataNodeIndexMap, tableRule, "dataNodeIndexMap");
                // 修改 datasourceToTablesMap
                modifyField(newTableRule.getDatasourceToTablesMap(), tableRule, "datasourceToTablesMap");
            } else {
                throw new RuntimeException("逻辑表" + logicTableName + "不存在");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        log.info("刷新 sharding 配置完成");
    }

    private void modifyField(Object value, Object object, String fieldName) throws NoSuchFieldException, IllegalAccessException {
        Field field = object.getClass().getDeclaredField(fieldName);
        boolean accessible = field.isAccessible();
        try {
            ReflectionUtils.makeAccessible(field);
            field.set(object, value);
        } finally {
            field.setAccessible(accessible);
        }
    }

    private String getDefaultGenerateKeyColumn(final ShardingRuleConfiguration shardingRuleConfig) {
        return Optional.ofNullable(shardingRuleConfig.getDefaultKeyGeneratorConfig()).map(KeyGeneratorConfiguration::getColumn).orElse(null);
    }

    private Set<String> getActualTables(List<DataNode> actualDataNodes) {
        return actualDataNodes.stream().map(DataNode::getTableName).collect(Collectors.toSet());
    }
}

@Data
public class ShardingConfigModel {
    /**
     * 逻辑表名
     */
    private String logicTableName;
    /**
     * guava 语法写的实际数据表表达式
     */
    private String actualDataNodes;
}
```
