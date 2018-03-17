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
                    <div class="img"><img :src="'http://localhost:1111/src/assets/productimg/' + obj.Img1" alt=""></div>
                    <div class="qty">
                        <span class="sub" @click="sub(obj.buyID,idx)">-</span>
                        <span class="res">{{ obj.Qty }}</span>
                        <span class="add" @click="add(obj.buyID,idx)">+</span>
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
                <span class="delete" @click="del">删除</span>
            </div>
        </div>
        <spinner v-if="show"></spinner>
  </div>
</template>

<script>
    import manage from "./manage.scss";
    import spinner from "../../spinner/spinner.vue";
    import axios from 'axios';
    import http from '../../../httpClient/httpClient'
    export default {
        data(){
            return {
                show:false,
                dataset:[],
                lis:[],
                total:0,
                res:'',
                arrIdx:[]
            }
        },
        methods:{
            select:function(idx){
                this.arrIdx.push(idx)
                console.log(this.arrIdx)
                this.total = 0;
                if(this.lis.indexOf(idx) > -1){
                    this.lis.splice(this.lis.indexOf(idx),1);
                }else{
                    this.lis.push(idx);
                  
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
                        n += item.Price * item.Qty;
                    })
                    this.total = n;
                }
            },
            add:function(_buyID,_idx){
                
                http.post('addQty',{buyID:_buyID}).then((res)=>{
                    
                    this.dataset[_idx].Qty++;
                })
            },
            sub:function(_buyID,_idx){
                http.post('subQty',{buyID:_buyID}).then((res)=>{
                    this.dataset[_idx].Qty--;
                })
            },
            del:function(idx){
                let arrBuyId = [];
                for(var i=0;i<this.lis.length;i++){
                    arrBuyId.push(this.dataset[this.lis[i]].buyID);
                }
                
                http.post('delShops',{arrBuyId:arrBuyId}).then((res)=>{
                    // console.log(res)
                })
                var id=[]
                this.lis.forEach((item,idx)=>{
                    // console.log('当前索引值',idx)
                    id.push(this.dataset[item].buyID);
                    
                })
                // id.forEach((item,idx) => {
                //     this.dataset.splice(this.dataset.indexOf(item),1);
                // })
                for(var j=0;j<id.length;j++){
                    for(var i=0;i<this.dataset.length;i++){
                        if(this.dataset[i].buyID==id[j]){
                            console.log(i)
                            this.dataset.splice(i,1);
                        }
                        
                    }
                }
                 this.lis=[];
                // this.dataset.forEach((item)=>{
                //     console.log('购物车所有列表',item)
                // })
                
            }
        },
        components:{
            spinner,
        },
        mounted(){
            this.show = true;
            http.post('getBuyList').then((res)=>{
                // console.log(res)
                this.dataset = res.data.getBuyList;
            })
            this.show = false;
        }

        
    
    }
</script>

