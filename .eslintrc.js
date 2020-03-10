module.exports = {
	"env": {
		"es6": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-redux/recommended",
		"plugin:@typescript-eslint/eslint-recommended"
	],
	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect"
		}
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module",
		"project": "./tsconfig.json"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"react-redux"
	],
	"rules": {
		'react/jsx-uses-react': ['error'],
		'react/jsx-uses-vars': ['error'],
		'react/prop-types': ['off'],

		"no-unused-vars": ["off"],
		"@typescript-eslint/no-unused-vars": ["error"],

		"react-redux/prefer-separate-component-file": ["off"]
	}
};