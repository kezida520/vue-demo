'use strict'

const path = require('path')

module.exports = {
  dev: {
    // 路径
    assetsSubDirectory: 'static', // path：用来存放打包后文件的输出目录
    assetsPublicPath: '/', // publicPath：指定资源文件引用的目录
    proxyTable: {}, // 代理示例： proxy: [{context: ["/auth", "/api"],target: "http://localhost:3000",}]

    // 开发服务器变量设置
    host: 'localhost', 
    port: 9999, 
    autoOpenBrowser: true, // 自动打开浏览器devServer.open
    errorOverlay: true, // 浏览器错误提示 devServer.overlay
    notifyOnErrors: true, // 配合 friendly-errors-webpack-plugin
    poll: false, // 使用文件系统(file system)获取文件改动的通知devServer.watchOptions
    useEslint: true,
    showEslintErrorsInOverlay: false,
    
    devtool: 'eval-source-map', // 增强调试 可能的推荐值：eval, eval-source-map(推荐), cheap-eval-source-map, cheap-module-eval-source-map
    cacheBusting: true,
    cssSourceMap: false, // develop 下不生成 sourceMap
  },

  build: {

    index: path.resolve(__dirname, '../dist/index.html'),
    
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true, // production 下是生成 sourceMap
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  }
}
