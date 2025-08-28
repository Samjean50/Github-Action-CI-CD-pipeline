module.exports = {
    extends: "eslint:recommended",
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        // Add custom rules here
        "no-console": "warn",
        "semi": ["error", "always"]
    }
    };