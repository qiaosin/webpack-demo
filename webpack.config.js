var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        exclude: /node_modules/,
        loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
        query:{
           presets:['react','es2015']
        }
      },
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      // LESS
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by qiao')
  ]
}