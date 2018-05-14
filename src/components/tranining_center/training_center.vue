<template>
  <div class="trainingBox">
    <div class="training-header">
      <!--<span class="traing-logo"></span>-->
      <div @click="jumpToHome" class="top-title"><img src="../../assets/images/@1xjlb.png" alt=""></div>
    </div>
    <div class="top">
      <ul>
        <li :class="{currend:1 == type}" @click="changLi(1)"><a href="#">走进我们</a></li>
        <li :class="{currend:2 == type}" @click="changLi(2)"><a href="#we_idea">我们的理念</a></li>
        <li :class="{currend:3 == type}" @click="changLi(3)"><a href="#teachers">我们的团队</a></li>
        <li :class="{currend:4 == type}" @click="changLi(4)"><a href="#curriculum_provision">课程设置</a></li>
        <li :class="{currend:5 == type}" @click="changLi(5)"><a href="#about_we">联系我们</a></li>
      </ul>
      <div class="tel">
        <img src="../../assets/images/@1x电话.png" alt="">
        <span>020-89851146</span>
        <span>020-89850382</span>
      </div>
    </div>
    <div class="content">
      <div class="near-us">
        <p>走进我们</p>
        <p>
          精武门综合格斗国际俱乐部成立于2017年6月，是一家整合健康猫优势资源，以“精武门”综合格斗职业联赛为依托的综合格斗国际俱乐部。这里有最专业的综合格斗（MMA）训练场地和设施配备；这里有国际水平的MMA教练，和国家级MMA运动员。这里不仅是一家专业的MMA运动俱乐部，还是一个全面的MMA人才培养基地，更是一个国内顶尖的MMA人才输出平台。精武门综合格斗国际俱乐部将让您感受到专业MMA运动的魅力！</p>
        <div class="scroll-image">
          <scroll-image></scroll-image>
        </div>
      </div>
      <div class="we-idea" id="we_idea">
        <p>我们的理念</p>
        <div class="we-idea-bottom">
          <div>
            <img src="../../assets/images/@1xzhuangzhu.png" alt="">
            <p>专注</p>
            <p>专注发展MMA事业，打造高水平的专业MMA运动员、教练员、裁判员培养体系，提高国内MMA运动水平，为国内MMA人才提供高水准的输送平台</p>
          </div>
          <div>
            <img src="../../assets/images/@1xzhuanye.png" alt="">
            <p>专业</p>
            <p>专业的教练，专业的场地设施，专业的服务，我们为MMA爱好者提供全方位的MMA体验</p>
          </div>
          <div>
            <img src="../../assets/images/@1xzhuangcai.png" alt="">
            <p>专才</p>
            <p>专才专练，因材施教，科学训练，延长MMA运动员运动周期，全面提升MMA运动水平</p>
          </div>
        </div>
      </div>
      <div class="teachers" id="teachers">
        <p>我们的团队</p>
        <div class="teachers-bottom">
          <div class="manager-bg">
            <div class="left-image">
              <img src="../../assets/images/@1xshiweiwen.png" alt="">
              <div class="left-image-bottom">
                <p class="first-p">时维文</p>
                <p class="second-p">俱乐部总经理</p>
              </div>
            </div>
            <div class="right-image">
              <div class="overflow"><img src="../../assets/images/@1xsisekuai.png" alt=""></div>
              <div class="lf">
                <p>广州“武术交流”VS泰国职业泰拳冠军</p>
                <p>2007年全国体育院校武术散打比赛 70公斤（男子乙组）第二名</p>
                <p>2003年全国武术散打冠军赛第二名</p>
                <p>2000年全国武术散打锦标赛第四名</p>
              </div>
              <div class="rt">
                <p>粤港澳散打搏击拳王大赛香港“俊辉杯”65kg级冠军</p>
                <p>珠港澳散打搏击拳大赛65kg级冠军</p>
                <p>功夫王深圳擂台公开挑战赛第二名</p>
              </div>
              <div class="rt">
                <p><span>毕</span>业于广州体育学院武术系散打专业，国家一级运动员，国家二级裁判。
                  10岁进入菏泽市体校习武；1990年转入山东体校继续学习，期间获得武术散打青少年60公斤级冠军；1998-2001年到进入武汉体育学院学习深
                  造，期间获得全国散打武术冠军赛亚军；一直从事散打培训，2002年担任国家青少年搏击俱乐部教练；2007年在广东警官学院担任散打教师；
                  其后进入广州体育学院散打俱乐部担任教练员。</p>
              </div>
            </div>
          </div>
          <div class="coach-box">
            <div class="left-image">
              <img src="../../assets/images/@1xyuangcunbo.png" alt="">
              <div class="left-image-bottom">
                <p class="first-p">袁春波</p>
                <p class="second-p">教练</p>
              </div>
            </div>
            <div class="right-image">
              <div class="overflow"><img src="../../assets/images/@1xsisekuai.png" alt=""></div>
              <div class="lf">
                <p>2012年 降伏巴西柔术黑带冠军</p>
                <p>24战，15胜，12次降服对手</p>
                <p>2016年 MMA世界锦标赛第三名</p>
              </div>
              <div class="rt">
              </div>
              <div class="rt">
                <p><span>MMA</span>国家队队员、国际MMA教练、国家一级
                  裁判、跆拳道黑带三段；从小进入武校学习武术，
                  2009年正式成为MMA职业运动员，师从MMA“
                  不老传奇”姜龙云老师。</p>
              </div>
            </div>
          </div>
          <div class="coach-box" style="margin-left: 20px">
            <div class="left-image">
              <img src="../../assets/images/@1xpingan.png" alt="">
              <div class="left-image-bottom">
                <p class="first-p fs16">Raphael Rodrigues(平安）</p>
                <p class="second-p">教练 &nbsp;&nbsp;&nbsp;巴西</p>
              </div>
            </div>
            <div class="right-image">
              <div class="overflow"><img src="../../assets/images/@1xsisekuai.png" alt=""></div>
              <div class="lf">
                <p>柔术链：Mitsuyo Maeda＞Luis Franca＞</p>
                <p>Oswaldo Fadda＞Andre Viana＞Raphael Rodrigues</p>
                <p>巴西柔术黑带</p>
              </div>
              <div class="rt">
              </div>
              <div class="margin-top-div rt">
                <p><span>R</span>aphael于上世纪80年代末开始练习巴西柔术，至今将近30年，多次在国际大赛中获得奖牌，已有数百名学员先后跟随Raphael 学习柔术，具有丰富的教学经验，其技术风格舍弃华丽，崇尚简朴实用，以降服技术见长，其教授的学员多次在全国性以及国际性赛事中取得优异成绩。</p>
              </div>
            </div>
          </div>
          <div class="coach-box">
            <div class="left-image">
              <img src="../../assets/images/@1xkunkun.png" alt="">
              <div class="left-image-bottom p-top">
                <p class="first-p fs14">Komsan Hanchana(坤神-韩胜纳）</p>
                <p class="first-p fs14">别名：天煞克星</p>
                <p class="second-p">教练 &nbsp;&nbsp;&nbsp;泰国</p>
              </div>
            </div>
            <div class="right-image">
              <div class="overflow">
                <img src="../../assets/images/@1xsisekuai.png" alt="">
              </div>
              <div class="lf">
                <p>职业泰拳赛75战，55胜，21次KO对手，获1条金腰带。</p>
              </div>
              <div class="rt">
              </div>
              <div class="rt">
                <p>
                  <span>擅</span>
                  长泰拳、MMA，拥有丰富的职业泰拳比赛经验，在昆明诺亚金洲国际泰拳俱乐部、广州泰拳武术俱乐部等俱乐部担任过教练。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="curriculum-provision" id="curriculum_provision">
        <p>课程设置</p>
        <div></div>
        <!--<p>同时招收自训会员和私教会员等</p>-->
      </div>
      <div class="about-we" id="about_we">
        <div>
          <p>联系我们</p>
          <div class="clear"></div>
          <p class="contentDetails">广东省广州市天河区广东奥林匹克体育中心南门第七区奥腾科学训练中心四楼</p>
          <p class="contentDetails">周一至周六9:00-21:00</p>
          <p class="contentDetails">020-89851146；020-89850382</p>
          <div class="qrCode">
            <div class="firstQrCode">
              <img src="../../assets/images/@1xweixin.png" alt="">
              <p>微信扫一扫&nbsp;关注我们</p>
            </div>
            <div class="secondQrCode">
              <a href="https://weibo.com/u/6367448022">
                <img src="../../assets/images/@1xweibo2.png" alt="">
                <p>微博扫一扫&nbsp;关注我们</p>
              </a>
            </div>
          </div>
        </div>
        <div class="map" id="mapContainer">
        </div>
        <div class="address">
          <p class="contentDetails">路线指引：</p>
          <p class="contentDetails">
            (1)驾车前往：如选择自驾，可驾车直达广东奥林匹克体育中心停车场，停车后步行约3分钟即到。
          </p>
          <p class="contentDetails">
            (2)公交前往：如选择搭乘公交的方式到达，可搭乘以下公交线路，于奥林匹克中心北门公交站下车：902路、903路、497路、B4路、B26路、564路、564A路、548路，下车后步行约800米（5分钟）即到。
          </p>
          <p class="contentDetails">
            (3)地铁前往：如选择搭乘地铁的方式到达，可搭乘地铁4号线，黄村站，D出口，马路对面（步行2分钟）即到。
          </p>
        </div>
      </div>
    </div>
    <about-us :arr='clubPartners'></about-us>
    <footer-page></footer-page>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ScrollImage from './scroll_image.vue'
  import AboutUs from '../footer_page/aboutUs.vue'
  import FooterPage from '../footer_page/footerPage.vue'
  import {title} from 'src/base/title.js'
  export default {
    title: title + '国际俱乐部',
    asyncData({store, route}) {
        return store.dispatch('getClubPartners')
    },
    data () {
      return {
        type: 1
      }
    },
    components: {
      ScrollImage,
      AboutUs,
      FooterPage
    },
    computed: mapGetters(['clubPartners']),
    mounted () {
      this.$store.dispatch('changNavShow')
      this.initBMap()
      window.addEventListener('scroll', this.fixedNav)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.fixedNav)
    },
    methods: {
//    控制导航条的位置
      fixedNav () {
        let scrollTop = 0
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop
        } else if (document.body) {
          scrollTop = document.body.scrollTop
        }
        let _nav = document.querySelector('.top')
        // console.log(scrollTop)
        if (scrollTop >= 256) {
          _nav.style.position = 'fixed'
          _nav.style.top = '0px'
        } else {
          _nav.style.position = 'absolute'
          _nav.style.top = '256px'
        }
      },
      changLi (index) {
        this.type = index
      },
      initBMap () {
        // 百度地图API功能
        var map = new BMap.Map('mapContainer')  // 创建Map实例
        var point = new BMap.Point(113.415988, 23.140149)
        map.centerAndZoom(point, 19) // 初始化地图,设置中心点坐标和地图级别
//        map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
        map.setCurrentCity('广州')
        map.enableScrollWheelZoom(true)
        var mk = new BMap.Marker(point)
        map.addOverlay(mk)
        map.panTo(point)
      },
      jumpToHome () {
        this.$router.push({'path': '/home'})
        this.$store.dispatch('changNavShow')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .anchorBL {
    display: none
  }

  .training-header {
    position: absolute;
    left: 50%;
    width: 1240px;
    margin-left: -620px;
    height: 256px;
  }

  .traing-logo {
    display: inline-block;
    height: 66px;
    width: 152px;
    background: url("../../assets/images/training-logo.png") no-repeat center;
    position: absolute;
    left: 0;
    top: 100px;
  }

  .trainingBox {
    position: relative;
    background: url("../../assets/images/@1xditushouye.jpg") no-repeat;
    background-size: 100% 896px;
  }

  .top-title {
    cursor: pointer;
    position: absolute;
    bottom: 34px;
    left: 50%;
    margin-left: -272px;
    line-height: 56px;
    width: 545px;
    font-size: 40px;
    color: #FFFFFF;
    letter-spacing: -1.12px;
  }

  @mixin first-p {
    & > p:first-of-type {
      font-size: 40px;
      color: #353536;
      letter-spacing: -1.2px;
      line-height: 56px;
    }
  }

  .top {
    position: absolute;
    top: 256px;
    left: 50%;
    margin-left: -620px;
    width: 1240px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
    z-index: 999;
    .tel{
      font-size: 16px;
      color: #979797;
      letter-spacing: 0;
      float: right;
      img{
        margin-bottom: 10px;
        margin-right: 19px;
      }
      span{
        margin-right: 45px;
      }
    }
    a {
      box-sizing: border-box;
      display: block;
      padding: 0 20px;
      width: 100%;
      height: 100%;
      font-size: 16px;
      color: #979797;
      letter-spacing: -0.6px;
      text-decoration: none;
    }
    li {
      float: left;
      background-size: 100% 100%;
    }
    .currend {
      a {
        color: #FFFFFF
      }
    ;
      background-image: url("../../assets/images/@1xsekuai11.png");
    }
  }

  .content {
    padding: 300px 10px 10px 10px;
    /*background-color: #ffffff;*/
    .near-us {
      width: 1240px;
      background: #ffffff;
      margin: auto;
      padding-bottom: 68px;
      @include first-p;
      p:nth-of-type(1) {
        padding-top: 19px;
        line-height: 56px;
      }
      & > p:nth-of-type(2) {
        text-align: center;
        font-size: 16px;
        letter-spacing: -0.6px;
        line-height: 30px;
        color: #353536;
        width: 801px;
        margin: 17px auto;
      }
    }
  }

  /*.content>div:nth-child(1){
    background: #ffffff;
    width: 1240px;
    margin: auto;
    padding: 0;
  }*/

  .scroll-image {
    width: 1150px;
    height: 280px;
    margin: auto;
  }

  .we-idea {
    position: relative;
    width: 1240px;
    height: 594px;
    margin: auto;
    background: #ffffff;
    @include first-p;
    p:nth-of-type(1) {
      padding-bottom: 18px;
    }
    .we-idea-bottom {
      /*position: absolute;*/
      display: flex;
      justify-content: space-between;
      left: 0;
      bottom: 0;
      height: 520px;
      width: 1150px;
      margin: auto;
      div {
        height: 100%;
        width: 320px;
        img {
          width: 320px;
          height: 320px;
        }
        p:first-of-type {
          font-size: 28px;
          color: #353536;
          letter-spacing: -0.84px;
          margin: 20px 0;
        }
        p:nth-of-type(2) {
          padding: 0 10px;
          font-size: 16px;
          color: #353536;
          letter-spacing: -0.6px;
          line-height: 30px;
          text-align: left;
        }
      }
    }
  }

  .coach-box {
    width: 564px;
    float: left;
    /*margin-left: 13px;*/
    background: url('../../assets/images/coach-bg.png') no-repeat;
    background-size: 564px 100%;
  }

  .teachers {
    box-sizing: border-box;
    width: 1240px;
    height: 1118px;
    margin: 68px auto 0;
    @include first-p;
    .teachers-bottom {
      width: 1148px;
      margin: 47px auto 0;
      & > div:first-of-type {
        height: 373px;
      }
    }
    .left-image {
      width: 230px;
      height: 100%;
      float: left;
      /*margin-left: 11px;*/
      img {
        width: 230px;
        height: 250px;
        box-sizing: border-box;
        margin-bottom: 10px;
      }
    }
    .right-image {
      padding: 0 16px;
      width: 903px;
      /*margin-left: 15px;*/
      height: 100%;
      float: left;
      box-sizing: border-box;
      font-size: 16px;
      color: #353536;
      letter-spacing: -0.6px;
      line-height: 30px;
      padding-top: 14px;
      div {
        p {
          text-align: left;
        }
      }
      img {
        float: right;
        overflow: hidden;
      }
      div:nth-of-type(4) {
        margin-top: 20px;
        font-size: 14px;
        color: #171718;
        letter-spacing: -0.35px;
        line-height: 24px;
        span {
          font-size: 20px;
        }
      }
      div:nth-of-type(4).margin-top-div{
        margin-top: 0px;
      }
    }
    .manager-bg {
      background: url("../../assets/images/manager-bg.png");
      background-size: 100% 373px;
      position: relative;
    }
    .left-image-bottom {
      width: 230px;
      height: 76px;
      background: url("../../assets/images/@1xsekuai12.png");
      padding-top: 5px;
    }
    .p-top{
      padding-top: 2px;
    }
    //共总
    .first-p {
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: -0.9px;
      line-height: 32px;
      margin-left: 19px;
      text-align: left;

    }
    .fs14{
      line-height: 18px;
      font-size: 14px;
    }
    .fs16{
      font-size: 16px;
    }
    .second-p {
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: -0.9px;
      line-height: 32px;
      margin-left: 19px;
      text-align: left;
    }
    .teachers-bottom {
      & > div:not(:first-child) {
        margin-top: 29px;
        .left-image {
          width: 230px;
        }
        .right-image {
          width: 334px;
          padding-right: 10px;
        }
        .left-image-bottom {
          width: 230px;
        }
      }
    }
  }

  .curriculum-provision {
    @include first-p;
    margin-top: 127px;
    & > div {
      margin: 39px auto 0;
      width: 1240px;
      height: 810px;
      background: url("../../assets/images/@1xkechengshezhi.jpg") no-repeat center;
      background-size: 1240px 100%;
    }
    p {
      font-size: 16px;
      color: #353536;
      letter-spacing: -0.84px;
      line-height: 34px;
    }
  }

  .about-we {
    margin: 74px auto 0;
    background: url("../../assets/images/manager-bg.png");
    background-size: 100% 100%;
    width: 1240px;
    height: 550px;
    & > div:first-child {
      float: left;
      padding: 29px 0 0 27px;
      p {
        text-align: left;
      }
      & > p:first-of-type {
        width: 517px;
        height: 100%;
        font-size: 40px;
        color: #353536;
        letter-spacing: -1.2px;
        margin-bottom: 20px;
      }
    }
    & > div:nth-of-type(2) {
      float: right;
      width: 523px;
      height: 338px;
      margin: 20px 20px 20px 0;
      background-image: url("../../assets/images/@1xditu.png");
    }
  }
  //二维码图标
  .qrCode{
    margin-top: 20px;
    div{
      float: left;
      p{
        font-size: 12px;
        color: #EA354C;
        line-height: 11px;
        margin-top: 10px;
        margin-left: 6px;
      }
    }
    .secondQrCode{
      margin-left: 20px;
      a{
        text-decoration: none;
      }
    }
  }
  .address{
    padding: 0 27px;
    text-align: left;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }
  .contentDetails{
    font-size: 16px;
    color: #1A1A1A;
    letter-spacing: 0;
    line-height: 26px;
  }
</style>
