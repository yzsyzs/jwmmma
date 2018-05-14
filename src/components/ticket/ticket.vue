<template>
  <div class="ticket w white overflow">
    <div class="advertising-top" v-if="isShowTopAdvertising">
      <a :href="fullUrl">
        <img :src="fullImg |smallImage(1240, 120)" alt=""/>
      </a>
    </div>
    <div class="news-content">
      <div class="clear out-box overflow">
        <!--全部-->
        <div class="news-details-content lf">
          <h3>{{ticketInfor.title}}</h3>
          <p class="news-details-content-time">{{ticketInfor.updateTime | normalTime(1)}}</p>
          <!--接收对方数据-->
          <div class="news-details-content-json" v-html="ticketInfor.details">
          </div>
        </div>
        <div class="details-right rt">
          <!--广告-->
          <div class="advertising rt" v-if="isShowAdvertising">
            <a :href="url"><img :src="img | smallImage(380, 231)" alt="" /></a>
          </div>
          <related-information :title='"赛事资讯"' :arr="inforList"></related-information>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RelatedInformation from '../side_board/related_information.vue'
  import Information from '../public/information.vue'
  import HotPictures from '../side_board/hot_pictures.vue'
  import HotNewz from '../side_board/hot_newz.vue'
  import {mapGetters} from 'vuex'
  import {title} from 'src/base/title.js'
  export default{
    title: title + '票务',
    data () {
      return {
        ticketInfor: {},
        inforList: [],
        adInfor: {},
        adInforSideBar: {},
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
      HotNewz,
      HotPictures,
      RelatedInformation
    },
    computed: mapGetters(['information_arr']),
    mounted () {
//      console.log(this.$route.query.id !== 'undefined')
      // console.log(this.$route.query.id && this.$route.query.id === '')
      // 获取赛事资讯列表
      this.$http.getCurrentSiteId().then((response) => {
        this.$http.getInfoListDefault({
          tagType: '03',
          tagValueId: response.data.id,
          start: 0,
          limit: 5
        }).then((response) => {
          this.inforList = response.data.data
        })
      })
      // 获取票务页面内容
      this.$http.getTicketMessage().then((response) => {
        this.ticketInfor = response.data
      })
      // 广告api
      this.$http.getAdsense(11).then(res => {
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
      // 广告横栏api 横栏传参数为奇数
      this.$http.getAdsense(10).then(res => {
        if (res.data) {
          if (res.data[0]) {
            if (res.data[0].infoAdsenseImages[0]) {
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
    }
  }

</script>

<style lang="scss" scoped="">
  .ticket {
  }

  .details-right {
    width: 380px;
  }

  .news-content {
    padding: 0 10px;
    .news-details-content {
      width: 820px;
      .news-details-content-time {
        margin: 15px 0;
      }
      .news-details-content-json {
        border-bottom: 1px solid #979797;
        text-align: left;

      }
      a {
        margin-top: 20px;
        font-size: 14px;
        color: #B5323A;
        letter-spacing: -0.38px;
      }
    }
    h3 {
      font-size: 20px;
      color: #353536;
      letter-spacing: -0.54px;
    }
    p {
      text-align: center;
    }
  }

  .out-box {
    margin: 17px 0 17px 0;
  }

  h1 {
    text-align: left;
  }


</style>
