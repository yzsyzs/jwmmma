<template>
  <div class="club-rank">
    <!--子路由下面页-->
    <div class="content">
      <div>
        <ul>
          <li v-for="(item, index) in videoTag" @click="jumpToVideoDetails(item.id)" :key="item.id">
            <a>
              <div v-show="true" :class="[{'video': true}, 'clear']" >
                <div class="mask">
                  <span class="mask-back"></span><span class="mask-icon"></span>
                  <img :src="item.coverImage |smallImage(160, 110)" alt="">
                </div>
                <div class="li-right">
                  <p>{{item.title}}</p>
                  <p>{{item.details}}</p>
                </div>
                <span>{{item.releaseTime | monthDaySecond}}</span>
              </div>
            </a>
          </li>
          <li class="get-more" @click="getMore" v-show="videoTag.length>0" v-if="!videoTag.last">加载更多</li>
        </ul>
        <div class="if-list-no-show" v-if="videoTag.length<=0">
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
        limit: 10
      }
    },
    computed: mapGetters(['videoTag', 'eventsId']),
    methods: {
      jumpToVideoDetails (id) {
        window.scroll(0, 0)
        let currentParam = this.$route.path.slice(1, this.$route.path.indexOf('/', 1))
        let param = this.$route.path.slice(7)
        if (param === '') {
          param = 'all'
        } else if (currentParam === 'players') {
          param = this.$route.path.slice(1, 7)
        } else if (param === '/video') {
          param = 'event'
        }
        this.$router.push({path: '/video/' + param + '/video_details/' + id})
        this.$store.dispatch('jumpToVideoDetails', id)
      },
      getMore () {
        this.limit = this.limit + 10
        if (this.$route.path === '/events/video') {
          // 进入赛事新闻页内容
          this.$store.dispatch('changThenVideoTag', {type: '',
            currentTap: 'eventsVideo',
            option: {
              tagType: '03',
              type: '2',
              tagValueId: this.eventsId,
              start: 0,
              limit: this.limit
            }
          })
        } else {
          this.$store.dispatch('changThenVideoTag', {type: this.type, limit: this.limit})
        }
      }
    },
    watch: {
      // 判断点击新闻首页下每个tag发送请求改变vuex里的数据
      $route (to) {
        if (typeof (to.params.id) === 'undefined') {
          this.type = ''
        } else {
          this.type = to.params.id
        }
        this.limit = 10
        this.$store.dispatch('changThenVideoTag', {type: this.type, limit: this.limit})
      }
    },
    mounted () {
      // 判断进入的是赛事页里的新闻还是新闻首页发送请求改变vuex里的数据
      if (this.$route.path === '/video') {
        // 传入option
        this.$store.dispatch('changThenVideoTag', {type: '', limit: this.limit})
      } else if (this.$route.path === '/events/video') {
        // 进入赛事新闻页内容
        this.$store.dispatch('changThenVideoTag', {type: '',
          currentTap: 'eventsVideo',
          option: {
            tagType: '03',
            type: '2',
            tagValueId: this.eventsId,
            start: 0,
            limit: this.limit
          }
        })
      } else if (this.$route.path === '/players/player_details/video/'+ this.$route.params.id) {
        // 切换的时候初始化请求的页数
        this.limit = 10
        this.$store.dispatch('changThenVideoTag', {type: '', limit: this.limit})
      } else {
        if (typeof (this.$route.params.id) === 'undefined') {
          this.type = ''
        } else {
          this.type = this.$route.params.id
        }
        this.limit = 10
        this.$store.dispatch('changThenVideoTag', {type: this.type, limit: this.limit})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .club-rank{
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
    ul{
      overflow: hidden;
    }
    .get-more{
      color: #838383;
      padding: 0;
      margin-top: 20px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      border: none;
      background-color: #F0EFEF;
      margin-bottom: 80px;
    }
    .content{
      .if-list-no-show{
        margin: 160px auto;
        p{
          float: none;
          text-align: center;
          margin-top: 12px;
          font-size:16px;
          color: #838383;
        }
      }
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
    img{
      margin-top: 10px;
    }
    img+img{
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
      z-index: 888;

    }
    .mask-icon{
      position: absolute;
      left: 60px;
      top:60px;
      display: inline-block;
      width: 38px;
      height: 38px;
      background: url("../../../assets/images/@1xbofan.png") no-repeat center center;
      z-index: 888;
    }
  }
  li:hover{
    p:first-of-type{
      color: red;
    }
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
