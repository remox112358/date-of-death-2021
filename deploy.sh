#!/usr/bin/env sh

set -e

yarn run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:remox112358/date-of-death-2021.git master:gh-pages

cd -