import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: ['**/*'], // Ignoruje všechny soubory
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
        },
        rules: {}, // Prázdný objekt pravidel
    },
)
