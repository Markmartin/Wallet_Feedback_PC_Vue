module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://wallet.iotchain.io',
                secure: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    baseUrl: process.env.NODE_ENV === 'production' ?
        '/feedback/' : '/'
}