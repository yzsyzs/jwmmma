<template>
  <div class="tel-station" v-if="clubDetails.eventRanking == 1 || clubDetails.eventRanking == 2 || clubDetails.eventRanking == 3">
    <div class="top">
      <div class="left">
        <span>当前赛季</span>
      </div>
    </div>
    <div class="content">
      <img :src="icon" alt="">
      <p class="rank">{{season}}</p>
      <p class="rank big">第{{clubDetails.eventRanking | number}}名</p>
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
    computed: mapGetters(['clubDetails']),
    created () {
      this.$http.getNowSeason().then(res => {
        this.season = res.data.name
      })
      setTimeout(() => {
        if (this.clubDetails.eventRanking === 1) {
          this.icon = require('../../assets/images/@1xtdmc1.png')
        } else if (this.clubDetails.eventRanking === 2) {
          this.icon = require('../../assets/images/@1xtdmc2.png')
        } else if (this.clubDetails.eventRanking === 3) {
          this.icon = require('../../assets/images/@1xtdmc3.png')
        }
      }, 300)
    }
  }

</script>

<style lang="scss" scoped>
  .tel-station{
    overflow: hidden;
    box-sizing: border-box;
    width: 380px;
    height: 167px;
    .left{
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      background: url('../../assets/images/@1xsekuai1.png') no-repeat;
      padding-left: 10px;
      color: white;
    }
    img{
      position: absolute;
      left: 10px;
      top: 20px;
      height: 92px;
      width: 160px;
    }
    span{
      float: left;
    }

    .content{
      position: relative;
      padding: 25px 0 17px 192px;
    }

  }

  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;

  }
  .rank{
    font-size: 14px;
    color: #353536;
    letter-spacing: 0;
    font-weight:bold;
    line-height: 20px;
    text-align: left;
    margin-right: 12px;
  }
  .big{
    font-size: 30px;
    color: #353536;
    letter-spacing: 0;
    line-height: 42px;
  }
</style>
