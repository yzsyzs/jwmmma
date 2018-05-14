<template>
    <div class="user-info  w white overflow" id="user_info">
        <div class="user-inside" >
            <div class="user-left">
                <div class="user-head">
                    <img :src="userInfo|defaultUser('photo')" alt="">
                     <p>{{name}}</p>
                     <p>{{userInfo|defaultUser('phone')}}</p>
                </div>
                <ul class="user-ul">
                    <li @click="allUserInfo"  :class="{current:index === 'userInfo'}">个人信息</li>
                    <li @click="changPassWord" :class="{current:index === 'changPassWord'}">修改密码</li>
                </ul>
            </div>
            <div class="user-right" v-show="index === 'userInfo'">
                <p>用户信息</p>
                <ul class="info">
                    <li>
                        <span>头像</span>
                        <img class="user-big-img" :src="userInfo|defaultUser('photo')" alt="">
                    </li>
                    <li>
                        <span>昵称</span>
                        <span>{{userInfo|defaultUser('nickName')}}</span>
                    </li>
                    <li>
                        <span>性别</span>
                        <span v-if="noSex">{{userInfo|defaultUser('sex')}}</span>
                        <span class="no-message" v-else >暂无</span>
                    </li>
                    <li>
                        <span>年龄</span>
                        <span v-if="noAge">{{userInfo|defaultUser('age')}}</span>
                        <span class="no-message" v-else >暂无</span>
                    </li>
                    <li>
                        <span>简介</span>
                        <span  v-if="noMessage">{{userInfo|defaultUser('description')}}</span>
                        <span class="no-message" v-else>暂无简介</span>
                    </li>
                </ul>
            </div>
            <div class="user-right" v-show="index === 'changPassWord'" >
                <p>修改密码</p>
                <div id="containter"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    //userInfo|defaultUser('nickName')
    export default {
        name: "user-info",
        data(){
            return {
                userIcon:require('../../assets/images/icon/@1xgerenicon100.png'),
                index: 'userInfo',
            }
        },
        mounted (){
            this.asyncGetData()
        },
        computed: {
            ...mapGetters(['userInfo']),
            noMessage () {
                // console.log('里面的description')
                if(!this.userInfo) return false
                return this.userInfo.description
            },
            noAge () {
                if(!this.userInfo) return false
                return this.userInfo.age
            },
            noSex () {
                if(!this.userInfo) return false
                return this.userInfo.sex
            },

            name () {
                if(!this.userInfo) return ''
                if(this.userInfo.name) return this.userInfo.name
                if(this.userInfo.nickName) return this.userInfo.nickName
            }
        },
        methods: {
            getPhone () {
                if(!this.userInfo) return false
                return this.userInfo.phone
            },
            allUserInfo () {
                this.index = 'userInfo'
            },
            changPassWord () {
                this.index = 'changPassWord'
            },
            // 解决刷新下无电话号码问题
            asyncGetData () {
                 if (this.userInfo) {
                     this.defaultChangPassWord()
                } else {
                     setTimeout(() => {
                         this.defaultChangPassWord()
                     },1000)
                 }
            },
            defaultChangPassWord () {
                pass.default.register({
                    container: document.getElementById('containter'),
                    findPassword: true,
                    countValue: this.getPhone(),
                    success: (v) => {
                        this.$dailog({
                            type:'success',
                            text:'恭喜您，密码重置成功！请牢记您新设置的密码。'
                        })
                        this.$store.commit('LOGINOUT')
                        this.$router.push({path:'/home'})
                        this.$emit('login', true, 'login')
                        // this.defaultChangPassWord()
                    }
                })
            }
        }
    }
</script>

<style lang="scss" >
    #user_info{
        padding-top: 40px;
        height: 823px;
        .user-inside{
            width: 960px;
            height: 474px;
            margin: 0 auto;
        }
        .user-left{
            float: left;
            width: 300px;
            height: 474px;
        }
        .user-right{
            float: right;
            width: 640px;
            height: 474px;
            background-color: #f2f2f2;
            box-sizing: border-box;
            padding: 25px  22px;
            &>p{
                text-align: left;
                font-size: 18px;
                color: #353536;
                letter-spacing: -0.41px;
            }
        }
        .user-head{
            box-sizing: border-box;
            width: 300px;
            height: 100px;
            padding: 20px;
            margin-bottom: 20px;
            background-color: #f2f2f2;
            img{
                width: 60px;
                height: 60px;
                float: left;
                border-radius: 50%;
            }
            p{
                line-height: 30px;
                padding-left: 80px;
                text-align: left;
            }
            p:nth-of-type(1){
                font-size: 18px;
                color: black;
                letter-spacing: -0.45px;
                line-height: 30px;
                font-weight: bold;
            }
            p:nth-of-type(2){
                font-size: 16px;
                color: #353535;
                letter-spacing: -0.45px;
                line-height: 30px;
            }
        }
        .user-ul{
            width: 100%;
            li{
                cursor: pointer;
                box-sizing: border-box;
                background-color: #f2f2f2;
                height: 50px;
                width: 100%;
                font-size: 16px;;
                letter-spacing: -0.36px;
                line-height: 50px;
                text-align: left;
                padding-left: 20px;
                color: #838383;
            }
            .current,
            li:hover{
                color: #0b0b0b;
            }
        }

        /*注册，忘记密码*/
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
        .register-error{
            position: relative;
            font-size: 13px;
            color: red;
            text-align: left;
            padding-left: 162px;
            margin-top: 10px;
        }
        .svg-del{
            font-size: 14px;
            margin-top: 5px;
            position: absolute;
            left: 138px;
            top:-6px;

        }
        .info{
            li:nth-of-type(1){
                text-align: left;
                margin-bottom: 30px;
                .user-big-img{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
                span{
                    line-height: 100px;
                    margin-right: 100px;
                }
            }
            li+li{
                height: 46px;
                text-align: left;
                span:nth-of-type(1){
                    margin-right: 100px;
                }
                span+span{
                    font-size: 16px;
                    color: #000000;
                    letter-spacing: 0;
                    line-height: 16px;
                }
                .no-message{
                    font-size: 16px;
                    color: #D4CFCF;
                    letter-spacing: 0;
                    line-height: 16px;
                }
            }
            span:nth-of-type(1){
                font-size: 16px;
                color: #838383;
                letter-spacing: -0.45px;
            }
            img{
                width: 100px;
                height: 100px;
            }
        }
    }


</style>