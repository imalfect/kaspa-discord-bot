import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin'; // Import the plugin
import tsParser from '@typescript-eslint/parser'; // Import the TypeScript parser
import prettier from 'eslint-config-prettier'; // Import Prettier config
import globals from 'globals';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			ecmaVersion: 2023,
			globals: globals.node,
			parser: tsParser // Add the TypeScript parser
		},
		plugins: {
			'@typescript-eslint': tseslint
		},
		rules: {
			...pluginJs.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...prettier.rules // Add Prettier rules directly
		}
	}
];
