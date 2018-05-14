<template>
    <div class="player">
      <ul>
        <li v-for="(item, index) in playerRunkTap.data" :key = 'item.id' @click = jumpToPlayerDetails(item.id)>
          <div class="li-out-box">
            <div class="img-box">
              <img :src="item.faceImage" alt="">
              <div class="img-box-bottom"><span class="img-box-runk">{{index+1}}</span>  {{item.name}}</div>
            </div>
            <div class="list-details-left">
                <div class="list-details-left-inside">
                  <span class="list-level">{{item.level | level}}</span>
                  <img class="flag" :src="item.countryUrl" alt="" :title="item.countryName">
                  <!--<p>{{item.victoryCount}}胜-{{item.failureCount}}负-{{item.matchCount-item.victoryCount-item.failureCount}}平，{{item.koCount}}KO,{{item.tkoCount}}TKO</p>                -->
                  <p>{{item.integral}}积分,{{item.victoryCount}}胜-{{item.failureCount}}负-{{item.matchCount-item.victoryCount-item.failureCount}}平</p>
                  <p>{{item.club.fullName|getLengthPonitInside(26)}}</p>
                </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="get-more" @click = 'getMore' v-show="!playerRunkTap.last">加载更多</div>
      <div class="if-list-no-show" v-if="playerRunkTap.data.length == 0">
        <img src="../../../assets/images/@1xlogo111.png" alt="">
        <p>暂无相关搜索结果...</p>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      limit: 12,
      type: '01',
      arr: [
        {
          faceImage: require('../../../assets/images/@1xRectangle 7 Copy 2.png'),
          runk: 1,
          name: '狄米崔斯-约翰逊',
          level: '蝇量级',
          flag: require('../../../assets/images/@1x中国 copy 4.png'),
          grade: '4胜-0败-1平, 1KO, 3TKO',
          club: '广州k-9俱乐部'
        }
      ]
    }
  },
  computed: mapGetters(['playerRunkTap','information_arr']),
  watch: {
    // 判断点击选手首页下每个tag发送请求改变vuex里的数据
    $route (to) {
      if (typeof (to.params.id) === 'undefined') {
          // 路径为空时设置为第一个数组的tap id
          this.type = '05'
          // this.type = this.information_arr.tags[0].id
      } else {
        this.type = to.params.id
      }
      this.limit = 12
      this.$store.dispatch('getThePlayerRunk', {type: this.type, limit: this.limit})
    }
  },
  methods: {
    getMore () {
      this.limit = this.limit + 12
//      console.log(this.limit)
      this.$store.dispatch('getThePlayerRunk', {type: this.type, limit: this.limit})
    },
    jumpToPlayerDetails (id) {
      window.scroll(0, 0)
      this.$store.dispatch('jumpToPlayerDetails', id)
      this.$router.push({path: '/players/player_details/'+ id})
    }
  },
  mounted () {
    // this.information_arr.tags[0].id 初始化第一个数组的id
    //   console.log('里面', this.information_arr.tags)
    //   console.log(this.$route.params)
      if(this.$route.params.id){
          this.$store.dispatch('getThePlayerRunk', {type:this.$route.params.id, limit: 12})
      } else {
          this.$store.dispatch('getThePlayerRunk', {type: '05', limit: 12})
      }
  }
}

</script>

<style lang="scss" scoped>
  .player{
    box-sizing: border-box;
    padding: 20px 8px;
    ul{
      width: 840px;
      overflow: hidden;
      li:first-of-type{
        .img-box-runk{
          background: #D90200;
        }
      }
      li:nth-of-type(2){
        .img-box-runk{
          background: #EA354B;
        }
      }
      li:nth-of-type(3){
        .img-box-runk{
          background: #F6A623;
        }
      }
    }
    .get-more{
      width: 100%;
      color: #838383;
      padding: 0;
      height: 40px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      border: none;
      background-color: #F0EFEF;
      margin-bottom: 80px;
    }
  }
  .player>ul>li{
    box-sizing: border-box;
    width: 209px;
    height: 340px;
    float: left;
    cursor: pointer;
    .li-out-box{
      box-sizing: border-box;
      width: 179px;
      height: 340px;
      float: left;
    }
  }
  .img-box{
    position: relative;
    width: 100%;
    height: 239px;
    border: 1px solid #979797;
    padding: 7px 8px;
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
      background: #353536;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      line-height: 32px;
      text-align: left;
      padding-left: 47px;
    }
    .img-box-runk{
      position: absolute;
      display: inline-block;
      width: 30px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      left: 8px;
      bottom: 3px;
      background-color:#838383;
    }
  }
  .list-details-left{
    text-align: left;
    float: left;
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
      margin-top: 9px;
    }
    .list-details-left-inside{
      margin-top: 5px;
    }
  }
  .if-list-no-show{
    margin: 160px auto;
    p{
      margin-top: 12px;
      font-size:16px;
      color: #838383;
    }
  }

</style>
