<template>
  <div id="manage">
        <div class="header">
            <ul class="manage-title">
                <li>&lt;</li>
                <li>购物车</li>
                <li><router-link to="/shopCar">完成</router-link></li>
            </ul>
        </div>
        <div class="main">
            <ul class="manage-list">
                <li v-for="(obj,idx) in dataset">
                    <input type="checkbox" class="checkbox" :checked="lis.indexOf(idx) > -1" @click="select(idx)"/>
                    <div class="img"><img :src="obj.imgurl" alt=""></div>
                    <div class="qty">
                        <span class="sub" @click="sub">-</span>
                        <span class="res">{{ obj.qty }}</span>
                        <span class="add" @click="add">+</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="footer-left">
                <span>
                    <input type="checkbox" class="allSelect" :checked="lis.length == dataset.length" @click="allSelect">
                </span>
                <span> 全选</span>
            </div>
            <div class="footer-right">
                <span class="delete">删除</span>
            </div>
        </div>
  </div>
</template>

<script>
    import manage from "./manage.scss";
    import http from 'axios';
    export default {
        data(){
            return {
                dataset:[],
                lis:[],
                total:0,
                res:'',
                show:false,
            }
        },
        methods:{
            select:function(idx){
                this.total = 0;
                if(this.lis.indexOf(idx) > -1){
                    this.lis.splice(this.lis.indexOf(idx),1);
                }else{
                    this.lis.push(idx);
                    this.lis.forEach((item)=>{
                    })
                }
                this.lis.forEach((item)=>{
                    this.total += this.dataset[item].price * this.dataset[item].qty;
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
                        n += item.price * item.qty;
                    })
                    this.total = n;
                }
            },
            add:function(){

            },
            sub:function(){
                
            }
        },
        mounted(){
            http.get('http://localhost:8080/shopCarApi/shopCarApi.json').then((res)=>{
                console.log(res)
                this.dataset = res.data;
            })
        }

        
    
    }
</script>

