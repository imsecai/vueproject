<template>
    <div id="order">
        <div class="header">
            <ul class="order-title">
                <li><router-link to="/shopCar">&lt;</router-link></li>
                <li>订单确认</li>
                <li></li>
            </ul>

        </div>
        <div class="main">
            <div class="address" >
                <router-link to="selectAdd">
                    <p class="person"> 收货人: <span v-for = "val in selectAddSet[0]">{{val}}</span></p>
                    <p class="jiantou">&gt;</p>
                    
                </router-link>
            </div>
            <ul class="order-list">
                <li v-for="(obj,idx) in dataset">
                    <div class="img"><img :src="'http://localhost:1111/src/assets/productimg/' + obj.Img1" alt=""></div>
                    <div class="font">
                        <p class="name">{{obj.Title}}</p>
                        <p class="params">{{obj.Size}};{{obj.Material}}</p>
                        <p class="price-qty"><span>￥{{obj.Price}}</span><span class="qty">&times; {{obj.Qty}}</span></p>
                    </div>
                </li>

            </ul>
            <div class="else">
                <p>平台优惠券</p>
                <p class="beizhu">
                    <span>备注</span>
                    <input type="text" placeholder="在此备注其他信息"/>
                </p>
            </div>
        </div>
        <div class="footer">
            <div class="total">总计：￥ {{total1}}</div>
            <div class="submit">
            <router-link to="/payment">提交订单</router-link>
            </div>
        </div>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import "./order.scss";
    import spinner from '../spinner/spinner.vue'
    import axios from 'axios';
    import Http from '../../httpClient/httpClient'
    
    export default {
        data(){
            return {
                show : false,
                dataset:[],
                selectAddSet:[],
                total1:''

    
            }
        },
        methods:{
            
            

        },
        components:{
            spinner,
        },
        mounted(){
            this.show = true;
            Http.post('getBuyList').then((res)=>{
                this.dataset = res.data.getBuyList;
                // console.log(res)
            })
            Http.post('selectAdd').then((res)=>{
                this.selectAddSet = res.data.selectAdd;
                delete this.selectAddSet[0].Addressid;
            })
            this.show = false;
        },
        updated(){
             let n = 0;
            this.dataset.forEach((item)=>{
                n += item.Price * item.Qty;
                
            })
            this.total1 = n;
            // console.log(this.total1)
        }
    
    }
</script>

