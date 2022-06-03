#!/usr/bin/env bash
# 删除文件
ssh tencent rm -rf  muan/dist
echo 'delete old dist success!'
# 复制文件
scp -r docs/.vuepress/dist tencent:muan/