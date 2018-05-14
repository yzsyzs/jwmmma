<template>
  <div class="club-rank">
    <!--子路由下面页-->
    <div class="content" >
      <div>
        <ul>
          <li v-for="item in indexTap.data" @click = 'jumpToTheDetails(item.type,item.infoId)' :key="item.infoId">
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
          <li class="get-more" @click="getMore" v-if="!indexTap.last">加载更多</li>
        </ul>
        <div class="if-list-no-show" v-if="indexTap.frist">
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
        currentId: 0
      }
    },
    computed: mapGetters(['eventsId', 'indexTap']),
    mounted () {
      // 如果是赛事动态页
      if (this.$route.path === '/events') {
        this.$http.getNowSeason().then(res => {
          this.currentArr = res.data
          // 判断是否是当前赛站,并拿到赛站的所有内容并倒序
          for (let key in this.currentArr.sites.reverse()) {
            if (this.currentArr.sites[key].currentCompetitionSite === '01') {
              this.currentClubArr = this.currentArr.sites[key]
              // 更改选的中赛季id
              this.$store.dispatch('getFristId', this.currentArr.sites[key].id)
              this.currentId = this.currentArr.sites[key].id
              // 清空之前的数组
              this.$store.dispatch('clearIndexArr')
              // 根据拿到的id设置发送的id
              this.$store.dispatch('getIndexTap', {
                type: '0,1,2',
                tagType: '03',
                tagValueId: this.currentId,
                start: this.start,
                limit: 10
              })
            }
          }
        })
        // 如果进入的路由是/events/
      } else if (this.$route.path === '/events/') {
        this.$store.dispatch('clearIndexArr')
        setTimeout(() => {
          this.$store.dispatch('getIndexTap', {
            type: '0,1,2',
            tagType: '03',
            tagValueId: this.eventsId,
            start: this.start,
            limit: 10
          })
        }, 500)
      } else if (this.$route.path === ('/players/player_details/'+this.$route.params.id) ){
        // 其他类别
        // 初始化页数
        this.start = 0
        // 清空数组
        this.$store.dispatch('clearIndexArr')
        // 请求数据
        this.$store.dispatch('getIndexTap', {
          curentTap: 'playerDetails',
          option: {
            start: this.start,
            limit: 10
          }
        })
        //  其他类别
      } else {
      }
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
      getMore () {
        this.start++
        // 如果是赛事动态页
        if (this.$route.path === '/events' || this.$route.path === '/events/') {
          this.$store.dispatch('getIndexTap', {
            type: '0,1,2',
            tagType: '03',
            tagValueId: this.eventsId,
            start: this.start,
            limit: 10
          })
          // 如果是其他页面
        } else if (this.$route.path === ('/players/player_details/'+this.$route.params.id)) {
          this.$store.dispatch('getIndexTap', {
            curentTap: 'playerDetails',
            option: {
              start: this.start,
              limit: 10
            }
          })
        }
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
