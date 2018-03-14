import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login'
import Register from '../components/register/register'
import HomePage from '../components/homePage/homePage'
import Detail from '../components/detail/detail'
import ListPage from '../components/listPage/listPage'
import shopCar from '../components/shopCar/shopCar.vue'
import manage from "../components/shopCar/manage/manage.vue"
import order from "../components/order/order.vue"
import selectAdd from "../components/order/selectAdd/selectAdd.vue"
import addAdd from "../components/order/addAdd/addAdd.vue"
import payment from "../components/order/payment/payment.vue"

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
               path:'/HomePage',
               name:'HomePage',
               component:HomePage,
           },
           {
               path:'/Detail',
               name:'Detail',
               component:Detail,
           },
           {
               path:'/ListPage',
               name:'ListPage',
               component:ListPage,
           },
           {
               path: '/shopCar',
               name: 'shopCar',
               component: shopCar,
           },
           {
               path: '/manage',
               name: 'manage',
               component: manage,
           },
          
           {
               path:'/order',
               name:'order',
               component:order
           },
           {
               path:'/selectAdd',
               name:'selectAdd',
               component:selectAdd
           },
           {
               path:'/addAdd',
               name:'addAdd',
               component:addAdd
           },
           {
               path:'/payment',
               name:'payment',
               component:payment
           }
           
       ]
})


export default router;