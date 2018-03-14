<template>
   <div id="listBox">
        <div class="search_box">
           <input type="text" placeholder="搜索品类/单品/风格">
        </div>
        <main class="listMain">
            <div>
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
       <footer class="listFoot"><h1>底部</h1></footer>
   </div>
</template>

<script>
    import '../../common/common.scss'
    import './listNav/listNav.scss'
   export default{
       data(){
           return{
               text:'这是列表组件',
           }
       },
       methods:{
           getmsg(){
               this.$store.dispatch('getmsg_get',{path:'product/',msg:{houseOwner:'Kemo'}});
           },
           postmsg(){
               this.$store.dispatch('getmsg_post',{path:'product',msg:{houseOwner:'Kemo'}});
           }
       },
       computed:{
           get_msg:{
               get:function(){
                   console.log(11555);
                   return this.$store.getters.getmsg_get;
               }
           }
       }
   }
</script>