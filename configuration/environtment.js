const path = require('path');

module.exports =  {
    paths: {
        public: path.resolve(__dirname,'../public/'),
        assets: {
            source:path.resolve(__dirname,'../public/assets/'),
            output: path.resolve(__dirname,'../public/assets/dist/')
        },
        js: {
            source: path.resolve(__dirname,'../public/assets/js/'),
            output: path.resolve(__dirname,'../public/dist/')
        },
        source: path.resolve(__dirname,'../src/pages'),
        output: path.resolve(__dirname,'../dist/'),
    },
    server: {
        host: 'localhost',
        port: process.env.PORT || 8080
    },
    limits: {
        images: 8192,
        fonts: 8192
    }
}