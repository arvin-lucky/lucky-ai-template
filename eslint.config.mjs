import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		plugins: ['simple-import-sort'],
		extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'@next/next/no-img-element': 'off',
			'import/no-anonymous-default-export': 'off',
			'react-hooks/exhaustive-deps': 'off',
		},
	}),
];

export default eslintConfig;
