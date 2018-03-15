<template>
    <div class="goodslist_box_L">
        <div class="gds_head_L">
            <router-link to="/ListPage">
                <span>〈</span>
            </router-link>
            <h3>{{category}}</h3>
        </div>
        <div class="sort_L">
            <span>默认</span>
            <span @click="tall">价格</span>
            <span>筛选</span>
        </div>
        <ul class="goodslist_L">
            <li v-for="(obj,idx) in dataset" v-if="obj.Category == category" :data-id = "obj.pID">
                <router-link :to="'/Detail/'+obj.pID">
                    <img :src="'http://localhost:1111/src/assets/productimg/'+obj.Img1">
                </router-link>
                <h4>{{obj.Title}}</h4>
                <p>{{obj.Describe}}</p>
                <span>￥{{obj.Price}}</span>
            </li>
        </ul>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import http from 'axios'
    import '../common/common.scss'
    import spinner from '../../spinner/spinner.vue'

    export default {
        data(){
             return{
                dataset:[],
                show:false,
                config:{
                    api:'http://localhost:1200/listpage/',
                    api2:'http://localhost:1200/listTall/',
                    api3:'http://localhost:1200/listDescend/',
                    cols:['pID']
                },
                category:'椅凳'
            }
        },
        components:{
            spinner
        },
        mounted(){
            this.show =true;
            http.get(this.config.api).then((res)=>{
                this.dataset = res.data.data.results
                this.show =false
            })
        },
        methods:{
            tall(){
                this.show =true;
                http.get(this.config.api3).then((res)=>{
                    this.dataset = res.data.data.results
                    this.show =false
                })
            },
            
        }
    }
</script>