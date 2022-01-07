const path=require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}
const projectName=require('./package.json').name

module.exports={
    // 如果部署项目时不是根目录，请参照官网修改publicPath值
    // https://cli.vuejs.org/zh/config/#publicpath
    publicPath:'./', //根目录
    // outputDir:process.env.outputDir, //输出目录
    // lintOnSave:false, //是否开启 eslint 保存检测，有效值:true||false||'error'
    // productionSourceMap:false, // 是否为生产环境构建生成 source map
    css:{
        // sourceMap:false, //是否开启 CSS source map
        // modules:false, //为所有的 CSS 及其预处理文件开启 CSS Modules,不会影响 `*.vue` 文件
        loaderOptions:{ //预处理器的 loader 传递自定义选项
            sass:{
                // 全局引入index.scss文件
                // data:`@import "~styles/basic.scss";`
                prependData:`@import "@/styles/utils.scss";`
            }
        }
    },
    devServer: {
        open:true, // 编译完成是否自动打开浏览器预览
        // proxy: { // 配置多个接口代理
            // '/other': {
            //     _target: process.env.VUE_APP_AA,
            //     get target() {
            //         return this._target
            //     },
            //     set target(value) {
            //         this._target = value
            //     },
            //   changeOrigin: true,
            //   ws: true,
            //   pathRewrite: {
            //     '^/aa': ''
            //   }
            // },
            // '/mall': {
            //   target:process.env.VUE_APP_BB,
            //   changeOrigin: true,
            //   ws: true,
            //   pathRewrite: {
            //     '^/bb': ''
            //   }
            // },
            // '/design': {
            //   target:process.env.VUE_APP_CC,
            //   changeOrigin: true,
            //   ws: true,
            //   pathRewrite: {
            //     '^/cc': ''
            //   }
            // }
        // }
    },
    configureWebpack:{
        name:projectName,
        resolve:{
            alias:{
                '@':resolve('src'),
                'styles':resolve('src/assets/style'),
                'imgs':resolve('src/assets/img')
            }
        }
    }
}