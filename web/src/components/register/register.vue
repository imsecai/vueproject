<template>
    <div id="register">
        <i class="fh" v-on:click="gouser"><返回</i>
        <div class="head">
            <h5>欢迎注册</h5>
            <img src="../../assets/logo.jpg" height="36" width="165" alt="" />
        </div>
        <p v-show="showTishi" class="showtishi">{{tishi}}</p>
        <div class="phone">
            <input type="number" class="username" placeholder="填写手机号" v-model="username" v-on:input="shuru" v-on:blur="phonetest" />
        </div>
        <div class="pwd">
            <input type="password" class="password" placeholder="填写密码" v-model="password" />
        </div>
<!--         <div class="pwd2">
            <input type="password" class="password2" placeholder="确认密码" />
        </div> -->
        <input type="button" value="注册" class="btnreg" v-on:click="register" />
        <div class="tips">
            <span class="login" v-on:click="gologin">快速登录</span>
        </div>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import './register.scss'
    import axios from 'axios'
    import http from '../../httpClient/httpClient'
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
        methods:{
            phonetest(){
                var reg = /^1[34578]\d{9}$/i;
                if(!reg.test(this.username)){
                    this.tishi = '手机号码格式不正确';
                    this.showTishi = true;
                    return false;
                }

                http.post('yzUsername',{username:this.username}).then((res)=>{
                    if(res.data.state == 'ok'){
                        this.tishi = '此手机号码已注册，请直接登录';
                        this.showtishi = true;
                        document.getElementsByClassName('btnreg')[0].disabled = true;
                    }else if(res.data.state == 'err'){
                        document.getElementsByClassName('btnreg')[0].disabled = false;
                    }
                })
            },
            register(){
                this.show = true;
                var username = this.username;
                var password = this.password;
                if(username == '' || password == ''){  
                    this.tishi = '账号或密码不能为空'
                    this.showTishi = true
                    this.show = false;
                    return;  
                }
                http.post('zcUsername',{username:username,password:password}).then((res)=>{
                    var obj = {
                        'username':username,
                        'password':password
                    }
                    localStorage.setItem('data',JSON.stringify(obj));
                    // this.$router.go(-1) //go方法回跳回前一个页面
                    this.$router.push('/User');
                    // this.show = false;
                    // return;
                })
            },
            gouser(){
                this.$router.push('/User');
            },
            gologin(){
                this.$router.push('/Login');
            },
            shuru(){
                document.getElementsByClassName('btnreg')[0].style.backgroundColor = "#ff5541";
            }
        }
    }
</script>