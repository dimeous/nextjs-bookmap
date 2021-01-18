#!/bin/bash
echo "Building and deploying app\n"
echo "npm install"
npm install && NODE_ENV=production npm run build
#echo "Build app"
#npx next build
echo "starting app as daemon"
pm2 start npm --name "my_app_name" -- start
#pm2 start npm --name "next" -- run dev
#pm2 restart next
