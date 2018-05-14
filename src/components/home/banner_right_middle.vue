<template>
  <div class="club-rank">
    <div class="content">
      <ul>
        <li v-for="(item, index) in infoArr"   :class="{havepoint:item.url}">
            <div v-if="item.type == 1" @click="jumpToPage(item.url)">
              <img :src="item.icon" alt="">
              <div class="overflow tv">
                  <p class="name">{{item.name}}</p>
                  <div class="clear"></div>
                   <p class="tv-rank">{{item.description}}</p>
                   <p class="title">{{item.titel}}</p>
              </div>
            </div>
            <div v-if="item.type == 2" class="third-div" @click="jumpToPage(item.url)">
              <img :src="item.icon" alt="">
              <div class="overflow">
                <p class="name">{{item.name}}</p>
                <div class="clear"></div>
                <p class="rank">{{item.description}}</p>
                <p class="title">{{item.titel}}</p>
              </div>
            </div>
            <div v-if="item.type == 3" @click="jumpToPage(item.url)">
                <img :src="item.icon" alt="">
                <div class="overflow">
                  <p class="name">{{item.name}}</p>
                  <div class="clear"></div>
                  <p class="rank">{{item.description}}</p>
                  <p class="title">{{item.titel}}</p>
                </div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      infoArr:{
        type: Array,
        default: function () {
          return [
            {
              icon: require('../../assets/images/@1xhubei1.png'),
              id: '',
              type: 0,
              url: '',
              name: '',
              description: ''
            }
          ]
        }
      }
    },
    data () {
      return {
        arr: [
          {
            icon: require('../../assets/images/@1xhubei1.png'),
            name: '湖北卫视',
            rank: '计划于2018年播出，首赛季精彩比赛视频请于优酷平台精武门自频道观看'
          },
          {
            icon: require('../../assets/images/@1xmashanggoupiao.png'),
            name: '马上购票',
            rank: '查看票务资讯',
            titel: ''
          },
          {
            icon: require('../../assets/images/@1xsaishizixun.png'),
            name: '赛事资讯',
            rank: '林荷琴2017年获职业生涯新高度'
          }
        ]
      }
    },
    methods: {
      jumpToPage (url) {
          if(url){
            window.location.href = url
          }else {
              return
          }
      }
    },
    mounted () {
      // this.$http.getCurrentTicketing().then(res => {
      //   this.arr[2].rank = res.data.title
      //   this.arr[1].rank = `门票￥${res.data.price}元起`
      // })
    }
  }

</script>

<style lang="scss" scoped>
  .club-rank{
    margin-top: 20px;
    background-color:#000000;/* IE6和部分IE7内核的浏览器(如QQ浏览器)下颜色被覆盖 */
    background-color:rgba(0,0,0,0.5); /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
    overflow: hidden;
    box-sizing: border-box;
    width:390px;
    height:200px;
    padding: 10px 15px 0 15px;
    text-align: left;

    a{
      font-size: 14px;
      color: #353536;
      letter-spacing: -0.6px;
      text-decoration: none;
    }
    a:hover {
      cursor: auto;
    }
    .left{
      height: 100%;
      width: 80px;
      background-color: #b81b08;
      padding-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: white;
    }
    li+li{
      margin-bottom: 12px;
    }
    li:nth-of-type(3){
      cursor: pointer;
    }
    li{
      margin-bottom: 12px;
      width: 100%;
      clear: both;
      float: left;
      img{
        float: left;
        height: 50px;
        width: 50px;
        margin-right: 15px;
      }
      .name{
        margin-bottom: 9px;
        color: white;
      }
      .name,
      .rank{
        float: left;
      }
      .rank{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color: #D90200;
        margin-right: 5px;
      }
      .tv{
        .name{
          margin-bottom: 1px;
        }
        .tv-rank{
          font-size: 14px;
          letter-spacing: 0;
          line-height: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #D90200;
        }
      }
    }
  }

  .top{
    width: 251px;
    height: 35px;
    background-color: #333333;
  }
.havepoint{
  cursor: pointer;
}
</style>
