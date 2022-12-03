#!/usr/bin/env sh
# bash命令只要安装Git并将Git安装目录下bin目录配置到系统环境变量Path中

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<itmanyong>.github.io
# git push -f git@github.com:<itmanyong>/<itmanyong>.github.io.git master

# 如果发布到 https://<itmanyong>.github.io/<web-resources>
# git push -f git@github.com:<itmanyong>/<web-resources>.git master:gh-pages

# 把上面的 <itmanyong> 换成你自己的 Github 用户名，<web-resources> 换成仓库名

git push git@github.com:itmanyong/web-resources.git master:gh-pages

cd -