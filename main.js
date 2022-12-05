//uniapp采用vue语法:引入vue[vue2]
import Vue from 'vue';
//引入根组件:引入应用
import App from './App'
//控制台提示设置:全局配置
Vue.config.productionTip = false;
//利用uniapp框架开发应用:微信小程序、支付宝、微信、qq、钉钉、百度地图
App.mpType = 'app'

//注册安装仓库
import store from './store/index.js'
//初始化VM
const app = new Vue({
	...App,
	//导致全局的VC身上拥有$store属性
	store
});
//将VM挂载到挂载点当中
app.$mount()
