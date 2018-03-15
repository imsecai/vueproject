import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login'
import Register from '../components/register/register'
import HomePage from '../components/homePage/homePage'
import Detail from '../components/detail/detail'
import ListPage from '../components/listPage/listPage'
import User from '../components/user/user'
import Myorder from '../components/myorder/myorder'
import Myorder2 from '../components/myorder2/myorder2'

import category from '../components/listpage/category/category.vue'
import style from '../components/listpage/style/style.vue'
import space from '../components/listpage/space/space.vue'

import categoryList_LR from '../components/listpage/category/categoryList_LR.vue'
import categoryList_DR from '../components/listpage/category/categoryList_DR.vue'

import styleList_beds from '../components/listpage/style/styleList_beds.vue'
import styleList_storage from '../components/listpage/style/styleList_storage.vue'

import spaceList_beds from '../components/listpage/space/spaceList_beds.vue'
import spaceList_storage from '../components/listpage/space/spaceList_storage.vue'

import lives from '../components/lives/lives.vue'

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
               redirect:'/ListPage/category',
               children:[
                   {path:'category',component:category},
                   { path: 'style', component: style },
                   { path: 'space', component: space },

               ]
           },
           {
               path: '/categoryList_LR',
               name: 'categoryList_LR',
               component: categoryList_LR,
           },
           {
               path: '/categoryList_DR',
               name: 'categoryList_DR',
               component: categoryList_DR,
           },
           {
               path: '/spaceList_beds',
               name: 'spaceList_beds',
               component: spaceList_beds,
           },
           {
               path: '/spaceList_storage',
               name: 'spaceList_storage',
               component: spaceList_storage,
           },
           {
               path: '/styleList_beds',
               name: 'styleList_beds',
               component: styleList_beds,
           },
           {
               path: '/styleList_storage',
               name: 'styleList_storage',
               component: styleList_storage,
           },
           {
               path: '/lives',
               name: 'lives',
               component: lives
           },
           {
               path:'/User',
               name:'User',
               component:User
           },
           {
               path:'/Myorder',
               name:'Myorder',
               component:Myorder
           },
           {
               path:'/Myorder2',
               name:'Myorder2',
               component:Myorder2
           }
       ]
})


export default router;