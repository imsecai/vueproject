<template>
   <div>
<!--        <h1>{{text}}</h1>
<p>{{get_msg}}</p>
<p></p>
<button @click='getmsg'>get请求点我</button>
<button @click="postmsg">post请求点我</button> -->
       <div id="box">
           <h3>欢迎来到后台管理系统</h3>
           <p>
              <label for="username">用户名：</label>
              <input type="text" id="username" >
          </p>
           <p>
              <label for="password">密码：</label>
              <input type="password" id="password" >
          </p>
           <p>
              <input type="button" value="Login" id="btn_login" @click="login" />
          </p>
       </div>

   </div>
</template>


<!-- <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script> -->

<script>
import hClient from '../../httpClient/httpClient.js'
import './login.css'
// import http from 'axios'


   export default{
       data(){
           return{
               text:'这是登录组件',
           }
       },
       methods:{
           login(){
                console.log(666);
                hClient.post('http://localhost:1200/login',{username:$('#username').val(),pwd:$('#password').val()}).then((res)=>{
                    if(res.data.status){
                      let uname = $('#username').val()
                      window.sessionStorage.setItem("name",uname);
                      this.$router.push({path:'/HomePage'})
                    }else{
                      window.alert(res.data.message || res.data.error);
                    }
                })
           }
       },
       computed:{
           get_msg:{
               get:function(){
                   console.log(11555);
                   return this.$store.getters.getmsg_get;
               }
           }
       }
   }
</script>