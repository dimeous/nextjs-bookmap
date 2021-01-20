module.exports = {
    apps: [
        {
            name: 'bookmap-site',
            cwd: ' /home/landing',
            script: 'npm',
            args: 'start',
            env: {
                NEXT_PUBLIC_BOOKMAP: 'NEXT_PUBLIC_BOOKMAP',
            },
        },
// optionally a second project
    ],
};
