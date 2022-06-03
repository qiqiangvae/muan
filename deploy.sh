#!/usr/bin/env bash
pkg_name="build.tar"
dist_name="dist"
url="https://www.qiqiang.online"
# 服务器
server="tencent"
# 目标目录
targetDir="muan/"
yarn docs:build
# 压缩
cd docs/.vuepress
tar -cf $pkg_name $dist_name
echo "# build and package $pkg_name successfully!"
scp $pkg_name $server:$targetDir
echo "# upload $pkg_name to server successfully!"
# 删除远程文件并解压文件
ssh tencent "rm -rf muan/$dist_name"
ssh tencent "tar -xf muan/$pkg_name -C muan/"
echo "# deploy to server successfully! please visit $url."
# 删除本地文件
rm $pkg_name & rm -rf $dist_name
echo "# delete local files $pkg_name and $dist_name successfully!"