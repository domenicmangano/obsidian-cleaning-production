import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest
            },
            parser: tseslint.parser,
            parserOptions: {
                project: false,  // Change this line
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            'semi': ['error', 'always'],
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            }],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
        },
    },
)