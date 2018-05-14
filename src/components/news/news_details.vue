<template>
  <div class="news-details w white overflow">
    <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;资讯&nbsp;&nbsp;>&nbsp;&nbsp;资讯详情</p>
    <div class="news-content">
      <div class="clear out-box overflow">
        <!--全部-->
        <div class="news-details-content lf">
          <h3>{{newsDetails.title}}</h3>
          <p class="news-details-content-time">{{newsDetails.releaseTime | normalTime(1) }}</p>
          <!--接收对方数据-->
          <div class="news-details-content-json" v-html="newsDetails.details"></div>
          <a class="previous" v-if="newsDetails.lastNews.title !== null" @click = jumpToNewsDetails(newsDetails.lastNews.id)>上一篇：{{newsDetails.lastNews.title|getLengthPonit(0,23)}}</a><a class="next" v-if="newsDetails.firstNews.title  !== null" @click = jumpToNewsDetails(newsDetails.firstNews.id)>下一篇：{{newsDetails.firstNews.title|getLengthPonit(0,23) }}</a>
        </div>
        <div class="details-right rt">
          <!--广告-->
          <div class="advertising rt" v-if="isShowAdvertising">
            <a :href="url">
              <img :src="img | smallImage(380, 231)" alt="">
            </a>
          </div>
          <!--热点新闻-->
          <hot-newz class="rt"></hot-newz>
          <!--热门图集-->
          <hot-pictures class="rt"></hot-pictures>
          <!--热门视频-->
          <hot-video class="rt"></hot-video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Information from '../public/information.vue'
  import HotPictures from '../side_board/hot_pictures.vue'
  import HotNewz from '../side_board/hot_newz.vue'
  import HotVideo from '../side_board/hot_video.vue'
  import {mapGetters} from 'vuex'
  export default{
   title () {
       return this.newsDetails.title
   },
    asyncData({store, route}) {
//        console.log(route)
        return store.dispatch('jumpToNewsDetails', route.params.index)
    },
    data () {
      return {
        // 广告api
        url: 'javascript:;',
        img: '',
        fullUrl: 'javascript:;',
        fullImg: '',
        isShowAdvertising: true,
        arr: {
          title: '',
          lastNews: {
              title: ''
          },
          firstNews: {
              title: ''
          }
        }
      }
    },
    components: {
      Information,
      HotNewz,
      HotPictures,
      HotVideo
    },
    computed: mapGetters(['information_arr', 'newsDetails']),
    methods: {
      jumpToNewsDetails (id) {
        window.scrollTo(0, 0)
        this.$store.dispatch('jumpToNewsDetails', id).then(()=>{
            document.title = this.newsDetails.title
        })
        this.$router.push({'path': '/news/chang/news_details/' + id})

      }
    },
    mounted () {
      setTimeout(() => {
        console.log('详情数据mounted', this.newsDetails)
      }, 1000)
        // 广告api
      this.$http.getAdsense(3).then(res => {
        if (res.data) {
          if (res.data[0]) {
            if (res.data[0].infoAdsenseImages[0]) {
              this.url = res.data[0].infoAdsenseImages[0].url
              this.img = res.data[0].infoAdsenseImages[0].imageUrl
            } else {
              this.isShowAdvertising = false
            }
          } else {
            this.isShowAdvertising = false
          }
        } else {
          this.isShowAdvertising = false
        }
      })
    }
  }

</script>

<style lang="scss" scoped="">
  .news-details{
    padding: 18px 10px;
    p:first-child{
      text-align: left;
    }
  }
  .news-content{
    .news-details-content{
      width: 820px;
      overflow: hidden;
      .news-details-content-time{
        margin: 15px 0;
      }
      .news-details-content-json{
        border-bottom: 1px solid #979797;
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.43px;
        line-height: 30px;
        text-align: left;
      }
      a{
        margin-top: 20px;
        font-size: 14px;
        color: #B5323A;
        letter-spacing: -0.38px;
      }
      .previous{
        float: left;
      }
      .next{
        float: right;
      }
    }
    h3{
      font-size: 20px;
      color: #353536;
      letter-spacing: -0.54px;
    }
    p{
      text-align: center;
    }
  }
  .out-box{
    margin: 17px 0 17px 0;
  }
  .news-top{
    height: 120px;
    background: url("../../assets/images/@1xnwes.png") no-repeat 0 0;
  }
  h1{
    text-align: left;
  }
  .details-right{
    width: 251px;
  }
  //广告位
  .advertising{
    width: 380px;
    height: 231px;
    background-image: url("../../assets/images/@1xRectangle 9.png");
    margin-bottom: 20px;
    a{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }

    }
  }

</style>
