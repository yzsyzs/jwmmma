<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <!--<guide-page v-if="isGuidePageShow" @changPageShow="changePageShow"></guide-page>-->
    <!--<Home v-if="!isGuidePageShow"></Home>-->
    <!--<Home></Home>-->
    <router-view></router-view>
  </div>
</template>

<script>
import loading from './components/loading/Loading.vue'
// 引导页
import guidePage from './components/guide_page/index.vue'
// MMA页
//import Home from './components/property_page/home.vue'
import {mapGetters} from 'vuex'
// import lockr from 'lockr'
export default {
  name: 'app',
  data () {
    return {
      // 开发阶段进入主页改成false，进入引导页改成true
      isGuidePageShow: true
    }
  },
  components: {
    guidePage,
//    Home,
    loading
  },
  computed: mapGetters(['loading']),
  methods: {
    // 改变父组件状态
    changePageShow (chang) {
      this.isGuidePageShow = chang
    }
  },
  mounted () {
    if (this.$route.path === '/home') {
      this.isGuidePageShow = true
    } else {
      this.isGuidePageShow = false
    }
//    if (this.$route.path === '/') {
//      this.$store.dispatch('changNavShow')
//    } else if (this.$route.path === '/training_center') {
//      this.$store.dispatch('changNavShow')
//    } else {
//        this.$store.commit('CHANGNAVSHOWTRUE')
//    }
  }
}
</script>

<style lang="scss">
#app {
  /*font-family:"KaiGenGothicSC-Light", 'Avenir',"Microsoft YaHei", Helvetica, Arial, sans-serif;*/
  font-family:'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:  #838383;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
@import "assets/css/bass.scss";
/*@import "../node_modules/animate.css";*/
</style>