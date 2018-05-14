<template>
  <div class="tel-station">
    <div class="top">
      <div class="left">
        <span>签约选手</span>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in clubDetails.mmaPlayers" :key="clubDetails.mmaPlayers.id" @click="jumpToPlayerDetails(item.id)">
          <a>
            <img :src="item.faceImage" alt="">
            <div class="overflow">
              <!--<span class="runk-icon" :style="{backgroundImage: 'url(\''+item.countryUrl+'\')'}">{{item.rank}}</span>-->
              <span class="runk-name">{{item.name}}</span>
              <span class="flag-icon" :style="{backgroundImage: 'url(\''+item.countryUrl+'\')'}" :title="item.countryName"></span>
            </div>
            <div class="p-div">
              <!--<p>{{item.victoryCount}}胜-{{item.failureCount}}负-{{item.matchCount-item.victoryCount -  item.failureCount}}平,{{item.koCount}}KO,{{item.tkoCount}}KTO</p>-->
              <p>{{item.victoryCount}}胜-{{item.failureCount}}负-{{item.matchCount-item.victoryCount -  item.failureCount}}平</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        icon: require('../../assets/images/@1x亚军3.png'),
        type: '销量级',
        arr: [
          {
            icon: require('../../assets/images/@1xRectangle 21 Copy 6.png'),
            name: '格斗兄弟',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xsekuai1.png') + ')'
            },
            flag: {
              backgroundImage: 'url(' + require('../../assets/images/@1x中国 copy 5.png') + ')'
            },
            rank: 1,
            exploits: '0胜-2败-0平, 1KO, 3TKO'
          },
          {
            icon: require('../../assets/images/@1xRectangle 21 Copy 6.png'),
            name: '格斗兄弟',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xsekuai1.png') + ')'
            },
            flag: {
              backgroundImage: 'url(' + require('../../assets/images/@1x中国 copy 5.png') + ')'
            },
            rank: 1,
            exploits: '0胜-2败-0平, 1KO, 3TKO'
          },
          {
            icon: require('../../assets/images/@1xRectangle 21 Copy 6.png'),
            name: '格斗兄弟',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xsekuai1.png') + ')'
            },
            flag: {
              backgroundImage: 'url(' + require('../../assets/images/@1x中国 copy 5.png') + ')'
            },
            rank: 1,
            exploits: '0胜-2败-0平, 1KO, 3TKO'
          },
          {
            icon: require('../../assets/images/@1xRectangle 21 Copy 6.png'),
            name: '格斗兄弟',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xsekuai1.png') + ')'
            },
            flag: {
              backgroundImage: 'url(' + require('../../assets/images/@1x中国 copy 5.png') + ')'
            },
            rank: 1,
            exploits: '0胜-2败-0平, 1KO, 3TKO'
          },
          {
            icon: require('../../assets/images/@1xRectangle 21 Copy 6.png'),
            name: '格斗兄弟',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xsekuai1.png') + ')'
            },
            flag: {
              backgroundImage: 'url(' + require('../../assets/images/@1x中国 copy 5.png') + ')'
            },
            rank: 1,
            exploits: '0胜-2败-0平, 1KO, 3TKO'
          }
        ]
      }
    },
    computed: mapGetters(['clubDetails']),
    methods: {
      jumpToPlayerDetails (id) {
        this.$router.push({path: '/players/player_details/'+ id})
//        this.$store.dispatch('jumpToPlayerDetails', id)
        window.scroll(0, 0)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .tel-station{
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 380px;
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
    span{
      float: right;
    }
    .content{
      overflow: hidden;
      padding: 0 0 17px 0;
      p{
        text-align: left;
      }
      p:first-of-type{
        font-size: 16px;
        color: #353536;
        letter-spacing: 0;
      }
      p:nth-of-type(2){
        font-size: 30px;
        color: #353536;
        letter-spacing: 0;
        margin-top: 5px;
        font-weight: bold;
      }
      p:nth-of-type(3){
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.6px;
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
  .content{
    li{
      cursor: pointer;
      width: 380px;
      clear: both;
      float: left;
      height: 110px;
      box-sizing: border-box;
      img{
        width: 90px;
        height: 90px;
        float: left;
        margin-left: 10px;
        margin-top: 20px;
        overflow: hidden;
        border-radius: 50%;
      }
      a{
        font-size: 14px;
        color: #838383;
        letter-spacing: -0.6px;
        text-decoration: none;
      }
      .runk-icon{
        width: 22px;
        height: 22px;
        display: inline-block;
        margin-top: 34px;
        margin-left: 15px;
        float: left;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.6px;
        text-align: center;
        line-height: 22px;
      }
      .runk-name{
        display: inline-block;
        margin-top: 37px;
        margin-left: 16px;
        float: left;
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.6px;
        font-weight: bold;
      }
      .flag-icon{
        width: 30px;
        height: 20px;
        display: inline-block;
        margin-top: 38px;
        margin-left: 18px;
        float: left;
      }

      .p-div{
        float: left;
        width: 251px;
        height: 40px;
        margin-top: 15px;
        margin-left: 15px;
        overflow: hidden;
        text-align: left;
      }

    }
  }

</style>
