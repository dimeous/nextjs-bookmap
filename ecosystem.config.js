module.exports = {
    apps: [
        {
            name: 'bookmap',
            script: 'npm',
            args: 'start',
            cwd: '/home/gitlab-runner/builds/7G-8ML1s/0/web-dev/landings/',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 3000
            }
        },

// optionally a second project
    ],
    deploy: {
        production: {
            'post-deploy': 'npm install --production'
                + ' && pm2 startOrRestart ecosystem.config.js --env=production'
                + ' && pm2 save'
        }
    }

};
