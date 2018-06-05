'use strict';

module.exports = {
    "parser": "babel-eslint",

    "env": {
        "es6": true,
        "commonjs": true,
        "node": true,
        "mocha": true,
    },

    "globals": {
        "expect": true,
    },

    "extends": "eslint:recommended",

    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-var": "error",
        "comma-dangle": ["error", "always-multiline"],
    }
};
