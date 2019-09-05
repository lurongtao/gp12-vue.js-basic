module.exports = {
  devServer: {
    proxy: {
      '/data': {
        target: 'http://localhost:9000',
        changeOrigin: true
      }
    }
  }
}