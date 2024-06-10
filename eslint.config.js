import antfu from '@antfu/eslint-config';

export default antfu(
  {
    stylistic: {
      semi: true,
    },
  },
  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    rules: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'curly': 'error',
    },
  },
);
