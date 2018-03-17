<template>
    <div id="shopCar">
        
        <div class="header">
            <ul class="shopCar-title">
                <li><router-link to="/User">&lt;</router-link></li>
                <li>购物车</li>
                <li><router-link to="/manage">管理</router-link></li>
            </ul>
        </div>
        <div class="main">
            <ul class="shopCar-list">
                <li v-for="(obj,idx) in dataset">
                    <input type="checkbox" :checked="lis.indexOf(idx) > -1" @click="select(idx)" class="checkbox"/>
                    <div class="img"><img :src="'http://localhost:1111/src/assets/productimg/' + obj.Img1" alt="" class="shop-pic"></div>
                    <div class="font">
                        <p class="name">{{obj.Title}}</p>
                        <p class="params">{{obj.Size}};{{obj.Material}};</p>
                        <p class="price-qty"><span>￥{{obj.Price}}</span><span class="qty">&times; {{obj.Qty}}</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="footer-left">
                <span>
                    <input type="checkbox" class="allSelect" :checked="lis.length == dataset.length" @click="allSelect"/>
                </span>
                
                <span> 全选</span>
            </div>
            <div class="footer-right">
                <span class="total">总计:￥{{total}} </span>
                <span class="account"><router-link to="order">结算( {{lis.length}} )</router-link></span>
            </div>
        </div>
        <spinner v-if="show"></spinner>
    </div>
    

</template>

<script>
    import './shopCar.scss';
    import spinner from '../spinner/spinner.vue'
    import axios from 'axios';
    import http from '../../httpClient/httpClient'

    export default {
        data(){
            return {
                show:false,
                dataset:[],
                lis:[],
                total:0,
            }
        },
        methods:{
            select:function(idx){
                this.total = 0;
                if(this.lis.indexOf(idx) > -1){
                    this.lis.splice(this.lis.indexOf(idx),1);
                }else{
                    this.lis.push(idx);
                    
                }
                this.lis.forEach((item)=>{
                    this.total += this.dataset[item].Price * this.dataset[item].Qty;
                })
            },
            allSelect:function(){
                if(this.lis.length == this.dataset.length){
                    this.lis = [];
                    this.total = 0;
                }else{
                    this.lis = [];
                    for(var i=0;i<this.dataset.length;i++){
                        this.lis.push(i);
                    }
                    let n = 0;
                    this.dataset.forEach(function(item){
                        n += item.Price * item.Qty;
                    })
                    this.total = n;
                }
            },
            
        },
        components:{
            spinner
        },
        mounted(){
            this.show = true;
            var username = window.localStorage.getItem('data')
            if(!username){
                this.$router.push('/Login');
            }
            http.post('getBuyList').then((res)=>{
                this.dataset = res.data.getBuyList;
                console.log(res)
            })
            this.show = false;
        }
    }
</script>



