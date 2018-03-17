<template>
  <div>
    <div id="Obox">
        <h3 class="">请输入需要修改的信息:</h3>
        <p>
          <label for="buyID">产品编号：</label>
          <input type="text" id="buyID" :value="array.buyID" class="form-control col-sm-4">
        </p>
        <p>
          <label for="Qty">产品数量：</label>
          <input type="text" id="Qty" :value="array.Qty" class="form-control col-sm-4">
        </p>
        <p>
          <label for="Title">产品名称：</label>
          <input type="text" id="Title" :value="array.Title" class="form-control col-sm-4">
        </p>
<!--         <p>
          <label for="OMaterial">产品描述：</label>
          <input type="text" id="OMaterial" :value="array.OMaterial" class="form-control col-sm-4">
        </p> -->
        <p>
          <label for="Price">产品价格：</label>
          <input type="text" id="Price" :value="array.Price" class="form-control col-sm-4">
        </p>
        <p>
          <label for="Size">产品规格：</label>
          <input type="text" id="Size" :value="array.Size" class="form-control col-sm-4" >
        </p>
        <p>
          <label for="Status">支付状态：</label>
          <input type="text" id="Status" :value="array.Status" class="form-control col-sm-4">
        </p>
        <p>
          <input type="button" class="btn btn-success" value="Save" id="btn_save" @click="save" >
        </p>
    </div>

  </div>
</template>

<script type="text/javascript">
    import hClient from '../../httpClient/httpClient.js'
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
            save(){
               var params = {};
               $('input[type=text]').each(function(){
                 params[$(this).attr('id')] = $(this).val();
               });

               hClient.post('http://localhost:1200/update_buylist',params).then((res)=>{
                 console.log(res);
                 if(res.status){
                   alert('修改成功');
                   this.$router.push({path:'/buylist'});
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

