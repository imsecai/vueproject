<template>
    <div>
        <!-- <div class="h_top">
            <input type="text" class="form-control col-sm-2" id="serch" />
            <input type="button" value="搜索" class="btn btn-primary "/>
            <input type="button" value="添加商品" class="btn btn-success" @click="addGoods"/>
        </div> -->
        <datagrid :config="config"></datagrid>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue';
    import hClient from '../../httpClient/httpClient.js'

    export default {
        components:{
            datagrid
        },
        data(){
            return {
                config:{
                    api: "http://localhost:1200/users",
                    oid:"user_id",
                    serch:"Serch_users",
                    delet:"del_users",
                    params: {page:1,limit:10},
                    cols:['username',"password","user_id"]
                }
            }
        },
        methods:{
            addGoods(){
                console.log(666);
               // this.$router.push({path:'/addGoods'})
            }
        }
    }
</script>