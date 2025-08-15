import path from 'node:path';

const filenamesToRelativePaths = (filenames) => {
  return filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((path) => path.startsWith('src'));
};

const buildEslintCommand = (filenames) => {
  return `next lint --file ${filenamesToRelativePaths(filenames).join(' --file ')}`;
};

const buildPrettierCommand = (filenames) => {
  return `prettier --check ${filenamesToRelativePaths(filenames).join(' ')}`;
};

const buildStylelintCommand = (filenames) => {
  return `stylelint ${filenamesToRelativePaths(filenames).join(' ')}`;
};

/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
  '*.{css,scss}': [buildStylelintCommand],
};
