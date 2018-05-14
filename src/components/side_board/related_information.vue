<template>
  <div class="club-rank">
    <div class="top">
      <div class="left">
        <span>{{title}}</span>
      </div>
    </div>
    <div class="content">
      <ul v-if="arr.length > 0">
        <li v-for="item in arr" class="top-block" @click="jumpToNewPage(item.type, item.infoId)" :key="item.id">
          <div v-if="item.type== '0'" class="top-block-img">
          <a>
            <span class="imgs-title">{{item.createTime | normalTime(2)}}</span>
            <div class="img-out-box">
              <img :src="item.image" alt="">
            </div>
            <div class="overflow">
              <span class="runk-name">{{item.title}}</span>
              <div class="p-div">
                <p>{{item.details}}</p>
              </div>
            </div>
          </a>
        </div>
        <div v-if="item.type== '1'">
            <p class="title-p">{{item.title}}</p>
            <div class="top-imgs">
              <div class="top-img-box">
                <span class="imgs-title">{{item.createTime | normalTime(2)}}</span>
                <div class="img-out-box" v-for="(data,index) in item.images" v-if="index<3">
                  <img :src="data">
                </div>

              </div>
            </div>
        </div>
          <div v-if="item.type== '2'" class="top-block-img">
            <a>
              <span class="imgs-title">{{item.createTime | normalTime(2)}}</span>
              <div class="img-out-box">
                <img :src="item.image" alt="">
              </div>
              <div class="overflow">
                <span class="runk-name">{{item.title}}</span>
                <div class="p-div">
                  <p>{{item.details}}</p>
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <div v-else class="undata">
        <img src="../../assets/images/@1xlogo111.png" alt="">
        <p>暂无数据</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      title: {
        type: String,
        default: '相关资讯'
      },
      arr: {
        default: [],
        type: Array
      }
    },
    methods: {
      jumpToNewPage (type, infoId) {
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
      }
    }
  }

</script>

<style lang="scss" scoped>
  // 新闻列表
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
      width: 100%;
      clear: both;
      float: left;
      box-sizing: border-box;
      padding-bottom: 20px;
      border-bottom: 1px dashed #979797;
      cursor: pointer;
      img{
        float: left;
        width: 120px;
        height: 70px;
        overflow: hidden;
      }
      .img-out-box{
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
        color: black;
        font-size: 16px;
        letter-spacing: -0.6px;
        line-height: 24px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

      }


      .p-div{
        float: left;
        width: 240px;
        height: 40px;
        margin-top: 9px;
        margin-left: 10px;
        overflow: hidden;
        font-size: 14px;
        color: #353536;
        letter-spacing: 0;
        line-height: 20px;
      }
      .p-div p{
        margin-top: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;


      }
    }
    li:hover{
      .runk-name{
        color: red;
      }
      .title-p{
        color: red;
      }
    }
    .top-block-img{
      position: relative;
    }
  }
  .title-p{
  font-weight: bolder;
  font-size: 16px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  }
  //图片列表
  .top-block{
    font-size: 14px;
    color: #353536;
    letter-spacing: 0;
    padding-bottom: 20px;
    border-bottom: 1px dashed #979797;
    p{
      margin-top: 20px;
    }
    .top-imgs{
      position: relative;
      display: flex;
      justify-content: space-between;
    }
    .imgs-title{
      width: 120px;
      height: 30px;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      background-color: rgba(0,0,0,0.5);
      position: absolute;
      left: 0;
      bottom: 0;
      line-height: 30px;
      text-align: center;
      z-index: 888;

    }
    .top-img-box>div+div{
      margin-left:9px;
    }
    .top-img-box{
      div{
        margin-top: 10px;
      }
    }
  }
  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
  }
  li img{
    transition: transform .7s;
  }
  li img:hover{
    transition: all .7s;
    transform:scale(1.2 ,1.2);
  }
  .undata{
    text-align: center;
    font-size: 16px;
    color: #838383;
    letter-spacing: -0.6px;
    margin-top: 50px;
  }
</style>
