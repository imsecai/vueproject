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
            <p><span>收货人姓名</span> <input type="text" placeholder="填写收货人姓名" /></p>
            <p><span>手机号  </span>   <input type="text" placeholder="填写手机号"/></p>
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
                <textarea placeholder="在此填写有效详细地址"></textarea>
        </div>
    </div>
    <router-link to="selectAdd">
        <div class="footer">
        确认添加
        </div>
    </router-link>

  </div>
</template>
<style>
</style>


<script>
    import './addAdd.scss'
    import http from 'axios'
    export default {
            data(){
                return{
                    provincialSet:[],
                    citySet:[],
                    countySet:[],
                    pro:'',
                    city:'',
                    county:'',
                }
            },
            mounted(){
                http.get('http://localhost:1111/src/libs/region.json').then((res)=>{
                    this.provincialSet = res.data.regions;
                })
            },
            methods:{
                getProvincial:function(){
                    this.provincialSet.length = 0;
                    http.get('http://localhost:1111/src/libs/region.json').then((res)=>{
                        this.provincialSet = res.data.regions;
                    })
                },
                getCity:function(){
                    this.citySet.length = 0;
                    this.countySet.length = 0;
                    http.get('http://localhost:1111/src/libs/region.json').then((res)=>{
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
            }
    }
    

</script>


