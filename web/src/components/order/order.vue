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
            <div class="address">
                <router-link to="selectAdd">
                    <p class="person">收货人:</p>
                    <p class="jiantou">&gt;</p>
                    <p class="person-add">重庆</p>
                </router-link>
            </div>
            <ul class="order-list">
                <li v-for="(obj,idx) in dataset">
                    <div class="img"><img :src="obj.imgurl" alt=""></div>
                    <div class="font">
                        <p class="name">{{obj.name}}</p>
                        <p class="params">{{obj.size}};{{obj.meterials}};{{obj.color}}</p>
                        <p class="price-qty"><span>￥{{obj.price}}</span><span class="qty">&times; {{obj.qty}}</span></p>
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
            <div class="total">总计：￥</div>
            <div class="submit">
            <router-link to="/payment">提交订单</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import "./order.scss";
    import http from 'axios';
    export default {
        data(){
            return {
                dataset:[],
            }
        },
        methods:{

        },
        mounted(){
            http.get('http://localhost:8080/shopCarApi/shopCarApi.json').then((res)=>{
                this.dataset = res.data;
            })

        }
    
    }
</script>

