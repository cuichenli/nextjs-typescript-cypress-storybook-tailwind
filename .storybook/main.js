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
          {
            test: /\.css/,
            use: [
              {
                loader: "postcss-loader",
                options: {
                  plugins: [require("tailwindcss"), require("autoprefixer")],
                  postcssOptions: {
                    ident: "postcss",
                    sourceMap: true,
                  },
                },
              },
            ],
          },
        ],
      },
    }
  },
}
