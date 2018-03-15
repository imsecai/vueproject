<template>
    <div id="login">
        <i class="fh" v-on:click="gouser"><返回</i>
        <div class="head">
            <h5>欢迎登录</h5>
            <img src="../../assets/logo.jpg"/>
        </div>
        <p v-show="showTishi" class="showtishi">{{tishi}}</p>
        <div class="phone">
            <input type="number" class="username" placeholder="填写手机号" v-model="username" v-on:input="shuru" />
        </div>
        <div class="pwd">
            <input type="password" class="password" placeholder="填写密码" v-model="password" />
        </div>
        <input type="button" value="登录" class="btnlogin" v-on:click="login" />
        <div class="tips">
            <span class="reg" v-on:click="goreg">快速注册</span>
        </div>
        <spinner v-if="show"></spinner>
        <bottoms></bottoms>
    </div>
</template>

<script>
    import './login.scss'
    import axios from 'axios'
    import http from '../../httpClient/httpClient'
    import bottoms from '../bottomnav/bottomnav.vue'
    import spinner from '../spinner/spinner.vue'
    export default{
        data(){
            return{
                showTishi: false,
                show:false,
                tishi: '',
                username: '',
                password: ''
            }
        },
        components:{
            bottoms,
            spinner
        },
        mounted(){
            if(localStorage.hasOwnProperty('data')){
                this.$router.push('/User')
            }
        },
        methods:{
            login(){
                this.show = true;
                var username = this.username;
                var password = this.password;
                if(username == '' || password == ''){  
                    this.tishi = '账号或密码不能为空'
                    this.showTishi = true;
                    this.show = false;
                    return;  
                }
                http.post('Login',{username:username,password:password}).then((res)=>{
                    if(res.data.status == 'ok'){
                        var userid = res.data.lg.user_id;
                        var obj = {
                            'user_id':userid,
                            'username':username,
                            'password':password
                        }
                        localStorage.setItem('data',JSON.stringify(obj));
                        this.$router.push('/User');
                        // this.show = false;
                        return;
                    }else{
                        this.tishi = '手机号码不正确';
                        this.showTishi = true;
                        this.show = false;
                    }
                })
            },
            gouser(){
                this.$router.push('/User');
            },
            goreg(){
                 this.$router.push('/Register');
            },
            shuru(){
                document.getElementsByClassName('btnlogin')[0].style.backgroundColor = "#ff5541";
            }
        },
    }
</script>