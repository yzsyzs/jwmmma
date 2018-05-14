<template>
  <div class="video w white overflow">
    <!--视频-->
    <!--<div class="video-top" >-->
      <!--<div class="video-top-left">-->
        <!--<iframe src='http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=77a4ba9809e102a2148796a15c4d964c&tvId=485218900&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%' frameborder='0' width='100%' height='100%' allowfullscreen='true'></iframe>-->
      <!--</div>-->
      <!--<div class="video-top-right">-->
        <!--<video-information></video-information>-->
      <!--</div>-->
    <div class="news-top" v-if="isShowTopAdvertising">
      <a :href="fullUrl">
        <img :src="fullImg |smallImage(1240, 120)" alt="">
      </a>
    </div>
    <!--</div>-->
    <div class="clear out-box">
      <!--左边子router-->
      <information class="lf"></information>
      <div class="details-right rt">
        <!--俱乐部排名-->
        <!-- <club-rank class="events-margin rt"></club-rank> -->
        <!--选手排名-->
        <player-rank class="events-margin rt"></player-rank>
      </div>
    </div>
  </div>
</template>

<script>
  import Information from '../public/information.vue'
  import ClubRank from '../side_board/club_rank.vue'
  import PlayerRank from '../side_board/player_rank.vue'
  import VideoInformation from '../side_board/video_information.vue'
  import {mapGetters} from 'vuex'
  import {title} from 'src/base/title.js'
  export default{
    title: title + '视频',
    data () {
      return {
        arr: [
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: require('../../assets/images/@1xGroup Copy.png'),
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: require('../../assets/images/@1xGroup Copy.png'),
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          },
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: '',
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: '',
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          },
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: '',
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: '',
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          },
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: '',
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: '',
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          },
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: '',
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: '',
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          },
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: '',
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: '',
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          },
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: '',
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: '',
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          },
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: require('../../assets/images/@1xGroup Copy.png'),
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: require('../../assets/images/@1xGroup Copy.png'),
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          }
        ],
        // 广告api
        url: 'javascript:;',
        img: '',
        fullUrl: 'javascript:;',
        fullImg: '',
        isShowTopAdvertising: true,
        isShowAdvertising: true
      }
    },
    components: {
      Information,
      ClubRank,
      PlayerRank,
      VideoInformation
    },
    computed: mapGetters(['information_arr']),
    mounted () {
      this.information_arr.tags = [
      ]
      // tap栏
      this.$http.getDynamicTop(2).then(res => {
        res.data = res.data.reverse()
//        console.log(res.data)
        for (let key in res.data) {
          if (res.data[key].id === null) {
            res.data[key].id = ''
          }
          let tags = {href: '', title: ''}
          tags.href = '/video/' + res.data[key].id
          tags.title = res.data[key].name
          this.information_arr.tags.push(tags)
        }
      })
      // 广告横栏api 横栏传参数为奇数
      this.$http.getAdsense(13).then(res => {
        if (res.data) {
//        alert(1)
          if (res.data[0]) {
//          alert(2)
            if (res.data[0].infoAdsenseImages[0]) {
//            alert(3)
              this.fullUrl = res.data[0].infoAdsenseImages[0].url
              this.fullImg = res.data[0].infoAdsenseImages[0].imageUrl
            } else {
              this.isShowTopAdvertising = false
              console.error('res.data[0].infoAdsenseImages[0]无数据')
            }
          } else {
            this.isShowTopAdvertising = false
            console.error('res.data[0]无数据')
          }
        } else {
          this.isShowTopAdvertising = false
          console.error('res.data无数据')
        }
      })
    },
    methods: {
      jumpToRunk (index) {
//        alert(index)
        this.$router.push({path: 'runk_details'})
      },
      jumpToVideo (index) {
        // alert('video')
      }
    }
  }

</script>

<style lang="scss" scoped="">
  .video{
    padding-top: 23px;
  }
  .video-top-left{
    width: 810px;
    height: 477px;
    float: left;
  }

  .video-top-right{
    background: #050505;
    overflow: hidden;
    width: 378px;
    height: 100%;
    float: right;
  }
  .video-top{
    background: #050505;
    width: 1220px;
    height: 497px;
    margin: 26px 10px 20px 10px;
    padding: 10px;
    box-sizing: border-box;
  }
  .top_strip{
    background-image: url("../../assets/images/@1xRectangle 16.png");
    background-repeat: no-repeat;
    background-position: top;
    width: 130px;
    height: 47px;
    position: absolute;
    top:0;
    left: 50%;
    margin-left: -65px;
    font-size: 18px;
    color: #5D0202;
    letter-spacing: -0.59px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .arrow-parent{
    position: relative;
  }
  .arrow{
    position: absolute;
    left: 50px;
    top:-10px;
  }
  .out-box{
    padding: 25px 10px;
  }
  .events{
    position: relative;
    margin-top: 17px;
    margin-bottom:17px;
    padding-bottom: 188px;
  }


  .scroll-rank-left,
  .scroll-rank-right{
    p{
      margin: 10px 10px;
    }
  }
  .scroll-rank-left{
    text-align: left;
  }
  .scroll-rank-right{
    text-align: right;
  }


  //内容下边右侧
  .details-right{
    width: 380px;
  }

</style>
