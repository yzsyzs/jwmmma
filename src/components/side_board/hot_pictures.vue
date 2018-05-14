<template>
  <div class="club-rank">
    <div class="top">
      <div class="left">
        <span>热点图集</span>
      </div>
    </div>
    <div class="content">
      <ul :class="{current:isMove,overflow:true}" @mouseover = 'moveIn' @mouseout="moveOut" v-if="hotPicturesArr.length > 0 ">
        <li v-for="(item,index) in hotPicturesArr"  :key="item.id" @click = jumpToPhotoDetail(item.id) v-if="index <= 5">
          <div class="top-block">
            <p class="show-runk-name">{{item.title| getLengthPonit(0,30)}}</p>
            <div class="top-imgs">
              <img :src="data.url | smallImage(120, 83)" v-for="(data, index) in item['infoPhotoImages'] " v-if="index<3">
            </div>
          </div>
          <a >
            <img :src="arrow" alt="">
            <div class="overflow">
              <span class="runk-name">{{item.title|getLengthPonit(0,26)}}</span>
              <div class="p-div">
                <p></p>
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
  export default{
    data () {
      return {
        isMove: true,
        arr: [
          {
            icon: require('../../assets/images/@1xsanjiao_x.png'),
            name: '雅桑克莱进军诸神16强',
            title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
            runkImg: {
              backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
            },
            rank: 1
          }
        ],
        hotPicturesArr: [
          {
            releaseTime: 1501603200000,
            id: '',
            title: ''
          }
        ],
        arrow: require('../../assets/images/@1xsanjiao_x.png')
      }
    },
    mounted () {
      this.$http.getHotPhoto().then(res => {
        this.hotPicturesArr = res.data
      })
    },
    methods: {
      jumpToPhotoDetail (id) {
        this.$store.dispatch('jumpToPhotoDetails', id)
        this.$router.push({path: '/photo/hot_photo/photo_details/' + id})
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
    .top-block{
      display: none;
      font-size: 14px;
      color: #353536;
      letter-spacing: 0;
      padding-bottom: 20px;
      border-bottom: 1px dashed #979797;
      cursor: pointer;
      p{
        margin-top: 20px;
      }
      img{
        margin-top: 10px;
        width: 120px;
        height: 83px;
      }
      .top-imgs{
        display: flex;
        justify-content: space-between;
      }
    }
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
      img{
        float: left;
        overflow: hidden;
        margin-top: 29px;
        width: 6px;
        height: 9px;
      }
      a{
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.6px;
        line-height: 24px;
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
      }

    }
  }
  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
  }
  li:hover{
    .top-block{
      display: block;
      .show-runk-name{
        font-weight: bolder;
      }
    }
    a:nth-of-type(1){
      display: none;
    }
  }
  .current {
    li:nth-of-type(1){
      .top-block{
        display: block;
        .show-runk-name{
          font-weight: bolder;
        }
      }
      a:nth-of-type(1){
        display: none;
      }
    }
  }
  ul{
    /*height: 242px;*/
  }
</style>
