<template>
  <div class="tel-station">
    <div class="top">
      <div class="left">
        <span>电视台</span>
      </div>
    </div>
    <div class="content">
      <img :src="icon" alt="">
      <div class="content-right">
        <p class="name">湖北卫视</p>
        <!--<p class="time">播出时间</p>-->
        <!--<p class="rank">每周四21:20分播出</p>-->
        <p class="plan">《精武门》4月1日起于湖北卫视每周日晚21:20黄金档播出！全新打造、热血归来！</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        icon: require('../../assets/images/@1xhubei.png')
      }
    }
  }

</script>

<style lang="scss" scoped>
  .tel-station{
    overflow: hidden;
    box-sizing: border-box;
    width: 380px;
    height: 158px;
    .left{
      float: left;
      width: 200px;
      height: 40px;
      background: url('../../assets/images/@1xsekuai2 copy.png') no-repeat;
      padding-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      span{
        font-size: 16px;
      }
    }
      img{
        float: left;
        height: 74px;
        width: 90px;
        margin-right: 12px;
        margin-left: 12px;
      }
      span{
        float: right;
      }
    .content{
      padding: 20px 0 20px 0;
      p{
        text-align: left;
      }
      .content-right{
        padding-top: 3px;
      }
      p:first-of-type{
        color: black;
        font-size: 18px;
        font-weight:bold;
      }
      p:nth-of-type(2){
        font-size: 14px;
        margin-top: 6px;
      }
      p:nth-of-type(3){
        font-size: 14px;
        color: #D90200;
        letter-spacing: -0.69px;
      }
      a{
        font-size: 18px;
        color: #353536;
        letter-spacing: -0.77px;
        text-decoration: none;
      }
    }

  }

  .top{
    width: 380px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
    .top-a{
      float: right;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      text-decoration: none;
      margin-right: 5px;
    }
  }
  .plan{
    font-size: 14px;
    color: #D90200;
    letter-spacing: 0;
    line-height: 18px;
    color: #D90200;
  }

</style>
