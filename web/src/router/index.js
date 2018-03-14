import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login'
import Register from '../components/register/register'
import HomePage from '../components/homePage/homePage'
import Detail from '../components/detail/detail'
import ListPage from '../components/listPage/listPage'

import category from '../components/listpage/category/category.vue'
import style from '../components/listpage/style/style.vue'
import space from '../components/listpage/space/space.vue'
import categoryList from '../components/listpage/category/categoryList.vue'
import styleList from '../components/listpage/style/styleList.vue'
import spaceList from '../components/listpage/space/spaceList.vue'
import lives from '../components/lives/lives.vue'
import lives_style from '../components/lives/lives_style.vue'

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
               path: '/categoryList',
               name: 'categoryList',
               component: categoryList,
           },
           {
               path: '/spaceList',
               name: 'spaceList',
               component: spaceList,
           },
           {
               path: '/styleList',
               name: 'styleList',
               component: styleList,
           },
           {
               path: '/lives',
               name: 'lives',
               component: lives,
               children:[
                   {path:'lives_style',name:'lives_style',component:lives_style}
               ]
           },

       ]
})


export default router;