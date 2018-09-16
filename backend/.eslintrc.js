const path = require('path');

module.exports = {
    "env": {
        "amd": true,
        "node": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "settings": {
        "import/resolver": {
            node: { paths: [path.resolve('./src')] }
        },
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "no-console": "off",
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};