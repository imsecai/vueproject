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
                        <router-link to="shopCar">
                        <i class="iconfont icon-gouwuche"></i>
                        </router-link>
                        <p>购物车</p>
                    </div>
                </li>
                <li>
                    <div class="scang">
                        <i class="iconfont icon-shoucang"></i>
                        <p>收藏</p>
                    </div>
                </li>
                <li>
                    <div class="lquan">
                        <i class="iconfont icon-weibiaoti2fuzhi02"></i>
                        <p>礼券</p>
                    </div>
                </li>
                <li>
                    <div class="fxiang">
                        <i class="iconfont icon-fenxiang"></i>
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
                        <i class="iconfont icon-daifukuan"></i>
                        <p><router-link to="/myorder">待付款</router-link></p>
                    </div>
                </li>
                <li>
                    <div class="scang">
                        <i class="iconfont icon-daishouhuo"></i>
                        <p><router-link to="/myorder2">待收货</router-link></p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="user_tab_img">
            <img src="../../assets/user_tab_img.jpg" />
        </div>
        <button class="loginout" v-on:click="exit">退出当前账号</button>

        <bottoms></bottoms>

    </div>
</template>

<script>
    import './user.scss'
    import bottoms from '../bottomnav/bottomnav.vue'
    export default{
        data(){
            return{
                phonenumber:''
            }
        },
        components:{
            bottoms
        },
        mounted(){
            try{
                var username = JSON.parse(localStorage.getItem("data")).username;
                this.phonenumber = username;
            }catch(err){
                console.log(err)
            }
            var username = window.localStorage.getItem('data')
            if(!username){
                this.$router.push('/Login');
            }
        },
        methods:{
            exit(){
                localStorage.removeItem('data');
                this.username = '';

                setTimeout(function(){
                      this.$router.push('/Login')
                  }.bind(this),1000)

                return;
            }
        }
    }
</script>