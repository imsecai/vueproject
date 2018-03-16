<template>
    <div id="user">
        <div class="user_head">
            <img src="../../assets/user_head.png" />
            <div class="user_tx">
                <img src="../../assets/logo.png"/>
            </div>
            <div class="users">{{phonenumber}}</div>
        </div>

        <div class="user_tab">
            <ul>
                <li>
                    <div class="bcar">
                        <i>i</i>
                        <p>购物车</p>
                    </div>
                </li>
                <li>
                    <div class="scang">
                        <i>i</i>
                        <p>收藏</p>
                    </div>
                </li>
                <li>
                    <div class="lquan">
                        <i>i</i>
                        <p>礼券</p>
                    </div>
                </li>
                <li>
                    <div class="fxiang">
                        <i>i</i>
                        <p>分享</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="user_tab">
            <div class="myorder">
                <span>我的订单</span>
            </div>
            <div class="line"></div>
            <ul>
                <li>
                    <div class="bcar">
                        <i>i</i>
                        <p>代付款</p>
                    </div>
                </li>
                <li>
                    <div class="scang">
                        <i>i</i>
                        <p>待收货</p>
                    </div>
                </li>
                <li>
                    <div class="lquan">
                        <i>i</i>
                        <p>待评价</p>
                    </div>
                </li>
                <li>
                    <div class="fxiang">
                        <i>i</i>
                        <p>退换/售后</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="user_tab_img">
            <img src="../../assets/user_tab_img.jpg" />
        </div>
        <!-- <div class="loginout">退出当前账号</div> -->
        <button class="loginout">退出当前账号</button>

        <bottoms></bottoms>

<!--         <h1>{{text}}</h1>
        <p>{{get_msg}}</p>
        <p></p>
        <button @click='getmsg'>get请求点我</button>
        <button @click="postmsg">post请求点我</button> -->

    </div>
</template>

<script>
    import './user.scss'
    import bottoms from '../bottomnav/bottomnav.vue'
    export default{
        data(){
            return{
                text:'这是用户组件',
                phonenumber:'13212341234'
            }
        },
        components:{
            bottoms
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