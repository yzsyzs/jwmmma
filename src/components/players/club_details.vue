<template>
  <div class="player-details w white overflow">
    <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;选手&nbsp;&nbsp;>&nbsp;&nbsp;俱乐部详情</p>
    <div class="runk-details-top">
      <div class="list-details-left">
        <div class="list-details-left-imgbox">
          <img class="play-img" :src="clubDetails.logo | smallImage(170, 170)" :alt="clubDetails.abbreviationName">
        </div>
        <div class="list-details-left-inside">
          <span class="list-name">{{clubDetails.abbreviationName }}</span>
          <div v-html="getString" ></div>
        </div>
      </div>
    </div>
    <div class="clear out-box">
      <!--俱乐部介绍-->
      <club-intro class="lf"></club-intro>
      <!--右边-->
      <div class="details-right rt">
        <!--赛季战绩-->
        <SeasonRanking class="events-margin rt"></SeasonRanking>
        <!--荣誉版-->
        <honor-list class="events-margin rt"></honor-list>
        <!--签约选手-->
        <singing-players></singing-players>
      </div>
    </div>
  </div>
</template>

<script>
  import ClubIntro from './club_intro.vue'
  import SeasonRanking from './season_ranking.vue'
  import HonorList from './honor_list.vue'
  import SingingPlayers from './signing_players.vue'
  import {mapGetters} from 'vuex'
  export default {
    title () {
      return this.clubDetails.abbreviationName
    },
    asyncData({store,route}){
        return store.dispatch('jumpToClubDetails', route.params.id)
    },
    components: {
      ClubIntro,
      SeasonRanking,
      HonorList,
      SingingPlayers
    },
    computed: {
      ...mapGetters(['clubDetails']),
      getString () {
        // 去掉富文本的标签 <>
        let me = delHtmlTag(this.$store.getters.clubDetails.detail)
          function delHtmlTag(str)
          {   //去掉所有的html标记
              return str.replace(/<[^>]+>/g,"")
          }
        if (me) {
          if (me.length > 80) {
            return me.slice(0, 80) + '...'
          } else {
            return me
          }
        } else {
          return me
        }
      }
    },
    methods:{
        jumpToClubDetails (id) {
//      console.log('俱乐部id', id)
            this.$store.dispatch('jumpToClubDetails', id)
        },
    },
    mounted(){
        window.scroll(0, 0)
//        console.log(parseInt(this.$route.params.id) !== this.clubDetails.id,parseInt(this.$route.params.id),this.clubDetails.id)
//        if(parseInt(this.$route.params.id) !== this.clubDetails.id){
//            this.jumpToClubDetails (this.$route.params.id)
//        }

    }
  }
</script>

<style lang="scss" scoped>

  .player-details{
    padding: 18px 10px;
    p:first-child{
      text-align: left;
    }
  }

  .runk-details-top{
    box-sizing: border-box;
    position: relative;
    width:1220px;
    height: 320px;
    background:url("../../assets/images/@1xditu2.png");
    margin:20px 0 20px 0;

  }

  .runk-details{
    padding: 18px 10px;
    &>p:first-of-type{
      text-align: left;
    }
  }


  //列表详情
  .list-details-left{
    position: relative;
    left: 359px;
    top: 72px;
    width: 360px;
    .list-details-left-imgbox{
      box-sizing: border-box;
      width: 170px;
      height: 170px;
      border-radius: 50%;
      border: 5px solid white;
      overflow: hidden;
    }
    .play-img{
      width: 160px;
      float: left;
    }
    .list-name{
      font-size: 30px;
      color: #FFFFFF;
      letter-spacing: -1.39px;
    }
    p{
      font-size: 16px;
      color: white;
      letter-spacing: -0.67px;
      line-height: 36px;
    }
    p:first-of-type{
      margin-top: 19px;
    }
    .list-details-left-inside{
      position: absolute;
      left: 200px;
      top: 10px;
      width: 426px;
      margin-top: 5px;
      div:first-of-type{
        margin-top: 19px;
        font-size: 16px;
        color: white;
        letter-spacing: -0.67px;
        line-height: 36px;
      }
    }
  }
  .list-details-left{
    .win-icon{
      left: -30px;
    }
    text-align: left;
    float: left;
    &>img:first-of-type{
      float: left;
      margin-right: 30px;
    }
    .flag{
      margin-left: 17px;
    }
    .img-icon{
      margin-right: 15px;
    }
  }

  //内容下边右侧
  .details-right{
    width: 380px;
  }
</style>
