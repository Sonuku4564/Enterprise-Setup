// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config([ 
    {
        ignores: ['dist/'] 
    },
    {
        files: ['**/*.ts'],
        extends: [
            eslint.configs.recommended, 
            ...tseslint.configs.recommendedTypeChecked
        ],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            'no-console': 'error',
            'no-useless-catch': 0,
        }
    }
]) 
