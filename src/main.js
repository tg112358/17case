// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import userModules from './store/modules/user'
import userinfoModules from './store/modules/userinfo'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
/* eslint-disable no-new */
const store = new Vuex.Store({
	modules:{
		user:userModules,
		userinfo:userinfoModules
	}

})

 router.beforeEach((to,from,next) => {
  if(to.matched.some( m => m.meta.auth)){
  // 对路由进行验证
  if(sessionStorage.getItem('logined')) { // 已经登陆
  next()     // 正常跳转到你设置好的页面
  }else{
  // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
  //next({path:'/login',query:{ Rurl: to.fullPath} })
  store.state.user.isShowLogDialog = true
  }
  }else{
  next()
  } 
    }),
new Vue({
  el: '#app',
  router,
  store,
  components: { Root },
  template: '<Root/>'
})
