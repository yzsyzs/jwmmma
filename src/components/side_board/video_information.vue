<template>
  <div class="club-rank">
    <div class="top">
        <p>赛事资讯</p>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in arr" class="top-block">
          <div v-show="item.type==1" class="top-block-img">
            <a href="">
              <span class="imgs-title">2017年6月20日</span>
              <img :src="item.icon" alt="">
              <div class="overflow">
                <span class="runk-name">{{item.name}}</span>
                <div class="p-div">
                  <p>{{item.title}}</p>
                </div>
              </div>
            </a>
          </div>
          <div v-show="item.type==2">
            <p>{{item.title}}</p>
            <div class="top-imgs">
              <div class="top-img-box">
                <span class="imgs-title">2017年6月20日</span>
                <img :src="data" v-for="data in item.img">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        arr: [
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
    }
  }

</script>

<style lang="scss" scoped>
  // 新闻列表
  .club-rank{
    background: #050505;
    overflow: hidden;
    box-sizing: border-box;
    width: 378px;
    padding-bottom: 20px;
    text-align: left;
    .left{
      float: left;
      width: 200px;
      height: 40px;
      background:url("../../assets/images/@1xsekuai1 copy.png") no-repeat 0 0 ;
      padding-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
    }
    li{
      width: 100%;
      clear: both;
      float: left;
      box-sizing: border-box;
      padding-bottom: 20px;
      border-bottom: 1px dashed #979797;
      img{
        float: left;
        width: 120px;
        height: 70px;
        margin-top: 20px;
        overflow: hidden;
      }
      a{
        font-size: 14px;
        color: #838383;
        letter-spacing: -0.6px;
        text-decoration: none;
      }
      .runk-name{
        display: inline-block;
        margin-top: 20px;
        margin-left: 10px;
        float: left;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: bold;
      }


      .p-div{
        float: left;
        width: 240px;
        height: 40px;
        margin-top: 9px;
        margin-left: 10px;
        overflow: hidden;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 20px;
      }
      .p-div p{
        margin-top: 0;

      }
    }
    .top-block-img{
      position: relative;
    }
  }

  //图片列表
  .top-block{
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    padding-bottom: 20px;
    border-bottom: 1px dashed #979797;
    p{
      margin-top: 20px;
    }
    img{
      margin-top: 10px;
    }
    .top-imgs{
      position: relative;
      display: flex;
      justify-content: space-between;
    }
    .imgs-title{
      opacity: 0.7;
      width: 120px;
      height: 30px;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      background: #353536;
      position: absolute;
      left: 0;
      bottom: 0;
      line-height: 30px;
      text-align: center;

    }
    .top-img-box>img+img{
      margin-left:9px;
    }
  }
  .top{
    width: 378px;
    text-align: left;
    height: 32px;
    font-size: 16px;
    color: #D90200;
    letter-spacing: -0.36px;
    border-bottom: 2px solid #B5323A;
  }

</style>
