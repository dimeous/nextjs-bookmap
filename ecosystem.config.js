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
};
