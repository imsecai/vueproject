<template>
    <div id="order">
        <div class="header">
            <ul class="order-title">
                <li><router-link to="/User">&lt;</router-link></li>
                <li>待付款</li>
                <li></li>
            </ul>

        </div>
        <div class="main">
            <ul class="order-list">
                <li v-for="(obj,idx) in dataset" v-if="obj.Status==0">
                    <div class="img"><img :src="'http://localhost:1111/src/assets/productimg/' + obj.Img1" alt=""></div>
                    <div class="font">
                        <p class="name">{{obj.Title}}</p>
                        <p class="params">{{obj.Size}}-{{obj.Material}}</p>
                        <p class="price-qty"><span>￥{{obj.Price}}</span><span class="qty">&times; {{obj.Qty}}</span></p>
                    </div>
                </li>

            </ul>
        </div>
        <div class="footer">
            <div class="total">总计：￥{{totalPrice}}</div>
            <div class="submit">
            <router-link to="/payment">付款</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import './myorder.scss'
    import axios from 'axios';
    import Http from '../../httpClient/httpClient'

    export default{
        data(){
            return{
                dataset:[],
                show : false,
                selectAddSet:[],
                totalPrice:0,
            }
        },
        methods:{

        },
        mounted(){
            var oname = JSON.parse(localStorage.getItem("data")).user_id;
            // Http.post('myorderList',{user_id:oname}).then((res)=>{
            //     console.log(666)
            //     console.log(res)
            //     try{
            //         this.dataset = res.data.data.results;
            //         for(let i=0;i<this.dataset.length;i++){
            //             this.totalPrice += this.dataset[i].Price * this.dataset[i].Qty;
            //         }
            //     }catch(err){
            //        console.log(err)
            //     }
            // })
            Http.post('myorderList').then((res)=>{
                this.dataset = res.data.getBuyList;
                console.log(res)
                try{
                    for(let i=0;i<this.dataset.length;i++){
                        this.totalPrice += this.dataset[i].Price * this.dataset[i].Qty;
                    }
                }catch(err){
                    console.log(err)
                }
            })
        }
   }
</script>