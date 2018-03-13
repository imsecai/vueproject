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
                <p>字体图标</p>
                <p>订单提交成功 !</p>
            </div>
            <div class="paymentInf">
                <p class="payNum">订单号</p>
                <p>订单金额</p>

            </div>
            <div class="payMethods">
                <p>支付方式</p>
                <p>支付宝</p>
                <p>微信支付</p>
                <p>分多次支付</p>

            </div>

        </div>
  </div>
</template>

<script>
import './payment.scss'
export default {
  
}
</script>

