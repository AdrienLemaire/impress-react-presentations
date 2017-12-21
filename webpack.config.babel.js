import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config = {
  entry: [
    'babel-regenerator-runtime',
    path.resolve(__dirname, 'src/index.js'),
  ],
  module: { rules: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: [
        'es2015',
        'react',
      ],
    },
  }]},
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist/'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}


export default config;
