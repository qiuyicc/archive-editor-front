const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/archive-editor':{
        changeOrigin: true,
        target:'http://192.210.197.111:8899',
      }
    }
  }
})
