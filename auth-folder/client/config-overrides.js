module.exports = function override (config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "fs": false,
        "tls": false,
        "net": false,
        "http": false,
        //"http": require.resolve("stream-http"),
        "https": false,
        //"zlib": require.resolve("browserify-zlib") ,
        "zlib": false,
        //"path": require.resolve("path-browserify"),
        "path": false,
        //"stream": require.resolve("stream-browserify"),
        "stream": false,
        //"util": require.resolve("util/"),
        "util": false,
        //"crypto": require.resolve("crypto-browserify")
        "crypto": false,
        "querystring": false,
        "url": false
    }
    
    return config
}