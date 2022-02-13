/**
 * systemjs的简单实现
 * 
 * 在使用中我们使用system.import(xx) webpack打包(设置output.libraryTarget: 'system', externals: ['react', 'react-dom'])后 :
 * System.register([], xx()) 第一个参数是前置依赖的包,第二个参数是我们system.import传入的参数, 在加载前置依赖完毕后，脚本执行第二个参数
 * 
 */



function SystemJs() {

}

/**
 * 这里先判断有没有register的依赖，如果有 先加载
 */
function load(declare) {

}
/**
 * 
 * @param {*} deps 前置依赖
 * @param {*} declare 
 */
SystemJs.prototype.register = function(deps, declare) {
  // 
}

SystemJs.prototype.import = function(declare) {
  load(declare)
}