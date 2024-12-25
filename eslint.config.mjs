// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from "eslint-config-prettier"


// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.recommended,
// )

// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.strict,
//   tseslint.configs.stylistic,
// )

// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.strict,
//   tseslint.configs.stylistic,
//   {
//     rules: {
//       "@typescript-eslint/no-inferrable-types": "off",
//       "@typescript-eslint/consistent-type-definitions": "off",
//       "@typescript-eslint/no-unused-vars": "off",
//       "prefer-const": "off",
//     },
//   },
// )

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        // "args": "all",
        // "argsIgnorePattern": "^_",
        // "caughtErrors": "all",
        // "caughtErrorsIgnorePattern": "^_",
        // "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        // "ignoreRestSiblings": true,
      }],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  eslintConfigPrettier,
)

// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.recommended,
//   // tseslint.configs.recommendedTypeChecked,
//   // {
//   //   languageOptions: {
//   //     parserOptions: {
//   //       projectService: true,
//   //       tsconfigRootDir: import.meta.dirname,
//   //     },
//   //   },
//   // },
//   {
//     rules: {
//       // "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
//       // "@typescript-eslint/prefer-optional-chain": [
//       //   "error",
//       //   {
//       //     "allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing": true,
//       //   }
//       // ],
//       "@typescript-eslint/no-unused-vars": ["error", {
//         "args": "all",
//         "argsIgnorePattern": "^_",
//         "caughtErrors": "all",
//         "caughtErrorsIgnorePattern": "^_",
//         "destructuredArrayIgnorePattern": "^_",
//         "varsIgnorePattern": "^_",
//         "ignoreRestSiblings": true,
//       }],
//       "@typescript-eslint/consistent-type-definitions": ["error", "type"],
//     }
//   },
// )

// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.strict,
//   tseslint.configs.stylistic,
//   {
//     rules: {
//       "@typescript-eslint/no-unused-vars": ["error", {
//         "args": "all",
//         "argsIgnorePattern": "^_",
//         "caughtErrors": "all",
//         "caughtErrorsIgnorePattern": "^_",
//         "destructuredArrayIgnorePattern": "^_",
//         "varsIgnorePattern": "^_",
//         "ignoreRestSiblings": true,
//       }],
//       "@typescript-eslint/consistent-type-definitions": ["error", "type"],
//     }
//   },
// )
