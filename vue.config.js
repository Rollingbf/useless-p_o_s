module.exports = {
    lintOnSave:false,
    publicPath:'',
    outputDir:'dist',
    assetsDir:'static',
    /*configureWebpack: {
      devtool: 'source-map' //用于定位代码错误位置，开发时建议启用，与上列productionSouceMap联动
    }*/
    devServer:{
      host:"localhost",
      port:'8080',
      https:false,
      open:true,
      proxy:{
        "/api":{
          target:"http://127.0.0.1:3000",
          changeOrigin:true,
          pathRewrite:{
            "^/api":'',
          }
        }
      }
    }
  }