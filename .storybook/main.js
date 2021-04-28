module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ]
};
