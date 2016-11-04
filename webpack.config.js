module.exports = {
  entry: {
    timeline: './timeline.js',
    follow: './follow.js'
  },
  output: {
    path: '/js',
    filename: '[name].bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
