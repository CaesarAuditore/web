module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "/PravdaWeb": {
        target: "http://120.25.254.40:8080",
        ws: true,
        changeOrigin: true
        // pathRewrite: { "^/PravdaWeb": "" }
      }
    }
  }
};
