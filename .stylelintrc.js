module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme', 'screen'],
      },
    ],
  },
};
