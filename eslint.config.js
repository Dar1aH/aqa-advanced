import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'no-console': 'warn',
			'no-cond-assign': 'warn',
			'no-setter-return': 'warn',
		},
		languageOptions: {
			globals: {
				console: 'readonly', // Explicitly allow console
			},
		},
	},
];
