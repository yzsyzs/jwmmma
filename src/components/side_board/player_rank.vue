<template>
  <div class="club-rank">
    <div class="top">
      <div class="left">
        <span class="title">选手积分排名</span>
        <!--<span class="year">2016-2017</span>-->
      </div>
      <a class="top-a" @click="jumpToAllPlayer" v-show="arr.length > 0">全部》</a>
    </div>
    <div class="choose" v-show="arr.length > 0">
      <ul>
        <li><a href="javascript:;" :class="{red:type=='蝇量级'}"   @click="choose('蝇量级')">蝇量级</a></li>
        <li><a href="javascript:;" :class="{red:type=='雏量级'}"   @click="choose('雏量级')">雏量级</a></li>
        <li><a href="javascript:;" :class="{red:type=='羽量级'}"   @click="choose('羽量级')">羽量级</a></li>
        <li><a href="javascript:;" :class="{red:type=='轻量级'}"   @click="choose('轻量级')">轻量级</a></li>
        <li><a href="javascript:;" :class="{red:type=='次中量级'}"   @click="choose('次中量级')">次中量级</a></li>
      </ul>
    </div>
    <div class="content" v-if="arr.length > 0">
      <ul>
        <li @click = 'jumpToPlayer(item.id)' v-for="(item, index) in arr" :key="item.id">
          <a>
            <div class="img-out-box">
              <img :src="item.faceImage | smallImage(90, 90)" alt="">
            </div>
            <div class="overflow">
              <span class="runk-icon">{{index+1}}</span>
              <span class="runk-name">{{item.name}}</span>
              <span class="flag-icon" :style="{backgroundImage: 'url(\''+item.countryUrl+'\')'}" :title="item.countryName"></span>
            </div>
            <div class="p-div">
              <!--<p>{{item.victoryCount}}胜-{{item.failureCount}}负-{{item.matchCount-item.victoryCount-item.failureCount}}平，{{item.koCount}}KO,{{item.tkoCount}}TKO</p>-->
              <p>{{item.integral}}积分,{{item.victoryCount}}胜-{{item.failureCount}}负-{{item.matchCount-item.victoryCount-item.failureCount}}平</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div v-else class="undata">
      <img src="../../assets/images/@1xlogo111.png" alt="">
      <p>敬请期待</p>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        type: '蝇量级',
        arr: [
//          {
//            icon: require('../../assets/images/@1xRectangle 21 Copy 6.png'),
//            name: '格斗兄弟',
//            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
//            runkImg: {
//              backgroundImage: 'url(' + require('../../assets/images/@1xsekuai1.png') + ')'
//            },
//            flag: {
//              backgroundImage: 'url(' + require('../../assets/images/@1x中国 copy 5.png') + ')'
//            },
//            rank: 1,
//            exploits: '0胜-2败-0平, 1KO, 3TKO',
//            countryUrl: 'http://ou56683a7.bkt.clouddn.com/Frw49OxtTWnNL5bY9r_ru-VH_eD-'
//          }
        ]
      }
    },
    methods: {
      choose (type) {
        this.type = type
        let level = {'蝇量级': '01', '雏量级': '02', '羽量级': '03', '轻量级': '04', '次中量级': '05'}
        this.$http.getPlayerRank(level[type], 5).then(res => {
          this.arr = res.data.data === null ? [] : res.data.data
        })
      },
      jumpToAllPlayer () {
        this.$router.push({path: '/events/player_rank'})
        window.scroll(0, 0)
      },
      jumpToPlayer (id) {
        this.$router.push({path: '/players/player_details/'+ id})
        window.scroll(0, 0)
      }
    },
    mounted () {
      this.$http.getPlayerRank('01', 5).then(res => {
          this.arr = res.data.data === null ? [] : res.data.data
      })
    }
  }

</script>

<style lang="scss" scoped>
  .club-rank{
    overflow: hidden;
    box-sizing: border-box;
    width: 380px;
    height: 717px;
    .left{
      position: relative;
      float: left;
      width: 240px;
      height: 40px;
      background:url("../../assets/images/@1xsekuai2.png") no-repeat 0 0 ;
      padding-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      .title{
        position: absolute;
        left: 10px;
        top:0;
      }
      .year{
        position: absolute;
        font-size: 12px;
        top:9px
      }
    }
    .choose{
      li{
        float: left;
        margin: 16px 0 0 10px;
      }
      a:hover{
        border-radius: 15px;
        color: #B5323A;
        border: 1px solid #B5323A
      }
      a{
        width: 110px;
        height: 30px;
        display: inline-block;
        border: 1px solid #838383;
        font-size: 16px;
        color: #838383;
        letter-spacing: -0.6px;
        text-decoration: none;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
      }
      .red{
        color: #B5323A;
        border: 1px solid #B5323A
      }
    }
    .content{
      li:hover{
        .runk-name{
          color: red;
        }
      }
      .img-out-box img{
        transition: all .7s;
      }
      li .img-out-box:hover img{
        transition: all .7s;
        transform:scale(1.2 ,1.2);
      }
      li{
        width: 380px;
        clear: both;
        float: left;
        height: 110px;
        box-sizing: border-box;
        cursor: pointer;
        .img-out-box{
          position: relative;
          z-index: 1;
          width: 90px;
          height: 90px;
          float: left;
          margin-left: 10px;
          margin-top: 20px;
          overflow: hidden;
          border-radius: 50%;
        }
        img{
          width: 90px;
          height: 90px;
          float: left;
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
          background: #838383;
        }
        .runk-name{
          display: inline-block;
          margin-top: 37px;
          margin-left: 10px;
          float: left;
          font-size: 16px;
          color: #353536;
          letter-spacing: -0.6px;
        }
        .flag-icon{
          width: 30px;
          height: 20px;
          display: inline-block;
          margin-top: 38px;
          margin-left: 18px;
          float: left;
          background-size: 100% 100%;
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
      li:nth-of-type(1){
        .runk-icon{
          background: #BF0A08;
        }
      }
      li:nth-of-type(2){
        .runk-icon{
          background: #EA354B;
        }
      }
      li:nth-of-type(3){
        .runk-icon{
          background: #F6A623;
        }
      }
    }
  }

  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
    .top-a{
      float: right;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      text-decoration: none;
      margin-right: 5px;
    }
  }
  .undata{
    text-align: center;
    font-size: 16px;
    color: #838383;
    letter-spacing: -0.6px;
    margin-top: 50px;
  }
</style>
