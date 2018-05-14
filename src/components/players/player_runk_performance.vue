<template>
  <div class="tel-station">
    <div class="top">
      <div class="left">
        <span>当前战绩</span>
      </div>
    </div>
    <div class="content">
        <img src="../../assets/images/@1xjiangpei11.png" alt="" v-show="playerDetails.atRecord.competitionRanking">
        <img src="../../assets/images/@1xweicaisai1.png" alt="" v-show="playerDetails.atRecord.competitionRanking === ''">
        <!--判断选手是否已经参赛，没参赛competitionRanking结果为null,如果为999则为已参赛但选手未开打-->
        <div class="rank-number">{{playState(playerDetails.atRecord.competitionRanking)}}</div>
        <p class="name">{{season}}&nbsp;&nbsp;{{playerDetails.level | level}}</p>
        <p v-if="playerDetails.atRecord.participateSeason === '02'">{{playerDetails.atRecord.integral}}
          <span class="small-font">积分</span>
        </p>
        <p v-if="playerDetails.atRecord.participateSeason === '01' " class="no-match">暂无参赛</p>
        <p class="rank" v-show="playerDetails.atRecord.participateSeason === '02'">
          {{playerDetails.atRecord.victoryCount}}胜-{{playerDetails.atRecord.failureCount}}负-{{playerDetails.atRecord.matchCount- playerDetails.atRecord.victoryCount - playerDetails.atRecord.failureCount}}平,
          <span class="small-font">{{playerDetails.atRecord.koCount}}KO,{{playerDetails.atRecord.tkoCount}}TKO</span>
        </p>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        icon: '',
        season: ''
      }
    },
    computed: mapGetters(['playerDetails']),
    methods: {
      playState (index) {
        if (index === 999) {
          return '—'
        } else return index
      }
    },
    mounted () {
      this.$http.getNowSeason().then(res => {
        this.season = res.data.name
      })
      setTimeout(() => {
        if (this.playerDetails.atRecord.competitionRanking === 1) {
//          alert(1)
          this.icon = require('../../assets/images/@1x冠军1.png')
        } else if (this.playerDetails.atRecord.competitionRanking === 2) {
//          alert(2)
          this.icon = require('../../assets/images/@1x亚军3.png')
        } else if (this.playerDetails.atRecord.competitionRanking === 3) {
//          alert(3)
          this.icon = require('../../assets/images/@1x第三名.png')
        }
      }, 300)
    }
  }

</script>

<style lang="scss" scoped>
  .tel-station{
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 380px;
    height: 167px;
    .left{
      height: 100%;
      width: 150px;
      background: url('../../assets/images/@1xsekuai1.png') no-repeat;
      padding-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: white;
    }
    .rank-number{
      font-size: 26px;
      font-weight: bolder;
      color: #d80000;
      width: 42px;
      height: 32px;
      position: absolute;
      top:72px;
      left: 16px;
      text-align: center;
    }
    img{
      position: absolute;
      left: 10px;
      top: 64px;
      width: 54px;
      height: 90px;
    }
    .content{
      padding: 15px 0 17px 100px;
      p{
        text-align: left;
      }
      p:first-of-type{
        font-size: 12px;
        color: #171718;
        letter-spacing: 0;
        line-height: 16px;
      }
      .small-font{
        font-size: 12px;
        color: #838383;
        letter-spacing: 0;
        margin-left: 10px;
      }
      p:nth-of-type(2){
        font-size: 36px;
        color: #353536;
        letter-spacing: 0;
        margin-top: 10px;
        font-weight: bold;
      }
      .no-match{
        font-size: 32px;
      }
      p:nth-of-type(3){
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.6px;
        margin-top: 5px;
      }
      a{
        font-size: 18px;
        color: #353536;
        letter-spacing: -0.77px;
        text-decoration: none;
      }
    }

  }

  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
  }

</style>
