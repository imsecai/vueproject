<template>
   <div>
       <h1>{{text}}</h1>
       <p>{{get_msg}}</p>
       <p></p>
       <button @click='getmsg'>get请求点我</button>
       <button @click="postmsg">post请求点我</button>

   </div>
</template>

<script>
   export default{
       data(){
           return{
               text:'这是详情组件',
           }
       },
       methods:{
          
       },
       computed:{
           
       }
   }
</script>