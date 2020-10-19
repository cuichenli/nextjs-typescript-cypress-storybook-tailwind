module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css1$/,
        exclude: [/\.module\.css$/, /@storybook/],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1, sourceMap: false },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                sourceMap: false,
              },
            },
          },
        ],
      },
    ],
  },
}
