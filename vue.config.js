
/**
 * 环境判断：process.env.NODE_ENV === 'production'
 */
module.exports = {
  publicPath: '/', // 最好绝对路径
  outputDir: 'dist',
  assetsDir: '',// 相对于 outputDir 的目录
}