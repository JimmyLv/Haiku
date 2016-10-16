const path = require('path')

const webpack = require('webpack')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

const HappyPack = require('happypack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const PATHS = {
  app: path.join(__dirname, 'src/index.jsx'),
  build: path.join(__dirname, 'public'),
  publicPath: '//oesam4fld.qnssl.com/'
  // publicPath: './'
}

const SW_PRECACHE_CONFIG = {
  // plugin options
  filename: 'service-worker.js',
  // sw-precache options
  cacheId: require('./package.json').name,
  verbose: true,
  runtimeCaching: [
    {
      handler: 'cacheFirst',
      urlPattern: /^https:\/\/oesam4fld\.qnssl\.com/,
    },
    {
      handler: 'fastest',
      urlPattern: /^https:\/\/api\.lostg\.com/,
    },
    {
      handler: 'fastest',
      urlPattern: /^https:\/\/jimmylv\.gtihub\.io/,
    },
    {
      handler: 'fastest',
      urlPattern: /^https:\/\/raw\.githubusercontent\.com/,
      options: {
        cache: {
          maxEntries: 10,
          name: 'articles-cache'
        }
      }
    }
  ],
}

const config = {
  stats: { children: false },
  entry: {
    app: PATHS.app,
    vendor: [
      // react
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'redux-saga',
      
      // react components
      'react-player',
      'react-disqus',
      'react-disqus-thread',
      'react-redux-loading-bar',
      
      // 3rd dependencies
      'node-uuid',
      'classnames',
      'history',
      'js-yaml',
      'marked',
      'highlight.js',
      'whatwg-fetch',
      'fetch-jsonp',
      'es6-promise',
      'firebase',
    ]
  },
  output: {
    path: PATHS.build,
    publicPath: isProd ? PATHS.publicPath : '',
    filename: '[name].bundle.js'
  },
  
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'happypack/loader'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!less') },
      { test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, loader: 'url?limit=100000&name=./fonts/[name].[ext]' },
      { test: /\.(png|jpe?g|gif)$/, loader: 'file?limit=8192&name=./images/[name].[ext]' }
    ]
  },
  postcss() {
    return [precss, autoprefixer]
  },
  
  plugins: [
    new HappyPack({
      cache: true,
      loaders: ['babel?cacheDirectory=true'],
      threads: 5
    }),
    new CopyWebpackPlugin([{ from: 'cache-polyfill.js' }]),
    new CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
      favicon: 'favicon.ico', // favicon路径，通过webpack引入同时可以生成hash值
      filename: './index.html', // 生成的html存放路径，相对于path
      template: './src/index.template', // html模板路径
      inject: 'body', // js插入的位置，true/'head'/'body'/false
      hash: !!isProd, // 为静态资源生成hash值
      chunks: ['vendor', 'app'], // 需要引入的chunk，不配置就会引入所有页面的资源
    }),
    new SWPrecacheWebpackPlugin(SW_PRECACHE_CONFIG)
  ],
  
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules', 'assets/styles', 'assets/images']
  }
}

if (isProd) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  )
} else {
  config.entry.app = [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    PATHS.app
  ]
  config.devtool = 'source-map'
  config.devServer = {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: { children: false, colors: true, reasons: false },
    port: 8080
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config