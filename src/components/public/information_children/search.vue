<template>
  <div class="club-rank">
    <!--子路由下面页-->
    <div class="content" >
      <div>
        <ul>
          <li v-for="item in searchArr.data" @click = 'jumpToTheDetails(item.type,item.infoId)' :key="item.infoId">
            <a >
              <!--根据后台数据type判断显示哪一种类型上不同的类名-->
              <div v-if="item.type == '0'" :class="[{'newz': item.type == '0'}, 'clear']">
                <div class="img-out-box">
                  <img :src="item.image |smallImage(160, 110)" alt="">
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
                <div class="img-out-box" v-for=" (img, index) in item.images" v-if="index<4">
                  <img :src="img |smallImage(160, 110)" alt="" >
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
          <li class="get-more" @click="getMore" v-show="!searchArr.frist" v-if="!searchArr.last">加载更多</li>
        </ul>
        <div class="if-list-no-show" v-if="searchArr.frist">
          <img src="../../../assets/images/@1xlogo111.png" alt="">
          <p>暂无相关搜索结果...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        index: 10,
        arr: [],
        start: 0,
        currentId: 0,
        isGetMore: true
      }
    },
    computed: mapGetters(['searchArr']),
    watch: {
      $route (to) {
        // 进入搜索首页
          this.start = 0
        this.isGetMore = true
        this.getTheData(to)
      }
    },
    mounted () {
      if (this.searchArr.frist === true) {
        this.searchArr.searchData = this.$route.params.id
        this.getTheData(this.$route, this.start)
      }
    },
    methods: {
      defaultData (type = '', start) {
        if (this.isGetMore || this.searchArr.frist) {
          this.$store.dispatch('clearSearchArr')
            .then(
              ()=>{
                this.$store.dispatch('getSearchArr', {
                    search: this.$route.params.id,
                    type: type,
                    tagType: '03',
                    start: start,
                    limit: 10
              })}
            )
        }else {
            this.$store.dispatch('getSearchArr', {
                search: this.$route.params.id,
                type: type,
                tagType: '03',
                start: start,
                limit: 10
            })
        }
      },
      jumpToTheDetails (type, infoId) {
        if (type === '0') {
          this.$router.push({ path: '/news/all/news_details/' + infoId })
          this.$store.dispatch('jumpToNewsDetails', infoId)
        }
        if (type === '1') {
          this.$router.push({ path: '/photo/all/photo_details/' + infoId })
        }
        if (type === '2') {
          this.$router.push({ path: '/video/all/video_details/' + infoId })
          this.$store.dispatch('jumpToVideoDetails', infoId)
        }
        window.scroll(0, 0)
      },
      getMore () {
        this.isGetMore = false
        this.start++
        this.getTheData(this.$router, this.start)
      },
      getTheData (currentRoute, start = 0) {
        // 进入搜索首页
        if (currentRoute.path === ('/home/search/' + encodeURIComponent(this.$route.params.id))) {
          this.type = ''
        } else if (currentRoute.path === ('/home/search/newz/' + encodeURIComponent(this.$route.params.id))) {
          this.type = '0'
        } else if (currentRoute.path === ('/home/search/photo/' + encodeURIComponent(this.$route.params.id))) {
            console.log(typeof (this.searchArr.data[0].type))
            this.type = '1'
        } else if (currentRoute.path === ('/home/search/video/' + encodeURIComponent(this.$route.params.id))) {
          this.type = '2'
        }
        this.defaultData(this.type, start)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .club-rank{
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
    .get-more{
      color: #838383;
      padding: 0;
      margin-top: 50px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      margin-bottom: 80px;
      border: none;
      background-color: #F0EFEF;
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
    cursor: pointer ;
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
  }
  .top{
    width: 100%;
    height: 35px;
    background-color: #333333;
  }

  .newz,
  .video{
    p{
      float: left;
      clear: both;
      text-align: left;
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
      margin-left: 20px;
    }
    .img-icon{
      position: absolute;
      left: 60px;
      top:60px;
      display: inline-block;
      width: 38px;
      height: 38px;
      background: url("../../../assets/images/@1xbofan.png") no-repeat center center;
      z-index: 888;
    }
    p:first-of-type{

      margin-top: 3px;
      text-align: left;
    }
    p:nth-of-type(2){
      margin-top: 20px;
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
