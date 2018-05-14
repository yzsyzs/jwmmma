<template>
    <div id="dailog" v-if="showLogin" @click.stop="close">
        <!--注册页-->
        <div id="register" ref="register" class="inside " @click.stop v-if="success != 'register'" :style="{display:type === 'register' ?  'block': 'none'}">
            <i class="iconfont close" @click.stop="close">&#xe6f0;</i>
            <div class="register-userImg-box">
                <img class="login-userImg" src="../../assets/images/user/@1xjinwumen.png" alt="">
                <div>
                    <img src="../../assets/images/user/@1xjiankanmao.png" alt=""><span>健康猫App用户可以直接登录喔</span>
                </div>
            </div>
            <div id="container" ref="register" v-if="type== 'register'"></div>
            <div class="register-btn-register">已有账号，
                <span @click="goNewPage('login')">马上登录。</span>
            </div>
        </div>
        <div class="inside" @click.stop v-else>
            <i class="iconfont close" @click.stop="close">&#xe6f0;</i>
            <div class="success">
                <div class="inside-box">
                    <div>
                        <img src="../../assets/images/user/@1xjinwumen.png" alt="">
                        <p>恭喜</p>
                        <p>您已成功加入精武门MMA</p>
                        <p>倒计时{{second}}秒自动跳转到登录页面</p>
                        <div class="btn" @click.stop="goNewPage('login')">马上登录</div>
                    </div>
                </div>
            </div>
        </div>
        <!--注册页结束-->

        <!--忘记密码-->
        <div id="forget" class="inside " @click.stop v-if="success != 'forget'" :style="{display:type === 'forget' ?  'block': 'none'}">
            <i class="iconfont close" @click.stop="close">&#xe6f0;</i>
            <div class="forget-title">找回密码</div>
            <div id="container_forget" ref="forget" v-if="type== 'forget'"></div>
        </div>
        <div class="inside" @click.stop v-else>
            <i class="iconfont close" @click.stop="close">&#xe6f0;</i>
            <div class="success">
                <div class="forget-title">找回密码</div>
                <div class="inside-box">
                    <div>
                        <img src="../../assets/images/user/@1xcorrect.png" alt="">
                        <p>密码修改成功，请重新登录！</p>
                        <p></p>
                        <p>倒计时{{second}}秒后将自动跳转至登录页</p>
                        <div class="btn" @click.stop="loginSuccess">登录</div>
                    </div>
                </div>
            </div>
        </div>
        <!--忘记密码结束-->

        <!--登录页-->
        <div id="login" class="inside" @click.stop v-if="success != 'login'" :style="{display:type === 'login' ?  'block': 'none'}">
            <i class="iconfont close" @click.stop="close">&#xe6f0;</i>
            <div class="login-title">账号登录</div>
            <div class="login-userImg-box">
                <img class="login-userImg" src="../../assets/images/user/@1xjinwumen.png" alt="">
                <div>
                    <img src="../../assets/images/user/@1xjiankanmao.png" alt=""><span>健康猫App用户可以直接登录喔</span>
                </div>
            </div>
            <div id="container_login" v-if="type == 'login'"></div>
            <div class="login-btn-register">还没账号？
                <span @click="goNewPage('register')">立即注册>></span>
            </div>
        </div>
        <div class="inside" @click.stop v-else>
            <i class="iconfont close" @click.stop="close">&#xe6f0;</i>
            <div class="success">
                <div class="inside-box">
                    <div class="login-success-box">
                        <img :src="userInfo|defaultUser('photo')" alt="">
                        <p>欢迎 {{userInfo|defaultUser('nickName')}}回来～</p>
                        <p>开始我们的精武门MMA之旅吧！</p>
                        <div class="btn" @click.stop="loginSuccess">GO</div>
                    </div>
                </div>
            </div>
        </div>
        <!--登录页结束-->


    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "dailog",
        props: {
            showLogin: {
                type: Boolean,
                default:false
            },
            type: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                success:null,
                second: 5,
                timer:null
            }
        },
        computed:mapGetters(['userInfo']),
        watch: {
            type () {
                if(this.type) {
                    this.success = null
                    this.$nextTick(() => {
                        this[this.type]()
                    })

                }

            },
            success () {
                if(this.success === 'register'||this.success === 'forget'){
                this.timer = setInterval(() => {
                    --this.second
                     if(this.second <=0) {
                        this.second = 5
                        clearInterval(this.timer)
                        this.goNewPage('login')
                     }
                 },1000)
                }
            }
        },
        methods: {
            register () {
                pass.default.register({
                    container: document.getElementById('container'),
                    findPassword: false,
                    success: () => {
                        this.success = 'register'
                    }
                })
            },
            login() {
                pass.default.login({
                    container: document.getElementById('container_login'),
                    autocomplete: false,
                    verifyPlaceHolder: '请输入验证码',
                    remember: '下次自动登录',
                    accountLabel: '手机',
                    passwordLabel: '密码',
                    success: (data) => {
                        this.success = 'login'
                        // 登陆完成sdk会自动在cookie或者session留下token，vuex方法getUser获取到用户信息
                        this.$store.commit('SETUSERINFO',data)
                    },
                    forgetClick: () => {
                        this.$emit('methods', true, 'forget')
                    }
                })
            },
            forget () {
                pass.default.register({
                    container: document.getElementById('container_forget'),
                    findPassword: true,
                    success: () => {
                        this.success = 'forget'
                    }
                })
            },
            close () {
                this.$emit('close', false)
            },
            goNewPage (page) {
                clearInterval(this.timer)
                this.$emit('methods', true, page)
            },
            loginSuccess () {
                this.$emit('close', false)
            }
        }
    }
</script>

<style lang="scss" >
    #dailog{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
        .inside{
            background:url("../../assets/images/user/@1xditu1_.png");
            position: absolute;
            left: 50%;
            top: 50%;
            background-color: white;
            width: 378px;
            /*height: 494px;*/
            margin-top: -237px;
            margin-left: -189px;
            padding: 0 4px;
            padding-bottom: 20px;
            box-sizing: border-box;
            .login-success-box{
                img{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
            }
        }
        .close{
         cursor: pointer;
         position: absolute;
         right:18px;
         top: 18px;
         color: black;
         float: right;
         font-size: 16px;
         z-index: 9999;

        }
    }
    /*注册，忘记密码*/
    #register,
    #forget{
        .register-tip {
            font-size: 12px;
            img {
                height: 18px;
                width: 18px;
                position: relative;
                top: 4px;
                margin-right: 3px;
            }
        }

        p.register-tip {
            margin-left: 16px;
        }

        .register-info-wrapper{
            width: 100%;
            position: relative;
            box-sizing: border-box;
            label:not(:last-child)>span:nth-of-type(1):before{
                content:'*';
                color: red;
            }
            label {
                display: block;
                width: 100%;
                margin-bottom: 20px;
                line-height: 36px;
                zoom: 1;

                > span {
                    display: block;
                    float: left;
                    width: 22%;
                    text-align: right;
                    color: #171718;
                    letter-spacing: -0.51px;
                }

                > input, > div {
                    // display: block;
                    float: left;
                    width: 78%;
                    box-sizing: border-box;
                }

                > input {
                    background: #FFFFFF;
                    border: 1px solid #cecece;
                    border-radius: 1px;
                    margin-top: 5px;
                    height: 30px;
                    width: 228px;
                    outline: none;
                    display: block;
                    padding: 0;
                    float: left;
                    padding-left: 8px;
                    box-sizing: border-box;
                    margin-left: 10px;
                }
            }
            .register-verify-input{
                width: 150px;
            }
            #get_verify{
                cursor: pointer;
                margin-top: 6px;
                margin-left: 10px;
                display: inline-block;
                height: 28px;
                width: 68px;
                line-height: 28px;
                background: #838383;
                border-radius: 1px;
                text-align: center;
                font-size: 12px;
                color: #FFFFFF;
                letter-spacing: -0.51px;
            }
            input[type="submit"] {
                cursor: pointer;
                width:228px;
                background: url("../../assets/images/user/@1xanniudenglu.png") no-repeat 100% 100%;
                height: 42px;
                color: #ffffff;
                outline: none;
                border: none;
                font-size: 16px;
                margin: 0 auto;
                text-align: center;
                padding: 0;
            }

            label:after {
                content: "\0020";
                display: block;
                margin: 0;
                padding: 0;
                overflow: hidden;
                height: 0;
                width: 0;
                clear: both;
            }

        }
    }


    /*公共样式*/
    .login-userImg-box,
    .register-userImg-box{
        height:166px;
        .login-userImg{
            margin-top: 30px;
            margin-bottom: 20px;
            box-sizing: border-box;
        }
    }
    .register-error,
    .login-error {
        position: relative;
        font-size: 13px;
        color: red;
        text-align: left;
        padding-left: 110px;
        margin-top: 10px;
    }
    .svg-del{
        font-size: 14px;
        margin-top: 5px;
        position: absolute;
        left: 90px;
        top:-6px;

    }
    .register-btn-register,
    .login-btn-register{
        text-align: left;
        font-size: 12px;
        color: #838383;
        letter-spacing: -0.39px;
        padding-left: 90px;
        margin-top: 6px;
        span{
            cursor: pointer;
            color: #171718;
            letter-spacing: -0.39px;
            line-height: 17px;
        }
    }
    .forget-title,
    .login-title{
        text-align: center;
        height: 64px;
        font-size: 18px;
        color: #353536;
        letter-spacing: 0;
        padding-top: 24px;
        line-height: 40px;
        box-sizing: border-box;
        border-bottom:2px  solid #838383;
    }
     /*公共样式结束*/

    /*登陆*/
    #login{
       #login_wrapper {
            font-size: 13px;
            /*position: absolute;*/
            /*left: 0;*/
            /*top: 248px;*/
            #autocompletebox{
                position: absolute;
                width: 0;
                height: 0;
                input{
                    width: 0;
                    height: 0;
                }
            }
            .login-remember-wrapper {
                margin-bottom: 0;
            }

            .login-extra-wrapper {
                margin-top: 20px;
                text-align: right;

                a {
                    color:  #6c6c6c;
                    text-decoration: none;
                    margin-left: 10px;
                }

                a:hover {
                    color: #f40;
                }
            }

            label {
                display: block;
                width: 268px;
                position: relative;
                margin: 10px auto;
                height: 40px;
                .account-label,
                .password-label {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    display: block;
                    float: left;
                    text-align: center;
                    line-height: 40px;
                    font-size: 14px;
                    color: #353536;
                    letter-spacing: -0.51px;
                    font-weight: bold;
                }
                .login-password-show{
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    svg{
                        width: 20px;
                        height: 20px;
                        color: red;
                    }
                }
                .password-label {

                    background-repeat:no-repeat;
                    background-size: 60%;
                    background-position: 8px -154px;
                }

                .account-label {

                    background-repeat:no-repeat;
                    background-size: 60%;
                    background-position: 8px 8px;
                }
                .del {
                    background: url('../../assets/images/user/delete.png') no-repeat center;
                    background-size: 60%;
                    height: 24px;
                    width: 24px;
                    position: absolute;
                    right: 6px;
                    top: 8px;
                    display: none;
                    z-index: 999;
                }
                // 去除ie下input输入框自带的x 和眼睛
                input::-ms-clear{display:none;}
                input::-ms-reveal{display:none;}
                input[type="text"],
                input[type="password"] {
                    background: #FFFFFF;
                    border: 1px solid #cecece;
                    border-radius: 1px;
                    margin-top: 5px;
                    height: 30px;
                    width: 228px;
                    outline: none;
                    display: block;
                    padding: 0;
                    float: left;
                    padding-left: 8px;
                    box-sizing: border-box;
                }
                #login_verify{
                    display: inline-block;
                    width: 100px;
                    float: none;
                }

            }
           #login_verify_wrapper{
               width: 302px;
               .verify-label{
                   width: 57px;
                   height: 40px;
                   display: block;
                   float: left;
                   text-align: center;
                   line-height: 40px;
                   font-size: 14px;
                   color: #353536;
                   letter-spacing: -0.51px;
                   font-weight: bold;
               }
               input{
                   float: left;
                   width: 108px;
                   height: 30px;
                   background: #FFFFFF;
                   border: 1px solid #cecece;
                   border-radius: 1px;
               }
               img{
                   margin-top: 5px;
                   width: 50px;
                   height: 30px;
               }
               #login_verify_click{
                   margin-top: 5px;
                   display: inline-block;
                    width: 54px;
                    height: 30px;
                   line-height: 30px;
               }
           }

           .login-remember-wrapper{
            margin: 0;
            width: 266px;
            height: 20px;
            padding-left: 40px;
            box-sizing: border-box;
            #login_remember,
            span:nth-of-type(1){
                float: left;
            }
            #login_remember{
                margin-top: 3px;
            }
            #login_forget{
                float: right;
                cursor: pointer;
            }
        }
           .login-btn {
               cursor: pointer;
                width:228px;
                background: url("../../assets/images/user/@1xanniudenglu.png") no-repeat 100% 100%;
                height: 42px;
                color: #ffffff;
                outline: none;
                border: none;
                font-size: 16px;
                margin: 0 auto;
                margin-left: 34px;
            }
        }
    }
    /*登录成功页面*/
    .success{
            width: 378px;
            height: 324px;
        img{
            margin: 27px;
        }
        p:nth-of-type(1){
            font-size: 20px;
            color: #353536;
            letter-spacing: -0.98px;
            line-height: 30px;
        }
        p:nth-of-type(2){
            font-size: 16px;
            color: #171718;
            letter-spacing: -0.98px;
            line-height: 30px;
        }
        p:nth-of-type(3){
            font-size: 12px;
            color: #838383;
            letter-spacing: -0.39px;
        }
        .btn{
            cursor: pointer;
            width:228px;
            background: url("../../assets/images/user/@1xanniudenglu.png") no-repeat 100% 100%;
            height: 40px;
            color: #ffffff;
            outline: none;
            border: none;
            font-size: 16px;
            margin: 0 auto;
            line-height: 40px;
            margin-top: 40px;
        }

    }

</style>