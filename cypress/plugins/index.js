/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const webpackPreprocessor = require("@cypress/webpack-preprocessor")
const commonOptions = require("../../webpack.config")

commonOptions.resolve = {
  extensions: [".tsx", ".ts", ".js", ".css"],
}

commonOptions.module.rules.push({
  test: /tsx$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-react", "@babel/preset-typescript"],
      },
    },
  ],
})

commonOptions.module.rules.push({
  test: /css$/,
  use: [
    "style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
})
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: commonOptions,
    watchOptions: {},
  }

  on("file:preprocessor", webpackPreprocessor(options))
  return config
}
