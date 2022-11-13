let proxyObj = {}

proxyObj['/'] = {
    ws: false,
    target: 'http://127.0.0.1:8081',
    changeOrigin: true,
    pahtReWrite: {
        '^/': '/'
    }



}



module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        proxy: proxyObj
    }
}