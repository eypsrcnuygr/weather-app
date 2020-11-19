const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });
const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',

        }, {
          loader: 'sass-loader',
        },
        ],
      },

    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
  devtool: 'source-map',
};