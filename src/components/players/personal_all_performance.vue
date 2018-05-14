<template>
  <div class="player-all-performance">
    <div class="top">
      <div class="left">
        <span>历史总成绩</span>
      </div>
    </div>
    <div class="content">
      <div class="top-block">
        <ul class="data-ul">
          <li>
            <span>胜 </span>
            <div class="data-box" :style="{width: dataWidth(playerDetails.victoryCount)}" :class="{deepred:playerDetails.victoryCount>0,gray:playerDetails.victoryCount == 0}"></div>
            <span :class="{deepredfont:playerDetails.victoryCount>0,grayfont:playerDetails.victoryCount == 0}">{{playerDetails.victoryCount}}</span>
          </li>
          <li>
            <span>负 </span>
            <div class="data-box" :style="{width: dataWidth(playerDetails.failureCount)}" :class="{deepred:playerDetails.failureCount>0,gray:playerDetails.failureCount == 0}"></div>
            <span :class="{deepredfont:playerDetails.failureCount>0,grayfont:playerDetails.failureCount == 0}">{{playerDetails.failureCount}}</span>
          </li>
          <li>
            <span>平 </span>
            <div class="data-box" :style="{width: dataWidth(playerDetails.matchCount- playerDetails.victoryCount -playerDetails.failureCount)}" :class="{deepred:playerDetails.matchCount- playerDetails.victoryCount -playerDetails.failureCount>0,gray:playerDetails.matchCount- playerDetails.victoryCount -playerDetails.failureCount == 0}"></div>
            <span :class="{deepredfont:playerDetails.matchCount- playerDetails.victoryCount -playerDetails.failureCount>0,grayfont:playerDetails.matchCount- playerDetails.victoryCount -playerDetails.failureCount == 0}">{{playerDetails.matchCount- playerDetails.victoryCount -playerDetails.failureCount}}</span>
          </li>
          <li>
            <span>KO</span>
            <div class="data-box" :style="{width: dataWidth(playerDetails.koCount)}" :class="{deepred:playerDetails.koCount>0,gray:playerDetails.koCount == 0}"></div>
            <span :class="{deepredfont:playerDetails.koCount>0,grayfont:playerDetails.koCount == 0}">{{playerDetails.koCount}}</span>
          </li>
          <li>
            <span>TKO</span>
            <div class="data-box" :style="{width: dataWidth(playerDetails.tkoCount)}" :class="{deepred:playerDetails.tkoCount>0,gray:playerDetails.tkoCount == 0}"></div>
            <span :class="{deepredfont:playerDetails.tkoCount>0,grayfont:playerDetails.tkoCount == 0}">{{playerDetails.tkoCount}}</span>
          </li>
        </ul>
        <!--荣耀列表-->
        <ul class="runk" v-if="playerDetails.mmaPlayerGlories.length>0">
          <li v-for="data in playerDetails.mmaPlayerGlories">
            <div  class="mask">
              <img :src="data.url" alt="">
              <div class="mask-inside-box">
                <p class="mask-year">{{data.gloryTitle}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
      <ul >
      <!--下面赛事对战历史记录-->
      <li v-for="li in playerEnemy" :key = 'li.id' @click ="jumpToRunk(li.id)">
        <a>
          <span class="flag-left" :style="{backgroundImage: 'url(\''+playerDetails.countryUrl+'\')'}" :title="playerDetails.countryName" ></span>
          <span class="flag-right" :style="{backgroundImage: 'url(\''+li.player.countryUrl+'\')'}"  :title="li.player.countryName"></span>
          <span class="win-icon-left" v-show="li.victory === true"></span>
          <span class="win-icon-right" v-show="li.victory === false"></span>
          <span class="pin-icon-left" v-show="li.victory === null"></span>
          <span class="pin-icon-right" v-show="li.victory === null"></span>
          <div class="scroll-rank-top"><span>{{li.startTime | normalTime(2)}}  第{{li.screenings}}场</span> <span>{{ li.level|level}}</span></div>
          <div class="scroll-rank-bottom">
            <div class="lf">
              <p class="name">{{playerDetails.name|getLengthPonitInside(12)}}<span ></span></p>
              <p>{{playerDetails.victoryCount}}胜-{{playerDetails.failureCount}}负-{{ playerDetails.matchCount-playerDetails.victoryCount - playerDetails.failureCount}}平</p>
            </div>
            <span class="vs">vs</span>
            <div class="rt">
              <p class="name">{{li.player.name|getLengthPonitInside(12)}}<span></span></p>
              <p>{{li.player.victoryCount}}胜-{{li.player.failureCount}}负-{{ li.player.matchCount- li.player.victoryCount -li.player.failureCount}}平</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        icon: require('../../assets/images/@1x亚军3.png'),
        arr: [
          {
            type: 2,
            title: '雅桑克莱进军诸神16强',
            img: [
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png')
            ]
          }
        ],
        dataDefaultWidth: 20
      }
    },
    computed: mapGetters(['playerDetails', 'playerEnemy']),
    methods: {
      // 返回选手数据显示比例
      dataWidth (data) {
        data = parseInt(data)
        if (data === 0) {
          return 284 + 'px'
        } else {
          var average = 284 / this.dataDefaultWidth
          return data * average + 'px'
        }
      },
      // 跳转到选手页
      jumpToRunk (id) {
        this.$store.dispatch('getEventsDetails', id).then(() => {
          setTimeout(() => {
            this.$store.dispatch('getEventsDetailsVideoIndex', 0).then(() => {
              this.$router.push({path: '/events/runk_details/' + id})
            })
            window.scrollTo(0, 0)
          }, 300)
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .player-all-performance{
    text-align: left;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 380px;

    .left{
      height: 100%;
      width: 150px;
      background: url('../../assets/images/@1xsekuai2.png') no-repeat;
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
      .data-ul{
        margin-bottom: 10px;
        li{
          width: 380px;
          height: 20px;
          margin-left: 0;
          &>span{
            float: left;
          }
          span:nth-of-type(1){
            display: inline-block;
            width: 66px;
            text-align: center;
            line-height: 20px;
          }
          span:nth-of-type(2){
            margin-left: 10px;
            font-size: 16px;
            letter-spacing: 0;
            line-height: 20px;
          }

          .data-box{
            float: left;
          }
        }
      }
      .deepred{
        background-color: #8C0312;
      }
      .deepredfont{
        color: #8C0312 ;
      }
      .data-box{
        height: 20px;
      }
      .gray{
        background-color: #cccaca;
      }
      .grayfont{
        color: #cccaca;
      }
    }

  }

  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
  }

  //图片列表
  .top-block{
    position: relative;
    font-size: 14px;
    color: #353536;
    letter-spacing: 0;
    &>p:first-of-type{
      font-size: 20px;
      color: #171718;
      letter-spacing: 0;
      line-height: 30px;
    }
    &>p:nth-of-type(2){
      font-size: 16px;
      color: #171718;
      letter-spacing: 0;
      line-height: 30px;
    }
    .data-ul li{
      cursor: auto ;
    }
    ul{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

    }
    li{
      position: relative;
      width: 80px;
      height: 80px;
      margin-top: 10px;
    }
    img{
      width: 80px;
      height: 80px;
    }
    .top-imgs{
      position: relative;
      display: flex;
      justify-content: space-between;
    }
  }

  //塞事列表
  .flag-left,
  .flag-right{
    display: block;
    width: 30px;
    height: 18px;
    position: absolute;
    top: 53px;
  }
  .flag-left{
    left: 129px;
    background:url("../../assets/images/@1xchina copy.png") no-repeat;
  }
  .flag-right{
    right:129px;
    background:url("../../assets/images/@1xchina copy.png") no-repeat;
  }
  .win-icon-left,
  .win-icon-right{
    display: block;
    width: 50px;
    height: 25px;
    position: absolute;
    top: 79px;
    background:url("../../assets/images/@1xsheng.png") no-repeat;

  }
  .pin-icon-left,
  .pin-icon-right{
    display: block;
    width: 50px;
    height: 25px;
    position: absolute;
    top: 79px;
    background:url("../../assets/images/@1xping.png") no-repeat;
  }
  .win-icon-left,
  .pin-icon-left
  {
    left: 124px;
  }
  .win-icon-right,
  .pin-icon-right{
    right: 125px;
  }

  .left,
  .right{
    width: 20px;
    box-sizing: border-box;
    background-color: #EBEBEB;
    font-family: '宋体';
    font-weight:bold;
    /*cursor: pointer;*/
  }
  .right{
    float: right;
  }
  .new-rank{
    padding: 15px;
    width: 74px;
    background-color: #EBEBEB;
    box-sizing: border-box;
    font-size: 16px;
    color: #353536;
    letter-spacing: -0.39px;
    line-height: 22px;
  }
  .vs{
    position: absolute;
    top: 51px;
    left: 168px;
    font-size: 16px;
    color: #353536;
    letter-spacing: -0.51px;
    font-weight: bold;
  }

  li{
    width: 358px;
    height: 125px;
    background-color: #F8F8F8;
    float: left;
    margin-left: 11px;
    position: relative;
    margin-top: 15px;
    cursor: pointer;
    a{
      cursor: pointer;
      text-decoration: none;
      color: #4A4A4A;
    }

    .scroll-rank-top{
      padding: 9px 10px 0 10px;
      height: 40px;
      border-bottom: 1px solid #CCCDCF;
      font-size: 14px;
      color: #4A4A4A;
      letter-spacing: -0.34px;
      box-sizing: border-box;
      span:first-child{
        float: left;
      }
      span:nth-of-type(2){
        float: right;
      }
    }
    .scroll-rank-bottom{
      padding: 9px 10px 0 10px;
      .name{
        font-weight:bold;
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.39px;
      }
      p:not(:first-child){
        font-size: 12px;
        color: #838383;
        letter-spacing: -0.39px;
      }
      p:nth-of-type(2){
        margin-top: 7px;
      }
      .lf p{
        text-align: left;
      }
      .rt p{
        text-align: right;
      }
    }
  }
.runk{
  padding-bottom: 10px;
  border-top: 1px dashed #979797;
  border-bottom:1px dashed #979797;
  margin-bottom: 10px;
  li{
    width: 100%;
    cursor: auto;
    height: 50px;
    img{
      width: 50px;
      height: 50px;
      float: left;
    }
    .mask-inside-box{
      margin-left: 15px;
      float: left;
      font-size: 16px;
      color: #353536;
      letter-spacing: 0;
      line-height: 26px;
      width: 270px;
    }
  }
}
</style>
