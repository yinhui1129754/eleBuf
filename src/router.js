import Vue from 'vue'
import Router from 'vue-router'
import yhRoutes from "./router/yinhui/router"
import Home from '@/views/index/index.vue'
import login from '@/views/login.vue'
import table from '@/components/yinhui/table'
Vue.use(Router)
let indexArr = [...yhRoutes];
export default new Router({
  routes:[
    {
        path: '/index',
        name: 'home',
        component: Home,
        children:indexArr
      },
      {
        path:"/login",
        name:"login",
        component:login
      },{
        path:"/table",
        name:"table",
        component:table
      }
    ]
})
