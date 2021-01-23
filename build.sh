#!/bin/bash
echo "Building and deploying app\n"
echo "npm install and build"
#npm install
npm install && NODE_ENV=production npm run build
#echo "npm build"
#npm run build
echo "stop app "
pm2 stop bookmap 2>/dev/null
echo "delete app "
pm2 delete bookmap 2>/dev/null
echo "start app next"
pm2 start npm --name "bookmap" -- start
pm2 save
#echo "starting app as daemon"
#pm2 start npm --name "bookmap" -- start
#pm2 start npm --name "next" -- run dev
#pm2 restart next
