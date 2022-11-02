module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue-scoped-css/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    '.eslintrc-auto-import.json',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': ['off'],
    'import/no-duplicates': ['off'],
    'import/prefer-default-export': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'vue/multi-word-component-names': ['off'],
  },
  globals: {
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/user-guide/README.md#compiler-macros-such-as-defineprops-and-defineemits-are-warned-by-no-undef-rule
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  settings: {
    'import/resolver': {
      typescript: { project: './' },
    },
  },
};
