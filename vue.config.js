const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'));
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    proxy: {
        '/api': {
            target: 'https://e-commerce.kaikeba.com',
            changeOrigin: true,
            pathRewrite: {
                '^/shop-api': '/shop-api'
            }
        }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({ remUnit: 75 }),
        ],
      },
    },
  },
};
