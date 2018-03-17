<template>
    <h1>product</h1>
</template>


<template>
    <div>

        <datagrid :config="config"></datagrid>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue'
    import './product.css'
    //import http from 'axios'
    import hClient from '../../httpClient/httpClient.js'
    // import './product.js'
    export default {
        components: {
            datagrid
        },
        data(){
            return {
                config: {//https://cnodejs.org/api/v1/topics   http://10.3.136.67:8080/products
                    api:"http://localhost:1200/products",
                    oid:"pID",
                    serch:"Serch_product",
                    delet:"delproduct",
                    update:"/updateproduct",
                    params: {page:1,limit:10},
                    cols:['pID','Title','Depict','Price','Style','Category','Img1']
                    
                }
            }
        },
        methods:{

        },
    }

    //过滤掉不要的字段
    //默认没有 cols 为全部
    //中英文切换
    //翻页
</script>
