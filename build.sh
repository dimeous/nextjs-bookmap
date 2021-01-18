#!/bin/bash
echo "Building and deploying app\n"
echo "npm install"
npm install && NODE_ENV=production npm run build
echo "delete app next"
pm2 delete next
echo "starting app as daemon"
pm2 start npm --name "next" -- start
#pm2 start npm --name "next" -- run dev
#pm2 restart next
