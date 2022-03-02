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

https://github.com/single-spa-react/microfrontends-repository/blob/master/System.js






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
前三个是必须有的， 最后一个可有可无



## ReactDOM.render(component, ele)







## 很重要
1. 我们有各个不同的子应用时，一些公共的依赖需要统一，例如react版本， 如果不统一，当多个应用同时加载时就会出现一些意想不到的问题



## 调试工具
1. 安装浏览器插件 single-spa-inspector
2. 代码中增加
<!-- 
  import-map-overrides 可以覆盖导入映射
  当前项目中用于配合 single-spa Inspector 调试工具使用.
  可以手动覆盖项目中的 JavaScript 模块加载地址, 用于调试.
-->
<import-map-overrides-full show-when-local-storage="devtools" dev-libs></import-map-overrides-full>



## example
> 这里罗列了很多微前端的demo，各种不同的技术实现方式 包括single-spa,qiankun等，为什么名字叫single-spa-react，qiankun也在这里呢？？ qiankun也是基于single-sap的啊


## 更多参考资料
1. https://micro-frontends.org/
2. https://martinfowler.com/articles/micro-frontends.html



