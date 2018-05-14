<template>
  <div class="player">
    <ul>
      <li v-for="(item,index) in (playerList.data)" @click="jumpToPlayerDetails(item.id)" :key="item.id">
        <div class="li-outbox">
          <div class="img-box">
            <img :src="item.faceImage |smallImage(163, 195)" alt="">
            <div class="img-box-bottom">{{item.name|getLengthPonit(0,7)}}</div>
          </div>
          <div class="list-details-left">
            <div class="list-details-left-inside">
              <span class="list-level">{{item.level | level}}</span>
              <img class="flag" :src="item.countryUrl " alt="" :title="item.countryName">
              <p>{{item.integral}}积分,{{item.victoryCount}}胜-{{item.failureCount}}负-{{item.matchCount- item.victoryCount - item.failureCount}}平</p>
              <p>{{item.club.fullName|getLengthPonitInside(24)}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="get-more" @click="getMore" v-if="!playerList.last">加载更多</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        limit: 12
      }
    },
    methods: {
      jumpToPlayerDetails (id) {
//        console.log(this.$route.path)
        this.$router.push({path: '/players/player_details/'+ id})
//        this.$store.dispatch('jumpToPlayerDetails', id)
        window.scroll(0, 0)
      },
      getMore () {
        this.$store.dispatch('getThePlayerList', true)
      }
    },
    computed: mapGetters(['playerList'])
  }

</script>

<style lang="scss" scoped>
  .player{
    box-sizing: border-box;
    padding: 20px 0 20px 0;
    ul{
      width: 840px;
      overflow: hidden;

    }
    .get-more{
      width: 100%;
      color: #838383;
      padding: 0;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      border: none;
      background-color: #F0EFEF;
      margin-bottom: 80px;
    }
  }
  .player>ul>li{
    cursor: pointer;
    box-sizing: border-box;
    width: 210px;
    height: 340px;
    float: left;
    .li-outbox{
      box-sizing: border-box;
      width: 180px;
      height: 340px;
      float: left;
    }
  }
  .img-box{
    position: relative;
    width: 100%;
    height: 239px;
    border: 1px solid #979797;
    padding: 6px 8px;
    box-sizing: border-box;
    img{
      width: 163px;
      height: 195px;
    }
    .img-box-bottom{
      box-sizing: border-box;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 180px;
      height: 32px;
      background-color: #353536;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      line-height: 32px;
      text-align: left;
      padding-left: 8px;
    }
  }
  .list-details-left{
    text-align: left;
    float: left;
    padding-left: 10px;
    &>img:first-of-type{
      float: left;
      margin-right: 20px;
    }
    .flag{
      margin-left: 17px;
    }
    width: 300px;
    .play-img{
      width: 72px;
      height: 90px;
    }
    .list-level{
      font-size: 16px;
      color: #353536;
      letter-spacing: -0.74px;
      font-weight:bold;
    }
    .flag{
      width: 30px;
      height: 18px;
    }
    p{
      font-size: 12px;
      color: #353536;
      letter-spacing: 0;
      line-height: 18px;
    }
    p:first-of-type{
      margin-top: 4px;
    }
    .list-details-left-inside{
      margin-top: 5px;
    }
  }


</style>
