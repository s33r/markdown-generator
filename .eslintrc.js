

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        impliedStrict: true,
    },
    overrides: [
        {
            files: [
                '*.test.js',
                '*.spec.js'
            ],
            env: {
                jest: true,
            },
        },
        {
            files: ['documentation/inline-example.js'],
            rules: {
                'no-console': 'off',
            }
        }
    ],
    env: {
        node: true,
    },
    extends: 'eslint:recommended',
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always'],
    },
};