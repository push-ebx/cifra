const camelCaseRegexp = '^([a-z][a-zA-Z0-9]+)([A-Z][a-zA-Z0-9]+)?$';

/**
 * @type {import('stylelint').Config}
 */
export default {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'block-no-empty': null,
    'color-hex-length': 'long',
    'alpha-value-notation': 'number',
    'number-max-precision': 5,
    'media-feature-name-no-unknown': null,
    'selector-class-pattern': [
      camelCaseRegexp,
      { message: 'Expected class selector to be camelCase' },
    ],
    'scss/at-mixin-pattern': [
      camelCaseRegexp,
      { message: 'Expected mixin name to be camelCase' },
    ],
    'scss/at-function-pattern': [
      camelCaseRegexp,
      { message: 'Expected function name to be camelCase' },
    ],
    'custom-property-pattern': '.*',
    'scss/operator-no-newline-after': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'no-empty-source': null,
  },
};
