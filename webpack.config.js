/**
 * webpack.config.js
 * ===============
 */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader', // config file can be found at .babelrc.js
        options: {
          presets: ["@babel/preset-env"]
        },
        test: /\.js$/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        uglifyOptions: {
          mangle: false,
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  entry: {
    'detect-keyboard-user': './detect-keyboard-user.js',
    'detect-keyboard-user.min': './detect-keyboard-user.js',
  },
  output: {
    library: 'DetectKeyboardUser',
    libraryTarget: 'umd',
    libraryExport: "default",
    filename: "[name].js",
  },
};