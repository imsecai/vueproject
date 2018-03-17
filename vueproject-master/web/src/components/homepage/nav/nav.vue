<template>
    <div id="navbox">
        <ul class="list-group">
            <li class="list-group-item"><router-link to="/products">商品管理</router-link></li>
            <li class="list-group-item"><router-link to="/buylist">订单管理</router-link></li>
            <li class="list-group-item"><router-link to="/users">用户管理</router-link></li>
            <li class="list-group-item"><router-link to="/goods">品牌管理</router-link></li>
            <li class="list-group-item"><a href="#">其它</a></li>
        </ul>    
    </div>
</template>

<script>
    export default {
        methods:{
            goods(){
                console.log(666);
            }
        }
    }
</script>