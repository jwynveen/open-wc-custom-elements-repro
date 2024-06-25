const config = {
  stories: ['../stories/*.stories.{js,md,mdx}'],
  framework: {
    name: '@web/storybook-framework-web-components',
  },
  docs: {
    autodocs: true,
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
};

export default config;