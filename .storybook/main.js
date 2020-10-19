const custom = require("../webpack.config.js")

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          // Filter out the default css loader
          ...config.module.rules.filter((rule) => /\.css$/ !== rule.test),
          ...custom.module.rules,
        ],
      },
    }
  },
}
