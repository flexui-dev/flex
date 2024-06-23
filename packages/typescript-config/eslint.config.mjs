// @ts-check
import base from '@flex/eslint-config/base.config.mjs'

export default [
	...await base,
	{
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.lint.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
