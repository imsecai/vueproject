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
            <p>收货人姓名</p>
            <p>手机号</p>
            <p>配送时间</p>
            <p>所在区域</p>
            <p>详细地址</p>

        </div>
        <div class="city">
            <select v-model="pro" name="pro"   @change="getCity">
                <option  v-for="(item,idx) in  provincialSet">{{item.name}}</option>
            </select>
            <select v-model="city" name="city"  @change="getCounty">
                <option  v-for="(item,idx) in citySet">{{item.name}}</option>
            </select>
            <select v-model="county" name="county">
                <option   v-for="(item,idx) in countySet">{{item.name}}</option>
            </select>
        </div>
    </div>

  </div>
</template>

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
                    ArrCounty:[]
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
                        // console.log(res.data.regions)
                        this.provincialSet = res.data.regions;
                        // .forEach((item)=>{
                        //     .push(item.name)
                        // })
                    })
                    // console.log(this.provincialSet)
                },
                getCity:function(){
                    this.citySet.length = 0;
                    // this.countySet.length = 0;
                    http.get('http://localhost:1111/src/libs/region.json').then((res)=>{
                       res.data.regions.forEach((item)=>{
                            if(item.name == this.pro){
                                // item.regions.forEach((itemCity)=>{
                                //     this.citySet.push(itemCity.name)
                                // })
                                this.citySet = item.regions;
                                
                                this.ArrCounty = item.regions[0].regions;
                               console.log(this.city)
                            } 
                        })
                    })
                },
                getCounty:function(){
                    this.countySet.length = 0;
                    
                    
                    // this.ArrCounty.forEach((item)=>{
                        
                    // })   
                    
                    // http.get('http://localhost:1111/src/libs/region.json').then((res)=>{
                    //     res.data.regions.forEach((item)=>{  
                    //         item.regions.forEach((itemCity)=>{
                    //             if(itemCity.name == this.city){
                    //                 itemCity.regions.forEach((itemCounty)=>{
                    //                     this.countySet.push(itemCounty.name)
                    //                 })
                    //             }
                    //         })
                    //     }) 
                    // })
                },
            }
    }
    

</script>


