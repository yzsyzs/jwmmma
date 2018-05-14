<template>
  <div class="club-rank">
    <div class="top">
     <span>最新资讯</span>
    </div>
    <!--子路由下面页-->
    <div class="content">
      <div>
        <ul>
          <li v-for="item in arr" @click = 'jumpToTheDetails(item.type,item.infoId)' :key="item.infoId">
            <a >
            <!--根据后台数据type判断显示哪一种类型上不同的类名-->
            <div v-if="item.type == '0'" :class="[{'newz': item.type == '0'}, 'clear']">
              <div class="img-out-box">
                <img :src="item.image | smallImage(160, 110)" alt="">
              </div>
              <div class="li-right">
                <p>{{item.title}}</p>
                <p>{{item.details | getLengthPonit(0,80)}}</p>
              </div>
              <span>{{item.createTime | monthDaySecond }}</span>
            </div>
            <div v-if="item.type == '1'" :class="[{'photo': item.type == '1'}, 'clear']">
              <p>{{item.title}}</p>
              <span>{{item.createTime | monthDaySecond }}</span>
              <div class="img-out-box" v-for=" (img, index) in item.image" v-if="index < 4">
                <img :src="img | smallImage(160, 110)" alt="" >
              </div>

            </div>
            <div v-if="item.type == '2'" :class="[{'video': item.type == '2'}, 'clear']">
            <div class="mask">
              <img :src="item.image |smallImage(160, 110)" alt="">
              <span class="mask-back"></span><span class="img-icon"></span>
            </div>
              <div class="li-right">
                <p>{{item.title}}</p>
                <p>{{item.details | getLengthPonit(0,80)}}</p>
              </div>
              <span>{{item.createTime | monthDaySecond}}</span>
            </div>
            </a>
          </li>
          <li class="get-more" @click="getMove" v-if="!isLast">加载更多</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    data () {
      return {
        index: 10,
        arr: [],
        isLast: false
      }
    },
    computed: mapGetters(['homeNews']),
    mounted () {
      this.$http.getNewInfo(this.index).then(res => {
        for (var key in res.data.data) {
          if (res.data.data[key].type === '1') {
            res.data.data[key].image = res.data.data[key].image.split(',')
          }
        }
        this.arr = res.data.data
      })
    },
    methods: {
      jumpToTheDetails (type, infoId) {
        if (type === '0') {
          this.$router.push({ path: '/news/all/news_details/' + infoId })
          this.$store.dispatch('jumpToNewsDetails', infoId)
        }
        if (type === '1') {
          this.$router.push({ path: '/photo/all/photo_details/' + infoId })
        }
        if (type === '2') {
//          console.log(infoId)
          this.$router.push({ path: '/video/all/video_details/' + infoId })
          this.$store.dispatch('jumpToVideoDetails', infoId)
        }
        window.scroll(0, 0)
      },
      getMove () {
        this.index = this.index + 10
        this.$http.getNewInfo(this.index).then(res => {
          for (var key in res.data.data) {
            if (res.data.data[key].type === '1') {
              res.data.data[key].image = res.data.data[key].image.split(',')
            }
          }
          this.arr = res.data.data
          this.isLast = res.data.last
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .club-rank{
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
    .top{
      height: 44px;
      background-color: #353536;
      span{
        width: 100px;
        display: inline-block;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.6px;
        background-image: url("../../assets/images/@1xsekuai1.png");
        float: left;
        line-height: 41px;
        padding-left: 13px;
        text-align: left;
        box-sizing: border-box;
      }
    }
    .get-more{
      color: #838383;
      padding: 0;
      margin-top: 50px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      border: none;
      background-color: #F0EFEF;
      margin-bottom: 80px;
    }
  }

  .content li{
    position: relative;
    width: 100%;
    clear: both;
    float: left;
    box-sizing: border-box;
    padding: 20px 0;
    border-bottom: 1px dashed #838383 ;
    cursor: pointer;
    .img-out-box{
      float: left;
      width: 160px;
      height: 110px;
      overflow: hidden;
    }
    img{
      float: left;
      width: 160px;
      height: 110px;
    }
    span{
      position: absolute;
      right: 10px;
      bottom: 20px;
    }
    a{
      font-size: 14px;
      letter-spacing: -0.54px;
      line-height: 20px;
      color: #838383;
      text-decoration: none;
    }
  }


  .li-right{
    padding-left: 10px;
    overflow: hidden;
    p:nth-of-type(2){
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .top{
    width: 100%;
    height: 35px;
    background-color: #333333;
  }

  .newz,
  .video{
    .mask-back{
      display: inline-block;
      width: 160px;
      height: 110px;
      opacity: 0.41;
      background: #000000;
      position: absolute;
      left: 0;
      top: 20px;
      filter:alpha(opacity=41);
      -moz-opacity:0.41;
      -khtml-opacity: 0.41;
      opacity: 0.41;

    }
    p{
      float: left;
      clear: both;
      text-align: left;
    }
    .img-icon{
      display: inline-block;
      width: 38px;
      height: 38px;
      background: url("../../assets/images/@1xbofan.png");
      position: absolute;
      left: 60px;
      top: 60px;
    }
  }

  .photo{
    p{
      text-align: left;
    }
    div{
      float: left;
      width: 160px;
      height: 110px;
      overflow: hidden;
      margin-top: 10px;
    }
    div+div{
      margin-left: 20px;
    }
    span{
      position: absolute;
      right: 10px;
      top: 20px;
    }
  }
    p:first-of-type{
      font-size: 16px;
      color: #353536;
      letter-spacing: -0.6px;
      font-weight: bold;
    }
  .newz,
  .video{
      p{
        margin-left: 20px;
      }
      p:first-of-type{

        margin-top: 3px;
        text-align: left;
      }
    p:nth-of-type(2){
      margin-top: 20px;
    }
  }
  li:hover{
    p:first-of-type{
      color: red;
    }
  }
  li img{
    transition: transform .7s;
  }
  li img:hover{
    transition: all .7s;
    transform:scale(1.2 ,1.2);
  }
  .mask{
    width: 160px;
    height: 110px;
    overflow: hidden;
    float: left;
  }
  .mask img{
    transition: transform .7s;
  }
  .mask:hover img{
    transition: all .7s;
    transform:scale(1.2 ,1.2);
  }
</style>
