import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login'
import Register from '../components/register/register'
import HomePage from '../components/homePage/homePage'
import Detail from '../components/detail/detail'
import ListPage from '../components/listPage/listPage'
import User from '../components/user/user'

Vue.use(VueRouter);


const router = new VueRouter({
       routes:[
           {
               path:'/Login',
               name:'Login',
               component:Login
           },
           {
               path:'/Register',
               name:'Register',
               component:Register
           },
           {
               path:'/',
               name:'HomePage',
               component:HomePage,
           },
           {
               path:'/Detail/:pID',
               name:'Detail',
               component:Detail,
           },
           {
               path:'/ListPage',
               name:'ListPage',
               component:ListPage,
           },
           {
               path:'/User',
               name:'User',
               component:User
           }
       ]
})


export default router;