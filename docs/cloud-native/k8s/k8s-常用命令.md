---
title: k8s 常用命令
date: 2021-12-13 10:08:33
tags: k8s
categories: 云原生
summary: 记录自己操作 K8s 时使用到的一些命令。命令不多，用到一个记录一个，方便以后忘记了可以很方便地找到。
---

# 基础命令

1. 查看 k8s 帮助命令。`kubectl -h`

# namespace

1. 查看命名空间。`kubectl get ns` 
2. 获取 dev namespace 下所有的资源。 `kubectl get all -o wide -n <namespace>`

# pod 命令

1. 获取 dev namespack 下所有的pod。`kubeclt get pod -o wide -n <namespace>`

2. 删除 pod，删处理会自动重新创建，重启应用的时候会用到。`kubectl delete pod <podname> -n <namespace>`

3. 查看 pod 的 yaml 文件。`kubectl describe pod <podname> -n <namespace>`

# deployment

1. 水平扩展/收缩。`kubectl scale deployment ${name} --replicas=2`

2. 
