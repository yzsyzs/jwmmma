<template>
  <div class="club-rank">
    <!--子路由下面页-->
    <div class="content">
      <div>
        <ul>
          <li v-for="(item,index) in photoTag" @click="jumpToPhoto(item.id)" :key="index.id">
            <a>
              <!--根据后台数据type判断显示哪一种类型上不同的类名-->
              <div v-show="true" :class="[{'photo': true}, 'clear']">
                <p>{{item.title}}</p>
                <span>{{item.releaseTime | monthDaySecond}}</span>
                <div class="img-out-box" v-for="(img, index) in item.infoPhotoImages" v-if="index<4">
                  <img :src="img.url | smallImage(160, 110)" alt="" >
                </div>
              </div>
            </a>
          </li>
          <li class="get-more" @click="getMore" v-show="photoTag.length>0" v-if="!photoTag.last">加载更多</li>
        </ul>
        <div class="if-list-no-show" v-if="photoTag.length<=0">
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
    computed: mapGetters(['photoTag', 'eventsId']),
    methods: {
      jumpToPhoto (id) {
        window.scroll(0, 0)
        let currentParam = this.$route.path.slice(1, this.$route.path.indexOf('/', 1))
        let param = this.$route.path.slice(7)
        if (param === '') {
          param = 'all'
        } else if (currentParam === 'players') {
          param = this.$route.path.slice(1, 7)
        } else if (param === '/photo') {
          param = 'event'
        }
        this.$store.dispatch('jumpToPhotoDetails', id).then(() => {
          this.$router.push({path: '/photo/' + param + '/photo_details/' + id})
        })
      },
      getMore () {
        this.limit = this.limit + 10
        if (this.$route.path === '/events/photo') {
          this.$store.dispatch('changThePhotoTag', {type: '',
            currentTap: 'eventsPhoto',
            option: {
              tagType: '03',
              type: '1',
              tagValueId: this.eventsId,
              start: 0,
              limit: this.limit
            }})
        } else {
          this.$store.dispatch('changThePhotoTag', {type: this.type, limit: this.limit})
        }
      }
    },
    watch: {
      // 判断点击新闻首页下每个tag发送请求改变vuex里的数据
      $route (to) {
//        console.log(this.type)
        if (typeof (to.params.id) === 'undefined') {
          this.type = ''
        } else {
          this.type = to.params.id
        }
        this.limit = 10
        this.$store.dispatch('changThePhotoTag', {type: this.type, limit: this.limit})
      }
    },
    mounted () {
      // 判断进入的是赛事页里的图片还是图片首页发送请求改变vuex里的数据
//      console.log(this.$route.path)
      if (this.$route.path === '/photo') {
        // 传入option
        this.$store.dispatch('changThePhotoTag', {type: '', limit: this.limit})
      } else if (this.$route.path === '/events/photo') {
        this.$store.dispatch('changThePhotoTag', {type: '',
          currentTap: 'eventsPhoto',
          option: {
            tagType: '03',
            type: '1',
            tagValueId: this.eventsId,
            start: 0,
            limit: this.limit
          }})
      } else if (this.$route.path === '/players/player_details/photo/'+ this.$route.params.id) {
//        alert('进入选手详情页里的图片tag')
        this.$store.dispatch('changThePhotoTag', {type: '', limit: this.limit})
      } else {
        // 解决点击到tap情况下按刷新数据
        if (typeof (this.$route.params.id) === 'undefined') {
          this.type = ''
        } else {
          this.type = this.$route.params.id
        }
        this.limit = 10
        this.$store.dispatch('changThePhotoTag', {type: this.type, limit: this.limit})
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
