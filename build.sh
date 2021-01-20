#!/bin/bash
echo "Building and deploying app\n"
git pull
echo "npm install"
npm install && NODE_ENV=production npm run build
echo "restart app next"
pm2 restart bookmap-site
#echo "starting app as daemon"
#pm2 start npm --name "bookmap-site" -- start
#pm2 start npm --name "next" -- run dev
#pm2 restart next
