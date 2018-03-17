<template>
   <div>
<!--        <h1>{{text}}</h1>
<p>{{get_msg}}</p>
<p></p>
<button @click='getmsg'>get请求点我</button>
<button @click="postmsg">post请求点我</button> -->
      <div class="header">
          <Oheader></Oheader>
      </div>
      <div class="body">
          <div class="nav">
              <Onav></Onav>
          </div>
          <div class="content">
              <router-view></router-view>
          </div>
      </div>
   </div>
</template>

<script>

import './homepage.css'
import Onav from './nav/nav.vue'
import Oheader from './header/header.vue'

   export default{
       data(){
           return{
               text:'这是首页组件',
           }
       },
       methods:{
           getmsg(){
               this.$store.dispatch('getmsg_get',{path:'product/',msg:{houseOwner:'Kemo'}});
           },
           postmsg(){
               this.$store.dispatch('getmsg_post',{path:'product',msg:{houseOwner:'Kemo'}});
           }
       },
       computed:{
           get_msg:{
               get:function(){
                   console.log(11555);
                   return this.$store.getters.getmsg_get;
               }
           }
       },
       components:{
          Onav,
          Oheader
       }
   }
</script>