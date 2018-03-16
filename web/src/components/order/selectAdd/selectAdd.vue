<template>
  <div id="selectAdd">
    <div class="header">
        <ul class="selectAdd-title">
        <li><router-link to="/order">&lt;</router-link></li>
        <li>选择收货地址</li>
        <li></li>
        </ul>
    </div>

    <div class="main">
        <ul class="selectAdd-list">
            <li v-for="(obj,idx) in selectAddSet" @click="newAdd(obj.Addressid)">
                <p class="nickname_phone">{{obj.Nickname}} {{obj.Phone}}</p>
                <p class="address">{{obj.Pro}} {{obj.City}} {{obj.County}} {{obj.Detadd}}</p>
                <i class="del" @click="delAdd(obj.Addressid,idx)">-</i>
            </li>
        </ul>
    </div>

    <router-link to="addAdd">
        <div class="footer">
        添加新地址
        </div>
    </router-link>
    <spinner v-if="show"></spinner>
  </div>
</template>

<script>
import './selectAdd.scss'
import spinner from "../../spinner/spinner.vue";
import Http from '../../../httpClient/httpClient'

export default {
    data(){
        return {
            show:false,
            selectAddSet:[],
        }
    },
    methods:{
        delAdd:function(_Addressid,idx){
            Http.post('delAdd',{Addressid: _Addressid}).then((res)=>{
                //console.log(res);
                if(res.status == 200){
                    this.selectAddSet.splice(idx,1);
                }
            })
        },
        newAdd:function(_new){
            Http.post('newAdd',{new:_new}).then((res) =>{
                console.log(res)
            })
        }
    },
    components:{
        spinner,
    },
    mounted(){
        this.show = true;
        Http.post('selectAdd').then((res)=>{
            console.log(res)
            this.selectAddSet = res.data.selectAdd;
            // console.log(this.selectAddSet)
        })
        this.show = false;

    }
  
}
</script>

