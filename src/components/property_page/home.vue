<template>
  <div class="big" :style="{background: 'url(\''+backImage+'\') no-repeat 0 0 ', backgroundSize: auto}">

    <dailog-vue :showLogin="showLogin" :type="type" @close="register" @methods="register" ></dailog-vue>
    <!--seach-->
    <nav-component  @register="register"  @login="login"></nav-component>

    <div class="content clear overflow">
      <router-view @login="login"></router-view>
    </div>

    <about-us :arr='clubPartners'  v-show="isBottomShow"></about-us>

    <footer-page v-show="isBottomShow"></footer-page>

    <!--右侧浮动块-->
    <div class="return" v-show="isBottomShow">
      <div class="first"><a :href="'/ticket'">订票</a></div>
      <div class="second"><a :href="'/jm_college'">百科</a></div>
      <div class="third"><a href="#">回到置顶</a></div>
    </div>
    <!--search蒙板-->
    <div class="mask" v-show="!isSelectNavShow"></div>
  </div>

</template>

<script>
  import footerPage from '../footer_page/footerPage.vue'
  import aboutUs from '../footer_page/aboutUs.vue'
  import navComponent from '../head_page/nav.vue'
  import dailogVue from '../dailog/dailog.vue'
  import {mapGetters} from 'vuex'
  export default {
    asyncData({store, route}) {
        return store.dispatch('getClubPartners')
    },
    data () {
      return {
        backImage: require('../../assets/images/@1xditushouye.jpg'),
        isBottomShow: false,
        showLogin: false,
        auto: '100%',
        type:null

      }
    },
    components: {
      navComponent,
      footerPage,
      aboutUs,
      dailogVue
    },
    methods: {
        /**
         *
         * @param status 显示状态
         * @param type 登录、注册、忘记密码
         */
        register (status, type) {
            this.showLogin = status
            this.type = type
        },
        login (status,type) {
            this.type = type
            this.showLogin = status
        }
    },
    computed: mapGetters(['isSelectNavShow', 'isNavShow', 'clubPartners']),
    watch: {
      $route (to) {

        if (to.path === '/home') {
        } else {
          this.auto = '100%'
        }

        if (to.path === '/') {
          this.isBottomShow = false
        } else {
          this.isBottomShow = true
        }
      }
    },
    mounted () {
      // 设置首页背景图更换
      if (this.$route.path === '/home') {
      } else {
        this.auto = '100%'
      }
      // 设置引导页底部如果是引导页则隐藏，其他则显示
      if (this.$route.path === '/') {
        this.isBottomShow = false
      } else {
        this.isBottomShow = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    /*background-color: white;*/
    box-sizing: border-box;
  }

  .return {
    position: fixed;
    top: 629px;
    right: 0;
    div {
      margin-bottom: 10px;
      width: 40px;
      height: 40px;
      a {
        display: none;
        background-image: url("../../assets/images/@1xsekuai.png");
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: -0.53px;
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 1px;
        text-decoration: none;
        box-sizing: border-box;
      }
    }
    .first a {
      padding-top: 10px;
    }
    .second a {
      padding-top: 10px;
    }
    .third a {
      padding-top: 2px;
    }
    .first:hover {
      background: url("../../assets/images/@1xdingpiao.png") no-repeat;
    }
    .second:hover {
      background: url("../../assets/images/@1xGroup 2.png") no-repeat;
    }
    .third:hover {
      background: url("../../assets/images/@1xGroup.png") no-repeat;
    }

    .first {
      background: url("../../assets/images/@1xdingpiao.png") no-repeat;
    }
    .second {
      background: url("../../assets/images/@1xGroup.png") no-repeat;
    }
    .third {
      background: url("../../assets/images/@1xGroup 2.png") no-repeat;
    }
    div:hover a {
      display: block;
    }
  }

  .big {
    position: relative;
    background: url("../../assets/images/@1xditushouye.jpg") no-repeat 0 0 ;
    background-size: 100%;
  }

  .mask {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    height: calc(100% - 60px);
    background: rgba(0, 0, 0, 0.70);
    z-index: 999;
  }


</style>
