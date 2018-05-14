<template>
  <div class="club-rank">
    <!--子路由下面页-->
    <div class="content">
      <div>
        <ul>
          <li v-for="(item,index) in newsTag" :key="item.id"  @click="jumpToNewsDetails(item.id)">
            <a>
              <!--根据后台数据type判断显示哪一种类型上不同的类名-->
              <div v-if="true" :class="[{'newz': true}, 'clear']" >
                <div class="img-out-box">
                  <img :src="item.image |smallImage(160, 110)" alt="">
                </div>
                <div class="li-right">
                  <p>{{item.title}}</p>
                  <p  class="li-right-content">{{item.summary}}</p>
                </div>
                <span>{{item.releaseTime | monthDaySecond }}</span>
              </div>
            </a>
          </li>
          <li class="get-more" @click="getMore" v-show="newsTag.length>0" v-if="!newsTag.last">加载更多</li>
        </ul>
        <div class="if-list-no-show" v-if="newsTag.length<=0">
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
        limit: 10,
        type: ''
      }
    },
    computed: mapGetters(['newsTag', 'information_arr', 'eventsId']),
    methods: {
      jumpToNewsDetails (id) {
        let currentParam = this.$route.path.slice(1, this.$route.path.indexOf('/', 1))
        let param
        if (currentParam === 'events') {
          param = this.$route.path.slice(1, 7)
        } else if (currentParam === 'players') {
          param = this.$route.path.slice(1, 7)
        } else {
          param = this.$route.path.slice(6)
        }
        this.$store.dispatch('jumpToNewsDetails', id)
        window.scroll(0, 0)
        if (param === '') {
          param = 'all'
        }
        this.$router.push({path: '/news/' + param + '/news_details/' + id})
      },
      getMore () {
        this.limit = this.limit + 10
        if (this.$route.path === '/events/newz') {
          // 进入赛事新闻页内容
          this.$store.dispatch('changTheNewTag', {type: '',
            currentTap: 'eventsNewz',
            option: {
              tagType: '03',
              type: '0',
              tagValueId: this.eventsId,
              start: 0,
              limit: this.limit
            }
          })
        } else {
          this.$store.dispatch('changTheNewTag', {type: this.type, limit: this.limit})
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
        this.$store.dispatch('changTheNewTag', {type: this.type, limit: this.limit})
      }
    },
    mounted () {
      // 判断进入的是赛事页里的新闻还是新闻首页发送请求改变vuex里的数据
//      console.log(this.$route.path)
      if (this.$route.path === '/news' || this.$route.path === '/news/') {
        // 传入option
        this.$store.dispatch('changTheNewTag', {type: '', limit: this.limit})
      } else if (this.$route.path === '/events/newz') {
        // 进入赛事新闻页内容
        this.$store.dispatch('changTheNewTag', {type: '',
          currentTap: 'eventsNewz',
          option: {
            tagType: '03',
            type: '0',
            tagValueId: this.eventsId,
            start: 0,
            limit: this.limit
          }
        })
      } else if (this.$route.path === '/players/player_details/newz/'+ this.$route.params.id) {
//        alert('进入选手页里的新闻tag')
        this.$store.dispatch('changTheNewTag', {type: '', limit: this.limit})
      } else {
        // 解决点击到tap情况下按刷新数据
        if (typeof (this.$route.params.id) === 'undefined') {
          this.type = ''
        } else {
          this.type = this.$route.params.id
        }
        this.limit = 10
        this.$store.dispatch('changTheNewTag', {type: this.type, limit: this.limit})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .club-rank{
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
    padding-bottom: 20px;
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
    &>p:nth-of-type(1){
      overflow: hidden;
    }
    .li-right-content{
      overflow: hidden;
      width: 620px;
      height: 80px;
      text-align: left;
    }
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
</style>
