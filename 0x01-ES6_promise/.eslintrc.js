module.exports = {
    "env": {
        "browser": true,
        "es6": true,
	"jest": true
    },
    "extends": "eslint:recommended",
    "plugin":"jest/all",
    "overrides": [
	{
		"files": "['*.js']",
		"excludedFiles": 'babel.config.js',
	}
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
	    'no-console': 'off',
	    'no-shadow': 'off',
	    'no-restricted-syntax': [
		    'error',
		    'LabeledStatement',
		    'WithStatement',
	    ],
    }
}
