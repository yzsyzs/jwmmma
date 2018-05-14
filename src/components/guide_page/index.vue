<template>
  <!--通过js控制引导页高度-->
  <div class="guide" :style="{height:defaultHeight}">
    <!--大背图-->
    <div class="guide-img" alt="精武门综合格斗联赛">
      <!--游戏弹框-->
      <!--<div class="game-message" :style="{height:defaultHeight}"  v-if="isGameImageShow" @click.stop="closeGameImage">-->
        <!--<div class="game-message-img">-->
          <!--<img src="../../assets/images/@1xguanbi1.png" alt="" class="close" @click.stop="closeGameImage">-->
          <!--<img src="../../assets/images/@1xRectangle 4.jpg" alt="" @click.stop = 'jumpTogame' >-->
        <!--</div>-->
      <!--</div>-->
      <div :style="{height:imgHeight}" class="guide-font">
        <!--精武门-->
        <img  class="jwm" src="../../assets/images/@1xyingdaoyelogo.png" :style="{transform:'translate(-50%,-50%)'}" alt="精武门综合格斗职业联赛">
      </div>
      <!--中间ul块-->
      <div class="sel-center">
        <button class="btn-enter" @click="jumpToHome">进入官网|ENTER</button>
        <ul>
          <li><a @click="changPageShow" :href="'/events'"><span></span>赛事</a></li>
          <li><a @click="changPageShow" :href="'/video'"><span></span>视频</a></li>
          <li><a @click="changPageShow" :href="'/players'"><span></span>选手</a></li>
          <li><a @click="changPageShow" :href="'/news'"><span></span>资讯</a></li>
          <li><a @click="changPageShow" :href="'/photo'"><span></span>图片</a></li>
          <li><a @click="changPageShow" :href="'/ticket'"><span></span>票务</a></li>
          <li><a @click="changPageShow" :href="'/jm_college'"><span></span>精武门百科</a></li>
          <li><a @click="changPageShow" :href="'/training_center'"><span></span>国际俱乐部</a></li>
          <!--<li><a @click="closeGameImage"  ><span></span>精武游戏</a></li>-->
        </ul>
      </div>
      <div class="gaide-footer">
        <div class="w center">
          <ul>
            <li><a @click="changPageShow" :href="'/home'">首页</a><span>|</span></li>
            <li><a @click="changPageShow" :href="'/events'">赛事 </a><span>|</span></li>
            <li><a @click="changPageShow" :href="'/video'">视频</a><span>|</span></li>
            <li><a @click="changPageShow" :href="'/players'">选手</a><span>|</span></li>
            <li><a @click="changPageShow" :href="'/news'">资讯</a><span>|</span></li>
            <li><a @click="changPageShow" :href="'/photo'">图片</a><span>|</span></li>
            <li><a @click="changPageShow" :href="'/ticket'">票务</a><span>|</span></li>
            <li><a @click="changPageShow" :href="'/jm_college'">精武门百科</a><span>|</span></li>
            <li><a @click="changPageShow" :href="'/training_center'">国际俱乐部</a></li>
          </ul>

          <p class="company">
            广州市思成路19号宏太智慧谷8号楼601室
          </p>
          <p class="company-name">
            <!--广州市大象体育产业有限公司-->
          </p>
          <p class="address">
            广州市大象体育产业有限公司 版权所有,
            <a :href="'http://www.miitbeian.gov.cn'" target="_blank" rel="nofollow" class="address">粤ICP备17139192号</a>
          </p>
        </div>
      </div>
    </div>
    <!--<footer-page></footer-page>-->
  </div>
</template>

<script>
  import footerPage from '../footer_page/footerPage.vue'
  import lockr from 'lockr'
  export default {
    data () {
      return {
        defaultHeight: '',
        isGameImageShow: false,
        imgHeight: ''
      }
    },
    components: {
      footerPage
    },
    methods: {
      // 改变父组件状态
      changPageShow () {
        this.$emit('changPageShow', false)
        lockr.set('guidepage', true)
      },
      closeGameImage () {
        this.isGameImageShow = !this.isGameImageShow
      },
      jumpToHome () {
        this.$router.push({path: '/home'})
        // 导航栏显示
        this.$store.dispatch('changNavShow')
      }
    },
    mounted () {
      // 获得浏览器高度
      this.defaultHeight = document.body.clientHeight + 'px'
      this.imgHeight = document.body.clientHeight - 190 + 'px'
      window.onresize = () => {
        this.defaultHeight = document.body.clientHeight + 'px'
        this.imgHeight = document.body.clientHeight - 190 + 'px'
      }
      // 导航栏不显示
      this.$store.dispatch('changNavShow')
    }
  }
</script>

<style lang="scss" scoped>
  .game-message{
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    left: 0;
    right:0;
    width: 100%;
    z-index: 900
  }
  .guide-img {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/@bigBg.jpg") no-repeat center center;
    position: relative;
    background-size: 100% 100%;
  }
.guide-font{
  position: absolute;
  top: 0;
  width: 100%;
}
  .jwm{
    height: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    color: #ffffff;
    margin-top: -2%;
  }

  .guide-sel {
    width: 100%;
    height: 62px;
    background: #b81b08;
    position: absolute;
    bottom: 14px;
  }

  .sel-center {
    height: 159px;
    width: 100%;
    position: absolute;
    bottom: 110px;
    background: url("../../assets/images/@1xcaidangsekuai.png") no-repeat center;
    background-size: 100% 128px;
    z-index: 10;
    ul {
      display: flex;
      align-items:center;
      justify-content: center;
      width: 70%;
      margin: auto;
      text-align: center;
      height: 50px;
      line-height: 50px;
      padding-top: 18px;
      li {
        flex: 1;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        a {
          color: #ffffff;
          font-size: 16px;
          span {
            display: block;
            position: relative;
            top: 32px;
            height: 30px;
            width: 40px;
            margin: auto;
            margin-bottom: 20px;
          }
        }
      }
    }
  }

  .sel-center > ul > li:nth-child(1) span {
    background: url("../../assets/images/@1xquantao.png") no-repeat center center;
  }

  .sel-center > ul > li:nth-child(2) span {
    background: url("../../assets/images/@1xshipin.png") no-repeat center center;
  }

  .sel-center > ul > li:nth-child(3) span {
    background: url("../../assets/images/@1xjulebu.png") no-repeat center center;
  }

  .sel-center > ul > li:nth-child(4) span {
    background: url("../../assets/images/@1xnew.png") no-repeat center center;
  }

  .sel-center > ul > li:nth-child(5) span {
    background: url("../../assets/images/@1xphoto.png") no-repeat center center;
  }

  .sel-center > ul > li:nth-child(6) span {
    background: url("../../assets/images/@1xpiaowu.png") no-repeat center center;
  }

  .sel-center > ul > li:nth-child(7) span {
    background: url("../../assets/images/@1xxuetang.png") no-repeat center center;
  }
  .sel-center > ul > li:nth-child(8) span {
    background: url("../../assets/images/@1xxunlzhonx.png") no-repeat center center;
  }
  .sel-center > ul > li:nth-child(9) span {
    background: url("../../assets/images/@1xyouxi.png") no-repeat center center;
  }

.game-message-img{
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -180px;
  width: 600px;
  height: 360px;
}
.close{
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 999;
}
  .btn-enter {
    width: 206px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    position: absolute;
    left: 50%;
    top: 0px;
    margin-left: -103px;
    border: none;
    background: url("../../assets/images/@1xsekuaiyi.png") no-repeat center top;
    padding: 0;
    font-size: 16px;
    color: #ffffff;
    display: block;
  }

  .gaide-footer {
    position: absolute;
    bottom: 0;

    width: 100%;
    z-index: 9;
    height: 190px;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    box-sizing: border-box;
    border: 1px solid #000;
    background: url("../../assets/images/footer-bg.png") no-repeat center center;
    background-size: 100% 190px;
    .lan {
      letter-spacing: -0.65px;
      position: absolute;
      top: 80px;
      right: 0;
    }
    .national-flag {
      position: absolute;
      top: 80px;
      right: 42px;
    }
    .center {
      position: relative;
      height: 117px;
      box-sizing: border-box;
      padding-top: 80px;
    }
    ul {
      display: flex;
      justify-content: center;
      a, span {
        color: #FFFFFF;
      }
      li {
        float: left;
      }
      span {
        margin: 0 12px;
      }
    }
  }

  .company,
  .address {
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 24px;
  }

  .company {
    margin-top: 12px;
  }

</style>
