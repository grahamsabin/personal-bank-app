//THIS FUNCTION CONNECTS THE PROXY TO THE SERVER
    //errors in connecting via package json led me to replace with this file
    //the connection now works

    
    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:5010',
          changeOrigin: true,
        })
      );
    };