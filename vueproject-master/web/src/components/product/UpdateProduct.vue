<template>
  <div>
    <div id="Obox">
        <h3 class="">请输入需要修改的信息:</h3>
        <p>
          <label for="oid">产品编号：</label>
          <input type="text" id="oid" :value="array.pID" class="form-control col-sm-4">
        </p>
        <p>
          <label for="proname">产品名称：</label>
          <input type="text" id="Title" :value="array.Title" class="form-control col-sm-4">
        </p>
        <p>
          <label for="Depict">产品描述：</label>
          <input type="text" id="Depict" :value="array.Depict" class="form-control col-sm-4">
        </p>
        <p>
          <label for="Price">产品价格：</label>
          <input type="text" id="Price" :value="array.Price" class="form-control col-sm-4">
        </p>
        <p>
          <label for="Style">产品风格：</label>
          <input type="text" id="Style" :value="array.Style" class="form-control col-sm-4">
        </p>
        <p>
          <label for="Material">产品材质：</label>
          <input type="text" id="Material" :value="array.Material" class="form-control col-sm-4" >
        </p>
        <p>
          <label for="Category">产品分类：</label>
          <input type="text" id="Category" :value="array.Category" class="form-control col-sm-4">
        </p>
        <p>
          <label for="Img1">图片地址：</label>
          <input type="text" id="Img1" :value="array.Img1" class="form-control col-sm-4">
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
               text:'这是修改商品组件',
               array:{}
           }
       },
       mounted(){
          var Obj=window.sessionStorage.getItem("OBJ");
          var ob=JSON.parse(Obj);
          this.array=ob;
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

              hClient.post('http://localhost:1200/amend_product',params).then((res)=>{
                console.log(res);
                if(res.status){
                  alert('修改成功');
                  this.$router.push({path:'/products'});
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