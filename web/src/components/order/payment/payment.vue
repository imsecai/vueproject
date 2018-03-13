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
            <p class="payNum">订单号</p>
            <p>订单金额</p>

        </div>
        <div class="payMethods">
            <p>支付方式</p>
            <p><i class="ifont izhifubao"> </i> <span>支付宝</span></p>
            <p><i class="ifont iweixinzhifu"> </i> <span>微信支付</span></p>
        </div>

    </div>
    <div class="footer">
        立即支付
    </div>
  </div>
</template>

<script>
import './payment.scss'
export default {
  
}
</script>

