# microfrontends-repository
项目隔离远程加载，自动引入

## 微前端解决的问题
每个模块都可以独立开发，独立部署！！！

## 微前端的实现
将一个庞大的应用划分成若干个独立的子应用，将子应用打包成一个个独立的模块，当路径切换时加载不同的子应用，这样每个子应用都是独立的
* iframe, webComponent
* single-spa实现路由劫持和应用加载
* qiankun 基于singleSpa 开箱即用（single-spa + sandbox + import-html-entry), 接入简单
* EMP基于module Federation, 接入成本低，解决第三方依赖包的问题

## SystemJs
>你用single-spa的话 一定会用到systemJS，systemJS是一个通用的模块加载器，它能在浏览器上动态的加载微应用，我们将应用打包成模块，在浏览器中通过SystemJS来加载模块






## 微前端类型
在single-spa中，有以下三种微前端类型：

* single-spa applications:为一组特定路由渲染组件的微前端。
* single-spa parcels: 不受路由控制，渲染组件的微前端。
* utility modules: 非渲染组件，用于暴露共享javascript逻辑的微前端。
## 入门
### 生命周期
bootstrap: app启动
mount: app挂载
unmount: app卸载
update： service更新，只有service才可用
**特别说明 以上4个生命周期必须有返回值，且返回必须是Promise的函数或者Promise函数的数组**



## ReactDOM.render(component, ele)







## 很重要
1. 我们有各个不同的子应用时，一些公共的依赖需要统一，例如react版本， 如果不统一，当多个应用同时加载时就会出现一些意想不到的问题



