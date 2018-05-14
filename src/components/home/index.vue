<template>
    <div class="home w" style="background-color: inherit">
      <!--banner-->
      <div class="banner overflow clear">
        <!--scroll view-->
        <slide-show :slides="slide_show" :inv="invTime"  class="overflow"></slide-show>
        <!--banner-right-->
        <div class="banner-right">
           <div class="banner-right-top">
             <banner-right-top
                     :matchIcon="indexInfoNews.matchIcon"
                     :matchName="indexInfoNews.matchName"
                     :matchTime="indexInfoNews.description"
                     :url="indexInfoNews.url"
             ></banner-right-top>
             <banner-right-middle
                     :infoArr="indexInfoNews.items"
             ></banner-right-middle>
             <banner-right-bottom
                     :arr="indexInfoNews.playerList"
             ></banner-right-bottom>
           </div>
           <div class="banner-right-bottom"></div>
        </div>
      </div>
      <!--滚动通栏-->
      <scroll-rank
              :arr="indexInfoNews.matchList"
      ></scroll-rank>
      <!--资讯-->
      <div class="clear overflow home-bottom">
        <!--最新资讯-->
        <lates-news class="lf"></lates-news>
        <div class="details-right rt">
          <!--广告-->
          <div class="advertising rt" v-if="advertising.isShowAdvertising">
            <a :href="advertising.url | formatUnderfind ">
              <img :src="advertising.img | smallImage(380, 231)  " alt="">
            </a>
          </div>
          <!--俱乐部排名-->
          <!-- <club-rank class="rt"></club-rank> -->
          <!--选手排名-->
          <player-rank class="rt"></player-rank>
        </div>
      </div>
      <parther :arr="mediaPartners" class="parther"></parther>

    </div>
</template>

<script>
import BannerRightTop from './banner_right_top.vue'
import BannerRightMiddle from './banner_right_middle.vue'
import BannerRightBottom from './banner_right_bottom.vue'
import LatesNews from '../public/latest_news.vue'
import clubRank from '../side_board/club_rank.vue'
import PlayerRank from '../side_board/player_rank.vue'
import slideShow from './slide_show.vue'
import parther from './partner.vue'
import scrollRank from './scroll_rank.vue'
import {mapGetters} from 'vuex'
import {title} from 'src/base/title.js'
export default{
  title: title + '首页',
  asyncData({store, route}) {
    return Promise.all(
      [
        // 轮播图
        store.dispatch('getSliderShow'),
        //广告位
        store.dispatch('getAdvertising', 2),
        // 合作媒体和合作俱乐部
        store.dispatch('getMediaPartners')
      ]
    )
  },
  components: {
    BannerRightTop,
    BannerRightBottom,
    BannerRightMiddle,
    LatesNews,
    clubRank,
    PlayerRank,
    slideShow,
    scrollRank,
    parther
  },
  data () {
    return {
      invTime: 5000,
      isShowAdvertising: true,
      indexInfoNews: {
          matchIcon: require('src/assets/images/@1xjingwumen.png'),
          matchName: '精武门2017-2018赛季团体小组赛第二轮',
          matchTime: '2018年1月20日-1月21日',
          url: ''
      }
    }
  },
  computed: {
      // 轮播图、广告图、合作媒体、合作媒体、合作俱乐部
    ...mapGetters(['slide_show', 'advertising','mediaPartners'])
  },
  methods:{
      getInfoNews () {
          this.$http.getIndexInfoNews().then ((res) => {
              let forMatData = (data) => {
                  // 容错
                  for(let key in data) {
                      if (key === 'matchName'||key === 'matchTime'||key === 'description'){
                          data[key] = data[key] || ''
                      }else if (key === 'matchIcon') {
                          data[key] = data[key]|| require('src/assets/images/@1xjingwumen.png')
                      }else if (key === 'url') {
                          data[key] = data[key]|| null
                      }else {
                          data[key] = data[key] || []
                      }
                  }
              }
              forMatData(res.data)
              this.indexInfoNews = res.data
          })
      }
  },
   mounted () {
      this.getInfoNews()
  }
}

</script>

<style lang="scss" scoped>
  .home{
    /*padding: 0 10px 23px 10px;*/
    background-color: white;
  }
  .index{
    width: 500px;
  }
  .clubrank{
    margin: 0;
  }


  //scroll view
  .scroll-banner{
    float: left;
    width:810px;
    height:100%;
    background-color: black;
  }
  .banner-right{
    float: right;
    width: 390px;
    height: 575px;
  }
  .banner-right-top{
    box-sizing: border-box;
  }

  //scroll banner show component
  .slide-show{
    float: left;
  }
  //scroll banner
  .scroll-banner-bottom{
    div{
      float: left;
      height: 100%;
      width: 200px;
      padding: 10px;
    }
    height: 72px;
    background-color: rgba(255,255,255,0.5);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .scroll-banner{
    position: relative;
    ul{
      float: right;
      overflow: hidden;
      height: 100%;
      width: 500px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    li{
      float: left;
      width: 79px;
      height: 60px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  .details-right{
    width: 251px;
  }
  .home-bottom{
    background-color: white;
    padding: 10px 10px 20px 10px;

  }
  //广告位
  .advertising{
    width: 380px;
    height: 231px;
    /*background-image: url("../../assets/images/@1xRectangle 9.png");*/
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
  .parther{
    padding: 0 10px;
  }
</style>
