import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		files: ['test1.js', 'test2.js', 'test3.js'],
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'no-console': 'error',
		},
	},
];
