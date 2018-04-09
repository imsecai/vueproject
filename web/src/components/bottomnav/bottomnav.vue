<template>
    <div id="bottomnav">
        <router-link :to="{name:'HomePage'}" exact>
            <i>i</i>
            首页  
        </router-link>
        <router-link :to="{name:'ListPage'}">
            <i>i</i>
            分类
        </router-link>
        <router-link :to="{name:'User'}">
            <i>i</i>
            生活家
        </router-link>
        <router-link :to="{name:'User'}">
            <i>i</i>
            我的
        </router-link>
    </div>
</template>

<script>
    import './bottomnav.scss'
    export default{

    }
</script>