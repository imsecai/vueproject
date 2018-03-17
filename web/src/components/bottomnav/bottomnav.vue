<template>
    <div id="bottomnav">
        <router-link :to="{name:'HomePage'}" exact>
            <i class="iconfont icon-shouye"></i>
            首页  
        </router-link>
        <router-link :to="{name:'ListPage'}">
            <i class="iconfont icon-fenlei"></i>
            分类
        </router-link>
        <router-link :to="{name:'lives'}">
            <i class="iconfont icon-shenghuo"></i>
            生活家
        </router-link>
        <router-link :to="{name:'User'}">
            <i class="iconfont icon-wode"></i>
            我的
        </router-link>
    </div>
</template>

<script>
    import './bottomnav.scss'
    export default{

    }
</script>