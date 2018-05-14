<template>
  <div class="player-all-performance" v-if = " clubDetails.mmaClubGlories[0].gloryTitle !== ''">
    <div class="top">
      <div class="left">
        <span>荣誉榜</span>
      </div>
    </div>
    <div class="content overflow">
      <div class="top-block">
        <!--荣耀列表-->
        <ul class="runk">
          <li v-for="data in clubDetails.mmaClubGlories">
            <div  class="mask">
              <img :src="data.photoUrl" alt="">
              <div class="mask-inside-box">
                <p class="mask-year">{{data.gloryTitle}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png')
            ]
          },
          {
            type: 1,
            icon: require('../../assets/images/@1xRectangle 10.png'),
            name: '雅桑克莱进军诸神16强',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
            },
            rank: 1
          },
          {
            type: 1,
            icon: require('../../assets/images/@1xRectangle 10.png'),
            name: '雅桑克莱进军诸神16强',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
            },
            rank: 1
          },
          {
            type: 2,
            title: '雅桑克莱进军诸神16强',
            img: [
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png')
            ]
          },
          {
            type: 1,
            icon: require('../../assets/images/@1xRectangle 10.png'),
            name: '雅桑克莱进军诸神16强',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
            },
            rank: 1
          },
          {
            type: 1,
            icon: require('../../assets/images/@1xRectangle 10.png'),
            name: '雅桑克莱进军诸神16强',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
            },
            rank: 1
          },
          {
            type: 2,
            title: '雅桑克莱进军诸神16强',
            img: [
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png'),
              require('../../assets/images/@1xRectangle 10 Copy 2.png')
            ]
          },
          {
            type: 1,
            icon: require('../../assets/images/@1xRectangle 10.png'),
            name: '雅桑克莱进军诸神16强',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
            },
            rank: 1
          },
          {
            type: 1,
            icon: require('../../assets/images/@1xRectangle 10.png'),
            name: '雅桑克莱进军诸神16强',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
            },
            rank: 1
          }
        ]
      }
    },
    computed: mapGetters(['clubDetails'])
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
  }

  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
  }

  //图片列表
  .runk{
    li{
      width: 100%;
      cursor: auto;
      height: 50px;
      margin: 20px 0;
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
