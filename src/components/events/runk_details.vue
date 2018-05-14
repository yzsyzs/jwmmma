<template>
    <div class="runk-details w  white overflow">
      <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;赛事&nbsp;&nbsp;>&nbsp;&nbsp;赛事详情</p>
      <div class="runk-details-top">
        <p class="runk-details-topo-first-p">精武门MMA联赛{{eventsDetails.seasonName}}<i class="iconfont point">&#xe643;</i>{{eventsDetails.siteName}}</p>
        <p class="runk-details-topo-second-p">{{eventsDetails.startTime | normalTime(2) }}&nbsp;&nbsp;{{eventsDetails.siteAddress}}&nbsp;&nbsp; 第{{eventsDetails.screenings}}场</p>
        <div class="list-details-left">
          <img class="play-img" :src="eventsDetails.mmaPlayerRed.faceImage | smallImage(132,162)" alt="">
          <div class="list-details-left-inside">
            <span class="list-name">{{eventsDetails.mmaPlayerRed.name}}</span>
            <img class="flag" :src="eventsDetails.mmaPlayerRed.countryUrl" alt="" :title="eventsDetails.mmaPlayerRed.countryName">
            <img class="win-icon" src="../../assets/images/@1xsheng_da.png" alt="" v-if="returnClubVictory(eventsDetails.mmaPlayerVictory) == eventsDetails.mmaPlayerRed.id ">
            <img class="win-icon" src="../../assets/images/@1xping_da.png" alt="" v-if="iconStatus(eventsDetails.status,eventsDetails.mmaPlayerVictory)">
            <p class="img-icon-p-left">
              <img class="img-icon-left" :src="eventsDetails.mmaPlayerRed.clubLogo" alt="" v-if="eventsDetails.mmaPlayerRed.clubLogo">{{eventsDetails.mmaPlayerRed.clubName}}</p>
            <p>{{eventsDetails.mmaPlayerRed.birthday | age}}岁-{{eventsDetails.mmaPlayerRed.height|MathFloor}}cm-{{eventsDetails.mmaPlayerRed.weight|MathFloor}}kg</p>
             <p>{{eventsDetails.mmaPlayerRed.victoryCount}}胜-{{eventsDetails.mmaPlayerRed.failureCount}}负-{{eventsDetails.mmaPlayerRed.matchCount- eventsDetails.mmaPlayerRed.victoryCount - eventsDetails.mmaPlayerRed.failureCount}}平</p>
          </div>
        </div>
        <div class="list-details-middle">
          <span class="vs">vs</span>
          <p>{{eventsDetails.level |level}}</p>
          <!--中间状态-->
          <p >{{mydata(eventsDetails.status,eventsDetails.victoryWay,eventsDetails.mmaPlayerVictory)}}</p>

        </div>
        <div class="list-details-right">
          <img class="play-img" :src="eventsDetails.mmaPlayerBlue.faceImage | smallImage(132,162)"  alt="">
          <div class="list-details-left-inside">
            <img class="win-icon"  src="../../assets/images/@1xsheng_da.png" alt="" v-if="returnClubVictory(eventsDetails.mmaPlayerVictory) == eventsDetails.mmaPlayerBlue.id ">
            <img class="win-icon"  src="../../assets/images/@1xping_da.png" alt="" v-if="iconStatus(eventsDetails.status,eventsDetails.mmaPlayerVictory)">
            <img class="flag" :src="eventsDetails.mmaPlayerBlue.countryUrl" alt="" :title="eventsDetails.mmaPlayerBlue.countryName">
            <span class="list-name">{{eventsDetails.mmaPlayerBlue.name}}</span>
            <p class="img-icon-p-right">{{eventsDetails.mmaPlayerBlue.clubName}}
              <img class="img-icon-right" :src="eventsDetails.mmaPlayerBlue.clubLogo" alt="" v-if="eventsDetails.mmaPlayerBlue.clubLogo">
            </p>
            <p>{{eventsDetails.mmaPlayerBlue.birthday| age}}岁-{{eventsDetails.mmaPlayerBlue.height|MathFloor}}cm-{{eventsDetails.mmaPlayerBlue.weight|MathFloor}}kg</p>
            <p>{{eventsDetails.mmaPlayerBlue.victoryCount}}胜-{{eventsDetails.mmaPlayerBlue.failureCount}}负-{{eventsDetails.mmaPlayerBlue.matchCount - eventsDetails.mmaPlayerBlue.victoryCount - eventsDetails.mmaPlayerBlue.failureCount}}平</p>
          </div>
        </div>
      </div>
      <div class="clear overflow">
        <relation-video class="lf"></relation-video>
        <!--右边相关资讯-->
        <div class="details-right rt">
          <related-information :arr="eventsDetails.info" ></related-information>
        </div>
      </div>
    </div>
</template>

<script>
import RelatedInformation from '../side_board/related_information.vue'
import RelationVideo from './relation_video .vue'
import {mapGetters} from 'vuex'
export default{
  asyncData({route,store}){
      return store.dispatch('getEventsDetails', route.params.id)
  },
  components: {
    RelatedInformation,
    RelationVideo
  },
  computed: mapGetters(['eventsDetails']),
  methods: {
    returnClubVictory (mmaClubVictory) {
      if (mmaClubVictory === null || mmaClubVictory === undefined) {
        return ''
      } else {
        return mmaClubVictory.id
      }
    },
    // 判断状态返回相应结果03和04为已结束和已完成状态
    mydata (status, victoryWay, victoryId) {
      if (status === '03' || status === '04') {
        if (victoryId === null) {
          return '平局'
        } else {
          var allVictoryWay = {
            '01': 'KO',
            '02': 'TKO',
            '03': '判定',
            '04': '一方弃权',
            '05': '一方被取消资格'
          }
          return allVictoryWay[victoryWay]
        }
      } else {
        var allStatus = {
          '01': '未开始',
          '02': '进行中',
          '05': '已取消'
        }
        return allStatus[status]
      }
    },
    // 判断胜负图标显示条件
    iconStatus (status, victory) {
      if (status === '03' || status === '04') {
        if (victory === null) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  },
  mounted () {
      this.$router.push({path: '/events/runk_details/' + this.$route.params.id})
//    this.$store.dispatch('getEventsDetails', this.$route.params.id).then(() => {
//      this.$store.dispatch('getEventsDetailsVideoIndex', 0).then(() => {
//        this.$router.push({path: '/events/runk_details/' + this.$route.params.id})
//      })
//    })
  }
}
</script>

<style lang="scss" scoped>
  .point{
   color: white;
   font-size: 12px;
    line-height: 28px;
    margin-top: -2px;
  }
 .runk-details-top{
   box-sizing: border-box;
    position: relative;
    width:1220px;
    height: 320px;
    background:url("../../assets/images/@1xsaishixianqtu.png");
    margin:20px 0 20px 0;
    padding-top: 30px;

  }

  .runk-details{
    padding: 18px 10px;
    &>p:first-of-type{
      text-align: left;
    }
  }
  .runk-details-top{
    &>p:first-of-type{
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 28px;
    }
    &>p:nth-of-type(2){
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 28px;
    }
  }

  //列表详情
  .list-details-left,
  .list-details-right{
    position: relative;
    margin-top: 20px;
    width: 510px;
    .play-img{
      width: 136px;
      height: 162px;
      border: 2px solid white;
    }
    .list-name{
      font-size: 30px;
      color: #FFFFFF;
      letter-spacing: -1.39px;
    }
    .flag{
      width: 50px;
      height: 30px;
    }
    p{
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 30px;
    }
    p:first-of-type{
      margin-top: 12px;
    }
    .list-details-left-inside{
      margin-top: 5px;
    }
    .img-icon-p-left{
      position: relative;
      padding-left: 200px;
    }
    .img-icon-p-right{
      position: relative;
      padding-right: 200px;
    }
    .img-icon-p2{
      display: inline-block;
      width: 20px;
      height: 20px;
      overflow: hidden;
      line-height: 20px;
      margin-left: 15px;
    }
    .img-icon-left,
    .img-icon-right{
      position: absolute;
      top: 5px;
      width: 20px;
      height: 20px;
    }
    .img-icon-left{
      left: 170px;
    }
    .img-icon-right{
      right: 163px;
    }
    .win-icon{

    }
  }
  .list-details-left{
    .win-icon{
    left: -30px;
    }
    margin-left: 90px;
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
  .list-details-right{
    margin-right: 90px;
    text-align: right;
    float: right;
    &>img:first-of-type{
      float: right;
      margin-left: 30px;
    }
    .flag{
      margin-right: 17px;
    }
    .win-icon{
      right: -30px;
    }
  }
  .list-details-middle{
    width: 160px;
    height: 130px;
    position: absolute;
    left: 50%;
    top: 96px;
    margin-left: -80px;
    .vs{
      font-size: 49px;
      color: #FFFFFF;
      letter-spacing: -1.51px;
      font-weight: bold;
    }
    p{
      margin-top: 6px;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
    }

  }


</style>
