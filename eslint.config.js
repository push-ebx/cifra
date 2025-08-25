import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
		plugins: ['simple-import-sort'],
		rules: {
			'react/jsx-sort-props': [
				'error',
				{
					reservedFirst: true,
					multiline: 'last',
				},
			],
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/display-name': [
				'warn',
				{
					ignoreTranspilerName: true,
					checkContextObjects: true,
				},
			],
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^react', '^next'],
						['^@?'],
						['^@/'],
						['^\\.\\./', '^\\./'],
						['\\.?(css|scss)$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	}),
];

export default eslintConfig;
