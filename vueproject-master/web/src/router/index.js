import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login'
import Register from '../components/register/register'
import HomePage from '../components/homePage/homePage'
import Detail from '../components/detail/detail'
import ListPage from '../components/listPage/listPage'
import Products from '../components/product/product.vue'

import Goods from '../components/goods/goods.vue'
import addProduct from '../components/product/addProduct.vue'
import UpdateProduct from '../components/product/UpdateProduct.vue'
import Users from '../components/user/user.vue'
import Buylist from '../components/buylist/buylist.vue'
import UpdateBuylist from '../components/buylist/Updata_buylist.vue'


Vue.use(VueRouter);


const router = new VueRouter({
       routes:[
          {
            path:'/',
            name:'Login',
            component:Login
          },
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
               children:[{
                  path:'/products',
                  component:Products,
               },{
                  path:'/goods',
                  component:Goods,
               },{
                  path:'/addProduct',
                  component:addProduct,
               },{
                  path:'/updateproduct',
                  component:UpdateProduct,
               },{
                  path:'/users',
                  component:Users,
               },{
                  path:'/buylist',
                  component:Buylist,
               },{
                  path:'/update_buylist',
                  component:UpdateBuylist,
               }]
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
           }
       ]
})


export default router;