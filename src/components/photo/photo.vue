<template>
  <div class="news w white overflow">
      <div class="advertising-top" v-if="isShowTopAdvertising">
        <a :href="fullUrl">
          <img :src="fullImg |smallImage(1240, 120)" alt="">
        </a>
      </div>
    <div class="news-content">
      <div class="clear">
        <!--全部-->
        <information class="lf"></information>
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
  import {title} from 'src/base/title.js'
  export default{
    title: title + '图片',
    data () {
      return {
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
      HotVideo
    },
    computed: mapGetters(['information_arr']),
    mounted () {
      this.information_arr.tags = []
      // 广告api
      this.$http.getAdsense(9).then(res => {
        if (res.data) {
//        alert(1)
          if (res.data[0]) {
//          alert(2)
            if (res.data[0].infoAdsenseImages[0]) {
//            alert(3)
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
      this.$http.getAdsense(8).then(res => {
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
      // tap栏
      this.$http.getDynamicTop(1).then(res => {
        res.data = res.data.reverse()
//        console.log(res.data)
        for (let key in res.data) {
          if (res.data[key].id === null) {
            res.data[key].id = ''
          }
          let tags = {href: '', title: ''}
          tags.href = '/photo/' + res.data[key].id
          tags.title = res.data[key].name
          this.information_arr.tags.push(tags)
        }
      })
    }
  }

</script>

<style lang="scss" scoped="">
  .news{
  }
  .news-content{
    padding: 18px 10px;
    p:first-child,
    p:nth-child(2){
      text-align: left;
    }
    p:nth-child(2){
      font-size: 22px;
      color: #838383;
      letter-spacing: -0.83px;
      margin: 17px 0 15px 0;
    }
  }
  h1{
    text-align: left;
  }
  .details-right{
    width: 251px;
  }

</style>
