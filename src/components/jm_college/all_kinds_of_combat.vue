<template>
  <div class="club-rank">
    <div class="top">
      <div class="left">
        <span>各类格斗</span>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in information_arr.allKingsOfCombat">
          <a>
            <img :src="item.icon" alt="">
            <div class="overflow">
              <span class="runk-name">{{item.name}}</span>
              <div class="p-div">
                <p>{{item.title}}</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    props: {
      title: {
        type: String,
        default: '热点资讯'
      }
    },
    computed: mapGetters(['information_arr'])
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
      width: 100%;
      clear: both;
      float: left;
      box-sizing: border-box;
      padding-bottom: 20px;
      border-bottom: 1px dashed #979797;
      img{
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
      a:hover{
        cursor: inherit;
      }
      .runk-name{
        display: inline-block;
        margin-top: 20px;
        margin-left: 10px;
        float: left;
        line-height: 24px;
        font-weight: bold;
        font-size: 16px;
        color: #353536;
        letter-spacing: 0;
      }


      .p-div{
        float: left;
        width: 240px;
        height: 40px;
        margin-top: 9px;
        margin-left: 10px;
        overflow: hidden;
        font-size: 12px;
        color: #353536;
        letter-spacing: 0;
        line-height: 20px;
      }
    }
  }

  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
  }

</style>
