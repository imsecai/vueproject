<template>
    <div >
        <div id="bigBox">
            <div class="h_top">
                <input type="text" class="form-control col-sm-2" id="search" />
                <input type="button" value="搜索" class="btn btn-primary " @click="Osearch"/>
                <input type="button" value="添加" class="btn btn-success" @click="addProduct"/>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th v-for="(val, key) in dataset[0]" v-if="config.cols.indexOf(key) > -1">
                            {{key}}
                        </th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(obj, idx) in dataset">
                        <td v-for="(val, key) in obj" v-if="config.cols.indexOf(key) > -1">{{val}}</td>
                        <td>
                            <input type="button" value="redact" class="btn btn-default" @click="Oupdate(obj)"/>
                            <input type="button" value="delete" class="btn btn-danger" @click="Odelete(obj,idx)" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <spinner v-if="show"></spinner>
            <h1 class="h_page">{{page}}</h1>
        </div>
        <div id="tr_foot">
            <input class="btn btn-default" type="button" value="上一页" @click="less_page"/>
            <input class="btn btn-default" type="button" v-for="page in 10" :value="page" @click="goto(page)">
            <input class="btn btn-default" type="button" value="下一页" @click="add_page"/>
        </div>
    </div>
</template>

<script>
    import http from 'axios'
    import spinner from '../spinner/spinner.vue'
    import hClient from '../../httpClient/httpClient.js'

    //import '../product/produ.js'

    import './datagrid.css'

    export default {
        data(){
            return {
                dataset:[],
                // this.$store.state.product.project:[]
                show:false,
                pageindex:1
            }
        },
        props:['config'],
        components:{
            spinner
        },
        computed:{//page监听
            page:{
                get: function(){
                    hClient.get(this.config.api,{page:this.pageindex, limit: 10}).then((res)=>{
                        this.dataset=res.data.data;
                    })
                    return this.pageindex;
                },
                set: function(_newval){
                        this.pageindex = _newval;
                    }
            }
        },
        mounted(){//页面初始化就渲染
            this.show = true;//
            http.get(this.config.api, {params:this.config.params || {}}).then((res)=>{
                this.dataset = res.data.data;
                this.show = false;
            })

        },
        methods:{
            //分页
            goto(_page){
                this.page = _page;
            },//点击下一页
            less_page(){
                if(this.pageindex==1){
                    return false;
                }else{
                    this.pageindex--;
                }
            },//点击上一页
            add_page(){
                if(this.pageindex>=13){
                    return false;
                }else{
                    this.pageindex++;
                }
            },
            //点击删除时执行
            Odelete(obj,idx){
                let oid=this.config.oid
                console.log(oid);
                hClient.post('http://localhost:1200/'+this.config.delet,{"id":obj[oid]}).then((res)=>{
                    if(res.status == 200){//成功后根据下标删除数组中的数据
                        this.dataset.splice(idx,1);
                    }
                })
            },
            addProduct(){//添加数据

                this.$router.push({path:'/addProduct'});
                console.log(this)
            },
            Osearch(){//模糊查询
                //this.$store.dispatch('refresh');
                let params = $('#search').val();
                hClient.get('http://localhost:1200/'+this.config.serch,{params}).then((res)=>{
                    if(res.data.status=="error"){
                        alert("输入信息不存在");
                        return false;
                    }
                    console.log(res);
                    this.dataset=res.data.data;
                })
            },//修改
            Oupdate(obj){
                var str=JSON.stringify(obj);
                window.sessionStorage.setItem("OBJ",str);
                this.$router.push({path:this.config.update});
            }
        }
    }

</script>


