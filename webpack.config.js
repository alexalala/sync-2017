var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  module : {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-react', 'babel-preset-env'],
          plugins: [['babel-plugin-import', { libraryName: 'antd', style: 'css'}]]
        }
      }
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2|jpg|png)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }]
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  }
};
