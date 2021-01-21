module.exports = {
    apps: [
        {
            name: 'bookmap',
            script: 'npm',
            args: 'start',
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
