import Vue from 'vue'
import Router from 'vue-router'
import indexpage from '@/pages/index'
import projectpage from '@/pages/projectpage/project'
import creatProject from '@/pages/projectpage/creatProject'
import projectDetail from '@/pages/projectpage/DetailPage'
import userprofile from '@/pages/userprofilepage'
import projectList from '@/components/projectList'
Vue.use(Router)

export default new Router({
/*mode: 'history',*/
  routes: [
     {
      path: '/',
      redirect:'/index',
      name: 'indexpage',
      component: indexpage
    },
    {
      path: '/index',
      name: 'indexpage',
      component: indexpage
    },
    {
      path: '/project/projectDetail',
      name: 'projectDetail',
      component: projectDetail, 
    },

    {
      path: '/project',
      name: 'projectpage',
      component: projectpage,
      children:[
      {
      path: '/',
      name: 'All',
      component: projectList
      },

      {
        path: '/project/kaifa',
        name: 'kaifa',
        component: projectList
      },
      {
      path: '/project/sheji',
      name: 'sheji',
      component: projectList
      },
      {
      path: '/project/yunying',
      name: 'yunying',
      component: projectList
      },
      {
      path: '/project/chanpin',
      name: 'chanpin',
      component: projectList
      },
      ]
    },
      {
      path: '/project/creatProject',
      name: 'creatProject',
      component: creatProject
      },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: userprofile,
      meta:{auth:true}  
    },

  ]
})
