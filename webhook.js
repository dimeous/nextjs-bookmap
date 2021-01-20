const secret = "your-secret-key";
const repo = "/home/landings/";

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

const BUILD_CMD = 'npm install && NODE_ENV=production npm run build';
const PM2_CMD = 'pm2 restart next-site';

http.createServer(function (req, res) {
    req.on('data', function(chunk) {
            exec('cd ' + repo + ` && npm install && ${BUILD_CMD} && ${PM2_CMD}`);
    res.end();
}).listen(3000);
