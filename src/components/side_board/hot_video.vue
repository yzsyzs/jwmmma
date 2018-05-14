<template>
  <div class="club-rank">
    <div class="top">
      <div class="left">
        <span>热门视频</span>
      </div>
    </div>
    <div class="content">
      <ul :class="{current:isMove,overflow:true}" @mouseover = 'moveIn' @mouseout="moveOut" v-if="hotVideoArr.length > 0">
        <li v-for="(item,index) in hotVideoArr" :key = 'index.id' @click="jumpToVideoDetails(item.id)" v-if="index <= 5">
          <a >
            <span class="mask-back"></span><span class="mask-icon"></span>
            <img :src="item.coverImage |smallImage(120, 83)" alt="">
            <div class="overflow">
              <span class="runk-name">{{item.title}}</span>
              <div class="p-div-haveimg">
                <p>{{item.details}}</p>
              </div>
            </div>
          </a>
          <a>
            <img :src="arrow" alt="">
            <div class="overflow">
              <span class="runk-name">{{item.title|getLengthPonitInside(44)}}</span>
              <div class="p-div">
                <p>{{item.details}}</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div v-else class="all-undata">
        <img src="../../assets/images/@1xlogo111.png" alt="">
        <p>敬请期待</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        isMove: true,
        arrow: require('../../assets/images/@1xsanjiao_x.png'),
        hotVideoArr: []
      }
    },
    computed: mapGetters(['information_arr']),
    mounted () {
      this.$http.getVideoHot().then(res => {
        this.hotVideoArr = res.data
      })
    },
    methods: {
      jumpToVideoDetails (id) {
        this.$router.push({path: '/video/hot_video/video_details/' + id})
        this.$store.dispatch('jumpToVideoDetails', id)
        window.scrollTo(0, 0)
      },
      moveIn () {
        this.isMove = false
      },
      moveOut () {
        this.isMove = true
      }
    }
  }

</script>

<style lang="scss" scoped>
  .club-rank{
    overflow: hidden;
    box-sizing: border-box;
    width: 380px;
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
      position: relative;
      width: 100%;
      clear: both;
      float: left;
      box-sizing: border-box;
      img{
        float: left;
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
        letter-spacing: -0.6px;
        line-height: 24px;
        font-weight: bold;
        color: #353536 ;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

      }


      .p-div,
      .p-div-haveimg{
        float: left;
        width: 240px;
        height: 40px;
        margin-top: 9px;
        margin-left: 10px;
        font-size: 14px;
        color: #353536;
        letter-spacing: 0;
        line-height: 20px;
      }
      .p-div p{
        width: 350px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

      }
      .p-div-haveimg p{
        word-wrap: break-word;
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

      }
    }
    li:hover{
      box-sizing: inherit;
      padding-bottom: 20px;
      border-bottom: 1px dashed #979797;
      a:nth-of-type(1){
        display: block;
      }
      a:nth-of-type(2){
        display: none;
      }
      img{
        width: 120px;
        height: 83px;
      }
    }

    li{
      .runk-name{
        font-size: 16px;
        color: #353535;
        letter-spacing: -0.6px;
        line-height: 24px;

      }
      img{
        margin-top: 29px;
        width: 6px;
        height: 9px;
      }
      .p-div{
        width: 341px;
        font-size: 14px;
        color: #353535;
        letter-spacing: -0.6px;
        line-height: 24px;
        margin-top: 0;
        height: 20px;
      }

    }
  }

  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
  }
  li> a:nth-of-type(1){
    display: none;
  }
  li:hover{
    display: block;
    .runk-name{
      font-size: 14px;
      margin-top: 24px;
    }
  }
  .current{
    li:nth-of-type(1){
      border-bottom: 1px dashed #979797;
      padding-bottom: 20px;
      a:nth-of-type(1){
        display: block;
      }
      a:nth-of-type(2){
        display: none;
      }
      img{
        width: 120px;
        height: 83px;
      }
      .runk-name{
        font-size: 14px;
        margin-top: 24px;
      }
    }
  }
  .mask-back{
    display: inline-block;
    width: 120px;
    height: 83px;
    opacity: 0.41;
    background: #000000;
    position: absolute;
    left: 0;
    top: 29px;
    filter:alpha(opacity=41);
    -moz-opacity:0.41;
    -khtml-opacity: 0.41;
    opacity: 0.41;
    z-index: 888;

  }
  .mask-icon{
    position: absolute;
    left: 45px;
    top:52px;
    display: inline-block;
    width: 38px;
    height: 38px;
    background: url("../../assets/images/@1xbofan.png") no-repeat center center;
    z-index: 888;
  }
  /*.content img{*/
    /*transition: transform .7s;*/
  /*}*/
  /*.content:hover img{*/
    /*transition: all .7s;*/
    /*transform:scale(1.2 ,1.2);*/
  /*}*/
</style>
