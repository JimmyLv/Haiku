const webpack = require('webpack')

const vendor = [
  // react
  'react',
  'react-dom',
  'react-router',
  'redux',
  'react-redux',
  'react-router-redux',
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

module.exports = {
  output: {
    path: 'public',
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
    'vendor': vendor,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'vendor-manifest.json',
      name: '[name]',
      context: __dirname,
    }),
  ],
}
