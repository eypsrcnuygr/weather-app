<<<<<<< HEAD
const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });
const path = require('path');
const webpack = require('webpack');

=======
const path = require('path');
>>>>>>> 2c7143f913fbe78f81b05b6508ee8f16388e9dd1

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