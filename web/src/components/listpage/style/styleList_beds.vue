<template>
    <div class="goodslist_box_L">
        <div class="gds_head_L">
            <router-link to="/ListPage">
                <span>〈</span>
            </router-link>
            <h3>{{dataset[0].category}}</h3>
        </div>
        <div class="sort_L">
            <span>默认</span>
            <span>价格</span>
            <span>筛选</span>
        </div>
        <ul class="goodslist_L">
            <li v-for="(obj,idx) in dataset">
                <img src="http://localhost:1111/src/assets/img/listIMG/sofa/sofa01.jpg">
                <h4>{{obj.name}}</h4>
                <p>{{obj.description}}</p>
                <span>￥{{obj.price}}</span>
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
                show:false
            }
        },
        components:{
            spinner
        },
        mounted(){
            this.show =true;
            http.get('http://localhost:1201/listpage/').then((res)=>{
                this.dataset = res.data.data.results
                this.show =false
                // console.log(this.dataset[0].category)
            })
        }
    }
</script>