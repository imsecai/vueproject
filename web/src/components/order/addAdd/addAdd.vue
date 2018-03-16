<template>
  <div id="addAdd">
    <div class="header">
        <ul class="addAdd-title">
            <li><router-link to="/selectAdd">&lt;</router-link></li>
            <li>新增收货信息</li>
            <li></li>
        </ul>
    </div>
    <div class="main">
        <div class="Information">
            <p><span>收货人姓名</span> <input type="text" placeholder="填写收货人姓名" v-model="nickname"/></p>
            <p><span>手机号  </span>   <input type="text" placeholder="填写手机号" v-model="phone"/></p>
        </div>
        <div class="city">
            <p>选择所在区域</p>
            <select v-model="pro" name="pro"   @change="getCity">
                <option v-for="(item,idx) in  provincialSet">{{item.name}}</option>
            </select>
            <select v-model="city" name="city"  @change="getCounty">
                <option  v-for="(item,idx) in citySet">{{item.name}}</option>
            </select>
            <select v-model="county" name="county">
                <option   v-for="(item,idx) in countySet">{{item}}</option>
            </select>
        </div>
        <div class="textareaAdd"><p>详细地址</p>
                <textarea placeholder="在此填写有效详细地址" v-model="detadd"></textarea>
        </div>
    </div>
    <router-link to="selectAdd">
        <div class="footer" @click="addAdd">
        确认添加
        </div>
    </router-link>
    <spinner v-if="show"></spinner>

  </div>
</template>
<style>
</style>


<script>
    import './addAdd.scss'
    import spinner from  '../../spinner/spinner.vue'
    import axios from 'axios'
    import http from '../../../httpClient/httpClient'
    export default {
        data(){
            return{
                show:false,
                nickname:'',
                phone:'',
                detadd:'',
                provincialSet:[],
                citySet:[],
                countySet:[],
                pro:'',
                city:'',
                county:'',
            }
        },
        components:{
            spinner,
        },
        mounted(){
            this.show = true;
            axios.get('http://localhost:1111/src/libs/region.json').then((res)=>{
                this.provincialSet = res.data.regions;
            })
            this.show = false;
        },
        methods:{
            getProvincial:function(){
                this.provincialSet.length = 0;
                axios.get('http://localhost:1111/src/libs/region.json').then((res)=>{
                    this.provincialSet = res.data.regions;
                })
            },
            getCity:function(){
                this.citySet.length = 0;
                this.countySet.length = 0;
                axios.get('http://localhost:1111/src/libs/region.json').then((res)=>{
                    res.data.regions.forEach((item)=>{
                        if(item.name == this.pro){
                            this.citySet = item.regions;
                        } 
                    })
                })
            },
            getCounty:function(){
                this.countySet.length = 0;
                this.citySet.forEach((item)=>{
                    if(item.name == this.city){
                        item.regions.forEach((item)=>{
                            this.countySet.push(item.name)
                        })
                    }
                    
                })
                
            },
            addAdd(){
                let nickname = this.nickname;
                let phone = this.phone;
                let pro = this.pro;
                let city = this.city;
                let county = this.county;
                let detadd = this.detadd;
    
                http.post('addAdd',{nickname,phone,pro,city,county,detadd}).then((res)=>{
                    if(res.data.status == 'ok'){
                        console.log(res)
                    }
                })
            }
        }
    }
    

</script>


