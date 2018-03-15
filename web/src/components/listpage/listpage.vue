<template>
   <div id="listBox">
        <div class="search_box">
           <input type="text" placeholder="搜索品类/单品/风格">
        </div>
        <main class="listMain">
            <div class="listMain_l">
                <div class="blankBox"></div>
                <ul class="listNav">
                    <li>
                        <i></i>
                        <router-link to="/ListPage/category">
                            <h3>品类</h3>
                        </router-link>
                        </li>
                    <li>
                        <i></i>
                        <router-link to="/ListPage/style">
                            <h3>风格</h3>
                        </router-link>
                    </li>
                    <li>
                        <i></i>
                        <router-link to="/ListPage/space">
                            <h3>空间</h3>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="list_img">
                <router-view></router-view>
            </div>
        </main>
       <!-- <footer class="listFoot"><h1>底部</h1></footer> -->
       <bottoms></bottoms>
   </div>
</template>

<script>
    import '../../common/common.scss'
    import './listNav/listNav.scss'
    import bottoms from '../bottomnav/bottomnav.vue'
   export default{
       components:{
            bottoms
        }
   }
</script>