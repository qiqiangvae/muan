#!/usr/bin/env bash
pkg_name='build.tar'
dist_name='dist'
url='https://www.qiqiang.online'
yarn docs:build
# 压缩
cd docs/.vuepress
tar -cvf $pkg_name $dist_name
echo "# package $pkg_name success!"
scp $pkg_name tencent:muan/
echo "# upload $pkg_name success!"
# 删除远程文件并解压文件
ssh tencent "rm -rf muan/$dist_name"
ssh tencent "tar -xf muan/$pkg_name -C muan/"
echo "# deploy success!please visit $url."
# 删除本地文件
rm $pkg_name & rm -rf $dist_name
echo "# delete local files $pkg_name and $dist_name success!"