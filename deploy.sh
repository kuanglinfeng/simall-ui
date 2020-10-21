rm -rf dist &&
yarn build &&
cd dist
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@gitee.com:kuanglinfeng/simall-ui-website.git &&
git push -f -u origin master &&
cd ..
echo https://kuanglinfeng.gitee.io/simall-ui-website/