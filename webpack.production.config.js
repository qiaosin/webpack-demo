var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
module.exports = {
  entry: {
    app:path.resolve(__dirname, 'app/main.js'),
    //mobile: path.resolve(__dirname, 'app/mobile.js'),--其他入口文件
    vendors: ['react','react-dom']
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      //filename: 'bundle.js',
      filename: '[name].js' // 注意我们使用了变量
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        exclude: [node_modules_dir],
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
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({
        "process.env": { 
           NODE_ENV: JSON.stringify("production")
         }
        })
  ]
}