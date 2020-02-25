module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
	},
	"settings":{
		"react": {
			"pragma":"React",
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
        "@typescript-eslint"
    ],
    "rules": {
        '@typescript-eslint/array-type': ['warn'],
		'@typescript-eslint/consistent-type-assertions': ['warn', {assertionStyle: 'as'}],
		'@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
		'@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit', overrides: {constructors: 'no-public'}}],
		'@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: "never" }],
		'@typescript-eslint/member-delimiter-style': ['error' ],
		'@typescript-eslint/no-extra-non-null-assertion': ['error'],
		'@typescript-eslint/no-misused-new': ['error'],
		'@typescript-eslint/no-parameter-properties': ['error'],
		'@typescript-eslint/no-useless-constructor': ['error'],
		'@typescript-eslint/prefer-includes': ['error'],
		'@typescript-eslint/prefer-nullish-coalescing': ['error'],
		'@typescript-eslint/prefer-optional-chain': ['error'],
		'@typescript-eslint/prefer-readonly': ['error'],
		'@typescript-eslint/prefer-string-starts-ends-with': ['error'],
		'@typescript-eslint/restrict-plus-operands': ['error', {checkCompoundAssignments: true}],
		'@typescript-eslint/triple-slash-reference': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/type-annotation-spacing': ['warn'],
		'@typescript-eslint/no-non-null-assertion': ['off'],

		// ESLint Style rules
		'block-spacing': ['warn', 'always'],
		'brace-style': ['off'],
		'@typescript-eslint/brace-style': ['warn', '1tbs'],
		'camelcase': ['warn'],
		'comma-dangle': ['warn', 'always-multiline'],
		'comma-spacing': ['warn'],
		'comma-style': ['warn'],
		'computed-property-spacing': ['warn'],
		'eol-last': ['warn'],
		'func-call-spacing': ['off'],
		'@typescript-eslint/func-call-spacing': ['warn'],
		'function-call-argument-newline': ['warn', 'consistent'],
		'function-paren-newline': ['warn', 'multiline'],
		'indent': ['off'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'implicit-arrow-linebreak': ['warn', 'beside'],
		'key-spacing': ['warn'],
		'keyword-spacing': ['warn'],
		'linebreak-style': ['warn', 'unix'],
		'lines-between-class-members': ['warn'],
		'max-len': ['warn', { code: 160 }],
		'new-cap': ['warn'],
		'new-parens': ['warn'],
		'no-array-constructor': ['off'],
		'@typescript-eslint/no-array-constructor': ['error'],
		'no-extra-parens': ['off'],
		'@typescript-eslint/no-extra-parens': ['warn'],
		'no-lonely-if': ['warn'],
		'no-mixed-operators': ['warn', {
			'groups': [
				['&', '|', '^', '~', '<<', '>>', '>>>'],
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof']
			],
			'allowSamePrecedence': true
		}],
		'no-mixed-spaces-and-tabs': ['warn'],
		'no-multi-assign': ['warn'],
		'no-multiple-empty-lines': ['warn', { max: 1 }],
		'no-nested-ternary': ['warn'],
		'no-new-object': ['error'],
		'no-trailing-spaces': ['warn'],
		'no-unneeded-ternary': ['warn'],
		'no-whitespace-before-property': ['warn'],
		'one-var': ['warn', 'never'],
		'operator-assignment': ['warn'],
		'operator-linebreak': ['warn', 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
		'padded-blocks': ['warn', 'never'],
		'prefer-object-spread': ['warn'],
		'quote-props': ['warn', 'as-needed'],
		'quotes': ['off'],
		'@typescript-eslint/quotes': ['warn', 'single'],
		'semi': ["off"],
		'@typescript-eslint/semi': ['warn', "always", { "omitLastInOneLineBlock": false }],
		'semi-spacing': ['warn'],
		'semi-style': ['warn'],
		'space-before-blocks': ['warn'],
		'space-before-function-paren': ['off'],
		'@typescript-eslint/space-before-function-paren': ['warn', 'never'],
		'space-in-parens': ['warn', 'never'],
		'space-infix-ops': ['warn'],
		'space-unary-ops': ['warn'],
		'switch-colon-spacing': ['warn'],
		'template-tag-spacing': ['warn'],
		'unicode-bom': ['warn'],
    }
};