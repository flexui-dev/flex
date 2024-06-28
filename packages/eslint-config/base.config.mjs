// @ts-check
import af, { GLOB_JSX, GLOB_TSX } from '@antfu/eslint-config';

/* Using custom configuration of Antfu's code style */
export default await af(
	{
		typescript: {
			tsconfigPath: 'tsconfig.json',
		},
		stylistic: {
			indent: 'tab',
			quotes: 'single',
		},
		jsonc: true,
		ignores: [
			'**/dist',
			'**/__fixtures__',
		],
		overrides: {
			typescript: {
				'ts/consistent-type-definitions': ['error', 'type'],
				'ts/no-unsafe-assignment': 'warn',
				'ts/no-unsafe-member-access': 'warn',
			},
		},
	},
	{
		rules: {
			'style/no-tabs': ['error', { allowIndentationTabs: true }],
			'style/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'style/array-bracket-newline': ['error', { multiline: true }],
			'style/array-element-newline': ['error', 'consistent'],
			'style/semi': ['error', 'always'],
		},
	},
	{
		files: [GLOB_JSX, GLOB_TSX],
		rules: {
			'style/jsx-indent-props': ['error', 'tab'],
		},
	},
	{
		files: ['tsconfig.json', 'tsconfig.lint.json', 'package.json'],
		rules: {
			'jsonc/sort-keys': 'off',
		},
	},
);
