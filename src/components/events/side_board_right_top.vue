<template>
  <div class="banner-right-top" @click = 'jumpToAllRunk'>
    <img src="../../assets/images/@1xjingwumen.png" alt="">
    <div class="p-div">
      <p>赛事列表</p>
      <span class="time">点击查看精武联赛的全部赛事</span>
    </div>
    <span class="banner-right-top-icon"></span>
  </div>
</template>

<script>
 export default {
   methods: {
     jumpToAllRunk () {
       this.$router.push({path: '/events/all_runk'})
     }
   }
 }
</script>

<style lang="scss" scoped>
  .banner-right-top{

    cursor: pointer;
    width: 380px;
    height: 120px;
    text-align: left;
    position: relative;
    img{
      float: left;
      width: 80px;
      height: 80px;
      margin: 10px 11px 0 13px;
    }
    .p-div{
      padding-top:10px;
    }
    p{
      font-size: 20px;
      color: #353536;
      letter-spacing: -0.64px;
      line-height: 32px;
      font-weight: bold;
      margin-bottom: 11px;
    }
    .time{
      font-size: 16px;
      color: #838383;
      letter-spacing: -0.69px;
    }
    .banner-right-top-icon{
      display: inline-block;
      width: 14px;
      height: 14px;
      position: absolute;
      right: 8px;
      bottom:68px;
      background: url("../../assets/images/@1xjiaobiao copy.png") no-repeat;
    }
  }


</style>
