<template>
  <div id="payment">
    <div class="header">
        <ul class="payment-title">
            <li><router-link to="/order"> &lt;</router-link></li>
            <li>支付</li>
            <li></li>
        </ul>
    </div>
    <div class="main">
        <div class="success">
            <i class="ifont idagouyouquan"></i>
            <p>订单提交成功 !</p>
        </div>
        <div class="paymentInf">
            <p class="payNum">订单号 : 0014589631455</p>
            <p class="payMoney">订单金额 : ￥ {{total}}</p>

        </div>
        <div class="payMethods">
            <p>支付方式</p>
            <p><span><i class="ifont izhifubao"></i> 支付宝</span>
            <span class="select" v-bind:class="{active:isActive}"></span></p>
            <p><span><i class="ifont iweixinzhifu"> </i> 微信支付</span>
            <span class="select" v-bind:class="{active:isActive1}"></span></p>
        </div>

    </div>
    <div class="footer">
        立即支付
    </div>
    <spinner v-if="show"></spinner>
  </div>
</template>

<script>
import './payment.scss'
import Http from "../../../httpClient/httpClient";
import spinner from "../../spinner/spinner.vue"
export default {
    data(){
        return{
            show:false,
            isActive:false,
            isActive1:false,
            tip:0,
            dataset:[],
            total:0,

        }
    },
    methods:{
        selectZhi(){
            if(this.tip == 0){
                this.isActive = true;
                this.tip = 1;
            }else{
                this.isActive = false;
                this.tip = 0;
            }
        },
        selectWei(){
             if(this.tip == 0){
                this.isActive1 = true;
                this.tip = 1;
            }else{
                this.isActive1 = false;
                this.tip = 0;
            }
        }
    },
    components:{
        spinner,
    },
    mounted(){
        this.show = true;
        Http.post('getBuyList').then((res)=>{
                this.dataset = res.data.getBuyList;
                let n = 0;
                this.dataset.forEach((item)=>{
                    n += item.Price * item.Qty;
                })
                this.total = n;
            })
        this.show = false;
    },

  
}
</script>

