const path = require('path');

module.exports = {
  entry: '/Documents/class hw/hw-19-PWA-moody/src/app.js',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist') 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader' 
        }
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      }
    ]
  }
};

const WebpackPwaManifest = require('webpack-pwa-manifest');

// ...

plugins: [
  // Other plugins
  new WebpackPwaManifest({
    name: 'Text Editor App',
    short_name: 'Text Editor',
    description: 'A text editor app for creating notes and code snippets.',
    background_color: '#ffffff',
    theme_color: '#2196F3',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: path.resolve('src/assets/icon.png'), // Path to your app's icon
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join('assets', 'icons'),
      },
    ],
  }),
]
