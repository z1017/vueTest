const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭 语法 检查
  // 开启代理服务器 （方式一）
  /* devServer: {
    proxy: 'http://localhost:5000'
  }, */

  // 开启代理服务器 （方式二）
  devServer: {
    proxy: {
      // /atguigu：请求前缀
      '/atguigu': {
        
        target: 'http://localhost:5000',
        // pathRewrite:{'key':'value'} key:正则表达式
        // 将 atguigu 变为空字符串
        // ^/atguigu：匹配所有以 atguigu 开头的路径
        pathRewrite:{'^/atguigu':''},
        ws: true,  // 用于支持websocket
        changeOrigin: true  // 用于控制请求头中的 host 值
      },
      
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,  // 用于支持websocket
        changeOrigin: true  // 用于控制请求头中的 host 值
      },
    }
  }
})
