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
            }
        },
// optionally a second project
    ],
};
