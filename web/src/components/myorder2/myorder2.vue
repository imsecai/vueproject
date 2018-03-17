<template>
    <div id="order">
        <div class="header">
            <ul class="order-title">
                <li><router-link to="/User">&lt;</router-link></li>
                <li>待收货</li>
                <li></li>
            </ul>

        </div>
        <div class="main">
            <ul class="order-list">
                <li v-for="(obj,idx) in dataset" v-if="obj.Status==1">
                    <div class="img"><img :src="'http://localhost:1111/src/assets/productimg/' + obj.Img1" alt=""></div>
                    <div class="font">
                        <p class="name">{{obj.Title}}</p>
                        <p class="params">{{obj.Style}}-{{obj.Material}}</p>
                        <p class="price-qty"><span>￥{{obj.Price}}</span><span class="qty">&times; {{obj.Qty}}</span></p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import './myorder2.scss'
    import axios from 'axios';
    import Http from '../../httpClient/httpClient'

    export default{
        data(){
            return{
                dataset:[],
                show : false,
                selectAddSet:[],
            }
        },
        methods:{

        },
        mounted(){
            var oname = JSON.parse(localStorage.getItem("data")).user_id;
            Http.post('myorderList',{user_id:oname}).then((res)=>{
                try{
                  this.dataset =  res.data.data.results
                }catch(err){
                   console.log(err)
                }
            })
        }
   }
</script>