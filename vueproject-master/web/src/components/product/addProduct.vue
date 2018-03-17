<template>
  <div>
<!--        <h1>{{text}}</h1>
<p>{{get_msg}}</p>
<p></p>
<button @click='getmsg'>get请求点我</button>
<button @click="postmsg">post请求点我</button> -->
    <div id="Obox">
        <h3>请输入需要添加的信息:</h3>
        <p>
          <label for="proname">产品名称：</label>
          <input type="text" id="Title" class="form-control col-sm-3">
        </p>
        <p>
          <label for="Depict">产品描述：</label>
          <input type="text" id="Depict" class="form-control col-sm-3">
        </p>
        <p>
          <label for="Price">产品价格：</label>
          <input type="text" id="Price" class="form-control col-sm-3">
        </p>
        <p>
          <label for="Style">产品风格：</label>
          <input type="text" id="Style" class="form-control col-sm-3">
        </p>
        <p>
          <label for="Material">产品材质：</label>
          <input type="text" id="Material" class="form-control col-sm-3">
        </p>
        <p>
          <label for="Category">产品分类：</label>
          <input type="text" id="Category" class="form-control col-sm-3">
        </p>
        <p>
          <label for="Img1">图片地址：</label>
          <input type="text" id="Img1" class="form-control col-sm-3">
        </p>
        <p>
          <input type="button" class="btn btn-success" value="Save" id="btn_save" @click="save" >
        </p>
    </div>

  </div>
</template>

<script>

import hClient from '../../httpClient/httpClient.js'

import './addProduct.css'

   export default{
       data(){
           return{
               text:'这是添加商品组件',
           }
       },
       methods:{
           getmsg(){
               this.$store.dispatch('getmsg_get',{path:'product/',msg:{houseOwner:'Kemo'}});
           },
           postmsg(){
               this.$store.dispatch('getmsg_post',{path:'product',msg:{houseOwner:'Kemo'}});
           },
           save(){
              var params = {};
              $('input[type=text]').each(function(){
                params[$(this).attr('id')] = $(this).val();
              });

              hClient.post('http://localhost:1200/addproduct',params,).then((res)=>{
                  console.log(res);
                  if(res.data.status){
                    alert('添加成功');
                    this.$router.push({path:'/products'});
                  }
              });
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