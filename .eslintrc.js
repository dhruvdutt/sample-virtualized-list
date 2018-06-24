module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': ['error', 'always'],
    'function-paren-newline': ['error', 'consistent'],
    'no-confusing-arrow': ['off'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'object-curly-newline': ['error', { consistent: true }],
    'import/no-extraneous-dependencies': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/label-has-for': [
      'error',
      { required: { every: ['id'] }, allowChildren: true }
    ],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'no-underscore-dangle': ['off'],
    'arrow-parens': ['off'],
    'no-param-reassign': ['off'],
    'no-case-declarations': ['off'],
    'no-nested-ternary': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/forbid-prop-types': ['off'],
    'react/no-multi-comp': ['off'],
  }
};
