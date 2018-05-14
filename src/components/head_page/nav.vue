<template>
    <div id="nav" class="nav">
        <div class="nav-top w"  v-show="isSelectNavShow">
        <!--<div class="nav-top w" >-->
          <img src="../../assets/images/@1xjwm.png" alt="精武门综合格斗职业联赛
" class="logo lf">
          <!--<h2 style="font-family:STSongti-SC-Black;">综合格斗职业联赛</h2>-->
          <ul>
            <li class="icon" >
              <a onclick="window.open('http://www.weibo.com/u/5904303661?topnav=1&wvr=6&topsug=1&is_hot=1')">
                <img :src="weiboIcon" alt="" >
              </a>
              <img src="../../assets/images/@1xweibo1.png" alt="" class="icon-img" >
            </li>
            <li class="icon" >
              <a >
                <img :src="weixinIcon" alt="">
              </a>
              <img src="../../assets/images/@1xweixin1.png" alt="" class="icon-img" >
            </li>
            <li>
              <a onclick="window.open('https://www.instagram.com/chinwoomenmma')">
              <img src="../../assets/images/@1xing.png" alt=""></a></li>
            <li>
              <a onclick="window.open('http://www.facebook.com/woomen.chin.3')">
                <img src="../../assets/images/@1xfacebook.png" alt="">
              </a>
            </li>
          </ul>
          <img src="../../assets/images/@1xchina.png" class="national-flag">
          <span class="lan">中文</span>
    </div>
        <div class="nav-center w">
        <!--<ul v-show="isSelectNavShow" class="nav-ul">-->
        <ul class="nav-ul">
          <router-link to="/home" activeClass="active" tag="li">
            <a href="javascript:;">
              <div>
                <p>首页</p>
              </div>
            </a>
          </router-link>
          <router-link to="/events" activeClass="active" tag="li">
            <a href="javascript:;">
              <div>
                <p>赛事</p>
              </div>
            </a>
          </router-link>
          <router-link to="/video" activeClass="active" tag="li">
            <a href="javascript:;">
              <div>
                <p>视频</p>
              </div>
            </a>
          </router-link>
          <router-link to="/players" activeClass="active" tag="li">
            <a href="javascript:;">
              <div>
                <p>选手</p>
              </div>
            </a>
          </router-link>
          <router-link to="/news" activeClass="active" tag="li">
            <a href="javascript:;">
              <div>
                <p>资讯</p>
              </div>
            </a>
          </router-link>
          <router-link to="/photo" activeClass="active" tag="li">
            <a href="javascript:;">
              <div>
                <p>图片</p>
              </div>
            </a>
          </router-link>
          <router-link to="/ticket" activeClass="active" tag="li">
            <a href="javascript:;">
              <div>
                <p>票务</p>
              </div>
            </a>
          </router-link>
          <router-link to="/jm_college" activeClass="active" tag="li">
            <a href="javascript:;">
              <div>
                <p>精武门百科</p>
              </div>
            </a>
          </router-link>
          <li  activeClass="active" >
            <a onclick="window.open('/training_center')">
              <div>
                <p>国际俱乐部</p>
              </div>
            </a>
          </li>
        </ul>
          <div  class="nav-input">
            <img src="../../assets/images/@1xsearch.png" alt="">
            <input type="text"  placeholder="搜索视频、资讯、图片" v-model="input_val" @keyup.enter="submit(input_val)" >
          </div>
          <div class="user" v-show="!userInfo">
            <a @click="goLogin">登录</a>
            <a @click="goRegister">注册</a>
          </div>
          <div class="user drop" v-show="userInfo">
            <img :src="userInfo|defaultUser('photo')" alt="">
            <span>{{name|getLengthPonitInside(10)}}</span>
            <ul class="dropdown-list">
              <li @click="goToUserInfo"><span>个人资料</span></li>
              <li @click="logOut"><span>退出</span></li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default{
  data () {
    return {
      userIcon:require('../../assets/images/icon/@1xgerenicon100.png'),
      weixinIcon: require('../../assets/images/@1xwatch.png'),
      weiboIcon: require('../../assets/images/@1xweibo.png'),
      isIconShowWx: false,
      isIconShow: false,
      input_val: '',
      userName: 'abcf'
    }
  },
  mounted(){
      // 当输入/user_info 刷新时是否要跳转
      setTimeout(()=> {
          if(!this.userInfo && (this.$route.path === '/user_info')){
              this.$router.push({path: '/home'})
          }
      },1000)

      // 设置刷新后搜索数据还存在
        var regex = /^\/home\/search\//g
        this.input_val = regex.test(this.$route.path) ? this.$route.params.id : this.input_val
  },
  computed: {
      ...mapGetters(['isSelectNavShow', 'information_arr','userInfo']),
      name () {
              if(!this.userInfo) return ''
              if(this.userInfo.name) return this.userInfo.name
              if(this.userInfo.nickName) return this.userInfo.nickName
      }
  },
  methods: {
    submit (inputVal) {
      function isNull (str) {
        if (str === '') return true
        var regu = '^[ ]+$'
        var re = new RegExp(regu)
        return re.test(str)
      }
        // 判断如果为空或者为空格
      if (isNull(inputVal) === true) {
        return
      }
      if (this.$route.matched[0].path !== '/home/search') {
        // 当搜索的值不等于之前的值的时候才清空，等于则不清空
        if(this.input_val !== this.$store.state.mutations.searchArr.searchData){
            this.$store.dispatch('clearSearchArr')
        }
      }
      this.information_arr.tags = [
        {
          href: '/home/search/' + encodeURIComponent(inputVal),
          title: '全部'
        },
        {
          href: '/home/search/newz/' + encodeURIComponent(inputVal),
          title: '资讯'
        },
        {
          href: '/home/search/photo/' + encodeURIComponent(inputVal),
          title: '图片'
        },
        {
          href: '/home/search/video/' + encodeURIComponent(inputVal),
          title: '视频'
        }
      ]
      this.$router.push({path: '/home/search/' + encodeURIComponent(inputVal)})
    },
    goToUserInfo () {
        this.$router.push({path: '/user_info'})
    },
    logOut () {
        this.$store.commit('LOGINOUT')
        this.$router.push({path:'/home'})
    },
    goRegister ( ) {
        this.$emit('register', true, 'register')
    },
    goLogin ( ) {
        this.$emit('login', true, 'login')
    }
}

}
</script>

<style lang="scss" scoped>
  .nav{
    height: 195px;
    /*background: url("../../assets/images/@1xtabsekuai.png") no-repeat 0 0;*/
    background-size: 100%;
    .nav-top{
      width: 1240px;
      height: 147px;
      position: relative;
      h2{
        position: absolute;
        left: 179px;
        top: 38px;
        font-size: 36px;
        color: #FFFFFF;
        letter-spacing: -0.14px;
      }
      //icon
      ul:first-of-type{
        position: absolute;
        right: 98px;
        top: 72px;
        li{
          float: left;
        }
        li+li{
          margin-left: 15px;
        }
      }
    }
    .nav-ul{
      position: absolute;
      bottom:0;
      left: 0;
      li{
        float: left;
        a{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 29px;
          height: 48px;
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: -0.39px;
          line-height: 20px;
          text-underline: none;
          text-decoration:none;
        }
      }
      li:hover{
        background-color: #3b3c3c;
      }
    }
    input{
      font-size: 12px;
      width: 479px;
      color: #979797;
      height: 60px;
      letter-spacing: -0.45px;
      background-color: transparent;
      border: 1px solid transparent;
    }
  }

  .nav-center{
    position: relative;
    bottom: 0;
    left: 0;
    height: 48px;
    .nav-right{
      cursor: pointer;
      width: 26px;
      height: 24px;
      position: absolute;
      right: 0;
      top: 11px;
      font-size: 12px;
      color: #FFFFFF;
      letter-spacing: -0.45px;
      img{
        margin-bottom: 5px;
      }
    }
    .nav-input{
      position: absolute;
      right:143px;
      bottom: 20px;
      width: 180px;
      height: 26px;
      background-color: white;
      border: 1px solid white;
      border-radius: 13px;
      img:nth-of-type(1){
        margin-top: 5px;
        margin-left: 5px;
        float: left;
      }
      input{
        color: black;
        width: 150px;
        height: 26px;
      }
    }
  }
  .logo{
    position: absolute;
    left: 0;
    top: 39px;
  }
  ul .active{
   background: url("../../assets/images/@1xsekuai1 copy 2.png") no-repeat 0 0;
   background-size: 100%;
  }
  .lan{
    letter-spacing: -0.65px;
    position: absolute;
    top: 72px;
    right: 0;
  }
  .national-flag {
    position: absolute;
    top: 73px;
    right:42px;
  }
  .icon{
    position: relative;
  }
  .icon:hover img{
    display: block;
  }
  .icon-img{
    display: none;
    position: absolute;
    left: -68px;
    top: 27px;
    z-index: 999;
  }
  .user{
    cursor: pointer;
    position: absolute;
    right:0px;
    bottom: 18px;
    width: 180px;
    height: 26px;
    text-align: right;
    a:nth-of-type(1){
      margin-right:20px;
    }
    img{
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    span{
      text-align: left;
      display: inline-block;
      width: 90px;
      height: 16px;
      font-size: 16px;
      color: #D0CFCF;
      letter-spacing: -0.59px;
    }
    .dropdown-list{
      display: none;
      position: absolute;
      right: 49px;
      bottom: -28px;
      border-radius: 5px;
      z-index: 50;
      &>li{
        border: 1px solid #d3d3d3;
        background-color: white;
        padding-left: 10px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: left;
        span{
          display: inline-block;
          color: #353536;
          letter-spacing: -0.45px;
          width: 110px;
          height: 40px;
        }
      }
      li:nth-of-type(1){
        span:nth-of-type(1){
          border-bottom: 1px solid #d3d3d3;
        }
      }
    }
  }
  .drop{
    bottom: -56px;
    height: 100px;
  }
  .drop:hover{
    ul{
      display: block;
    }
  }
  .drop li:hover{
      background-color: #EBEBEB;
  }
</style>
