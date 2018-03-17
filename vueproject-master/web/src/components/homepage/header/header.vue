<template>
    <div>
        <h3 class="header_h3">简易后台商品管理系统</h3>
        <div class="Ouser">
            <span>欢迎：</span><a href="#">{{uname}}</a>
            <input type="button" value="退出" class="btn btn-secondary getout" @click="getout"/>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            uname:''
          }
        },
        mounted(){
          var name=window.sessionStorage.getItem("name");
          this.uname=name;
        },
        methods:{
           getout(){
              this.$router.push({path:'/Login'});
           }
        }
    }
</script>