<template>
    <div class="player-details w white overflow">
      <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;选手&nbsp;&nbsp;>&nbsp;&nbsp;选手详情</p>
      <div class="runk-details-top">
        <div class="list-details-left">
          <img class="play-img" :src="playerDetails.faceImage" :alt="playerDetails.name">
          <div class="list-details-left-inside">
            <span class="list-name">{{ playerDetails.name }}</span>
            <img class="flag" :src="playerDetails.countryUrl" :title="playerDetails.countryName">
            <!--<p>{{playerDetails.birthday | age}}岁/{{playerDetails.height}}cm/{{playerDetails.weight}}KG/{{playerDetails.nation}}</p>-->
            <p>{{playerDetails.birthday | ageYear}}岁/{{playerDetails.height|MathFloor}}cm/{{playerDetails.weight|MathFloor}}kg</p>
            <p class="club" @click="jumpToClub(playerDetails.club.id)">{{playerDetails.club.fullName }}</p>
            <!--<p>{{playerDetails.victoryCount}}胜-{{playerDetails.failureCount}}负-{{playerDetails.matchCount- playerDetails.victoryCount -playerDetails.failureCount}}平, {{playerDetails.koCount}}KO,{{playerDetails.tkoCount}}TKO</p>-->
            <p>{{playerDetails.victoryCount}}胜-{{playerDetails.failureCount}}负-{{playerDetails.matchCount- playerDetails.victoryCount -playerDetails.failureCount}}平</p>
          </div>
        </div>
      </div>
      <div class="clear out-box">
        <!--左边子router-->
        <information class="lf"></information>
        <div class="details-right rt">
          <!--赛季战绩-->
          <player-runk-performance class="events-margin rt"></player-runk-performance>
          <!--历史战绩-->
          <personal-all-performance class="events-margin rt"></personal-all-performance>
        </div>
      </div>
    </div>
</template>

<script>
  import information from '../public/information.vue'
  import PlayerRunkPerformance from './player_runk_performance.vue'
  import PersonalAllPerformance from './personal_all_performance.vue'
  import {mapGetters} from 'vuex'
  export default {
    title() {
      return this.playerDetails.name
    },
    asyncData({route,store}){
        return store.dispatch('jumpToPlayerDetails', route.params.id)
    },
    components: {
      information,
      PlayerRunkPerformance,
      PersonalAllPerformance
    },
    computed: mapGetters(['information_arr', 'playerDetails']),
    methods:{
        jumpToPlayer (id) {
            this.$router.push({path: '/players/player_details/'+ id})

            window.scroll(0, 0)
        },
        jumpToClub(id){
            this.$router.push({path:'/players/club_details/'+ id})
        }
    },
    mounted () {
      // 刷新时候初始化
      if(parseInt(this.$route.params.id))
      this.$store.dispatch('jumpToPlayerDetails', this.$route.params.id)
      // 需要修改的地方
      this.information_arr.tags = [
        {
          href: '/players/player_details/'+ this.$route.params.id,
          title: '动态'
        },
//        {
//          href: '/players/player_details/intro',
//          title: '简介'
//        },
        {
          href: '/players/player_details/newz/'+ this.$route.params.id,
          title: '资讯'
        },
        {
          href: '/players/player_details/photo/'+ this.$route.params.id,
          title: '图片'
        },
        {
          href: '/players/player_details/video/'+ this.$route.params.id,
          title: '视频'
        }
      ]
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
  height: 314px;
  background:url("../../assets/images/@1xditu1.png");
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
  /*width: 360px;*/
  width: 570px;
  .play-img{
    border: 5px solid #FFFFFF;
    border-radius: 50%;
    width: 170px;
    height: 170px;
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
    margin-top: 19px;
  }
  .list-details-left-inside{
    margin-top: 5px;
    padding-left: 10px;
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
.club{
  cursor: pointer;
}
.club:hover{
  color: red;
}
</style>
