module.exports = {
  "stories": [
    "../src/stories/**/*.stories.@(tsx|mdx)"
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
  ]
}

// import { configure } from "@storybook/react";

// configure(require.context("../src/stories", true, /\.stories\.*$/), module);
