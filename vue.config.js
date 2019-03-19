/*
 * development：运行环境
 * production:生产环境
 * */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
const _evn=process.env.NODE_ENV === 'production';
let mod={
  	devServer: {
        port: 8070, // 端口号
        host: '0.0.0.0',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
				proxy:"https://traefik.gugud.com",
		//proxy:"https://traefik.gugud.com/"
		},
		/* chainWebpack: config => {
				console.log(config);
			  config.module.rule('svg-sprite-loader').include.add(resolve('/src/components/yinhui/svg')) // 要处理的模块
			config.module.rule('url-loader').exclude.add(resolve('/src/components/yinhui/svg')) // 要处理的模块
		},*/
		chainWebpack: config => {
			config.module.rules.delete('svg') //重点:删除默认配置中处理svg,
			//const svgRule = config.module.rule('svg')
			//svgRule.uses.clear()
			config.module
				.rule('svg-sprite-loader')
				.test(/\.svg$/)
				.include
				.add(resolve('src/components/yinhui/svg')) // 处理svg目录
				.end()
				.use('svg-sprite-loader')
				.loader('svg-sprite-loader')
				.options({
					symbolId: 'icon-[name]'
				})
		},
		/*
		configureWebpack:{
				module:{
					rules:[
						{
							test: /\.svg$/,
							loader: 'svg-sprite-loader',
							include: [resolve('src/components/yinhui/svg')],
							options: {
								symbolId: 'icon-[name]'
							}
						},
						{
							test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
							loader: 'url-loader',
							exclude: [resolve('src/components/yinhui/svg')],
							options: {
								limit: 10000
							}
						},
					]
				}
		}*/
}
//
if(_evn){
	/*
	 * baseUrl:资源地址
	 * outputDir：输出文件
	 * */
	mod.baseUrl='./';
	mod.outputDir='./dist';
}


module.exports = mod;