const templatesDir = '_plop-templates';

const uiComponentsPath = 'src/components/ui';

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('ui-component', {
    description: 'Create a ui component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the component name:',
      },
      {
        type: 'confirm',
        name: 'hasChildren',
        message: 'Should a component have children?',
      },
    ],
    actions: (data) => {
      return [
        {
          type: 'add',
          path: `${uiComponentsPath}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
          templateFile: `${templatesDir}/create-component/base.hbs`,
          skip: () => {
            return data.hasChildren ? 'The component must have children' : null;
          },
        },
        {
          type: 'add',
          path: `${uiComponentsPath}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
          templateFile: `${templatesDir}/create-component/with-children.hbs`,
          skip: () => {
            return !data.hasChildren
              ? 'The component must not have children'
              : null;
          },
        },
        {
          type: 'add',
          path: `${uiComponentsPath}/{{kebabCase name}}/{{kebabCase name}}.module.scss`,
          templateFile: `${templatesDir}/create-component/style-scss.hbs`,
        },
        {
          path: `${uiComponentsPath}/index.ts`,
          pattern: /(\/\/ Export Components)/g,
          templateFile: `${templatesDir}/create-component/index-file.hbs`,
          type: 'modify',
        },
      ];
    },
  });
}
