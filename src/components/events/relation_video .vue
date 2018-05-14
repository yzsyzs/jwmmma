<template>
  <div class="club-rank">
    <div class="top">
      <span>相关视频</span>
    </div>
    <!--子路由下面页-->
    <div class="content" v-if="eventsDetails.demand.length > 0">
      <div class="video">
        <div class="video-details-top" >
          <!--屏蔽视频开始-->
          <div class="no-video"></div>
          <!--屏蔽视频结束-->
          <div v-html="VideoUrl" v-if="isIframe" class="relation-video" ></div>
          <iframe height=498 width=510 :src='eventsDetailsVideoIndex.videoUrl' frameborder=0 allowfullscreen  v-else></iframe>
          <div class="video-details-bottom">
            <h3>{{eventsDetails.demand[eventsDetailsVideoIndex.index].title}}</h3>
            <p>{{eventsDetails.demand[eventsDetailsVideoIndex.index].details}}</p>
            <p class="right">来源: {{eventsDetails.demand[eventsDetailsVideoIndex.index].source}} &nbsp;&nbsp; &nbsp;&nbsp;发布时间: {{eventsDetails.demand[eventsDetailsVideoIndex.index].releaseTime | normalTime(2)}}</p>
            <!--<p class="right">来源: {{eventsDetails.demand[eventsDetailsVideoIndex.index].source}} 发布时间: {{eventsDetails.demand[eventsDetailsVideoIndex.index].releaseTime | normalTime(2)}}   时长：{{eventsDetails.demand[eventsDetailsVideoIndex.index].timeLong}}</p>-->
          </div>
        </div>
      </div>
      <p>赛事视频</p>
      <scroll-video class="lf"></scroll-video>
    </div>
    <div class="if-list-no-show" v-else>
      <img src="../../assets/images/@1xlogo111.png" alt="">
      <p>暂无相关视频...</p>
    </div>
  </div>
</template>

<script>
import ScrollVideo from './scroll_video.vue'
import {mapGetters} from 'vuex'
export default{
  data () {
    return {
      isIframe: true,
      arr: [
        {
          type: 1,
          icon: require('../../assets/images/@1xRectangle 20 Copy.png'),
          name: '搏击行业现状及未来发展解析',
          content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
          time: '6月27日 14:12'
        }
      ],
      VideoUrl: ''
    }
  },
  computed: mapGetters(['eventsDetails', 'eventsDetailsVideoIndex']),
  components: {
    ScrollVideo
  },
  mounted () {
      setTimeout(() => {
          if(this.eventsDetails){
              if(this.eventsDetails.demand.length > 0){
                  if(this.eventsDetails.demand[0]){
                      var reg = new RegExp('http://v.youku.com/v_show/id_([^.]*).html')
                      // console.log('视频url', this.videoDetails.url)
                      var url = this.eventsDetails.demand[0].url
                      // 方式一,最简单常用的方式 XMTg3ODY2NDMxMg==
                      // h5标签的
                      // var reph5 = url.replace(reg, 'http://player.youku.com/player.php/sid/$1/v.swf ')
                      // this.VideoUrlH5 = reph5
                      //判断传过来的是iframe标签还是网址链接
                      let getIframe = /^[ ]*<iframe/
                      this.isIframe = getIframe.test(url)
                      if(this.isIframe){
                          let replaceString = /'allowfullscreen'/
                          this.VideoUrl = url.replace(replaceString, '')
                      } else {
                          // iframe标签 http://player.youku.com/embed/XMjYxNDYwODM1Mg==
                          if(reg.test(url)){
                              this.VideoUrl = url.replace(reg, 'http://player.youku.com/embed/$1')
                          }
                      }
                  }
              }
          }
      }, 300)
  }
}

</script>

<style lang="scss" scoped>
  .club-rank {
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
    .top {
      height: 44px;
      background-color: #353536;
      span {
        width: 100px;
        display: inline-block;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.6px;
        background-image: url("../../assets/images/@1xsekuai1.png");
        float: left;
        line-height: 41px;
        padding-left: 13px;
        text-align: left;
        box-sizing: border-box;
      }
    }
    .video{
      margin-top: 20px;
      width: 820px;
    }
    .content{
      &>p{
        text-align:left;
        margin:20px 0 20px 0;
        font-size: 16px;
        color: #D90200;
        letter-spacing: -0.36px;
      }
    }
  }
  iframe{
    height: 504px;
    width: 820px;
  }
  .video-details-bottom{
    position: relative;
    background: #353536;
    border-radius: 1px;
    padding: 20px 20px 38px 20px;
    text-align: left;
    box-sizing: border-box;
    h3{
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      line-height: 30px;
    }
    p{
      font-size: 14px;
      letter-spacing: -0.6px;
      line-height: 30px;
      color: #838383;
    }
  }
  .right{
    bottom: 8px;
    right:20px;
    position: absolute;
    font-size: 12px;
    color: #353535;
    letter-spacing: -0.36px;
    line-height: 16px;
  }
  .if-list-no-show{
    margin: 160px auto;
    p{
      margin-top: 12px;
      font-size:16px;
      color: #838383;
    }
  }

  .corner-c{
    display: none !important;
    filter:alpha(opacity=0) !important;
    -moz-opacity:0 !important;
    -khtml-opacity: 0!important;
    opacity: 0!important;

  }
  .h5-ext-layer .inter_player_big{
    display: none !important;
    opacity: 0;
  }
  .video-details-top{
    position: relative;
  }

</style>
