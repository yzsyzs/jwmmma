<template>
  <div class="footer">
    <div class="w center">
      <ul>
        <li><a :href="'/home'">首页</a><span>|</span></li>
        <li><a :href="'/events'">赛事 </a><span>|</span></li>
        <li><a :href="'/video'">视频</a><span>|</span></li>
        <li><a :href="'/players'">选手</a><span>|</span></li>
        <li><a :href="'/news'">资讯</a><span>|</span></li>
        <li><a :href="'/photo'">图片</a><span>|</span></li>
        <li><a :href="'/ticket'">票务</a><span>|</span></li>
        <li><a :href="'/jm_college'">精武门百科</a><span>|</span></li>
        <li><a onclick="window.open('/training_center')">国际俱乐部</a></li>
      </ul>

    <p class="company">
      广州市思成路19号宏太智慧谷8号楼601室
    </p >
    <p class="address">
      <!--广州市大象体育产业有限公司-->
    </p>
    <p class="address">
      广州市大象体育产业有限公司 版权所有,
      <a :href="'http://www.miitbeian.gov.cn'" target="_blank" rel="nofollow" class="address">粤ICP备17139192号</a>
    </p>
    </div>
  </div>
</template>

<script>


</script>

<style lang="scss" scoped>
  .footer{
    height: 117px;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    box-sizing: border-box;
    border: 1px solid #000;
    background: url("../../assets/images/@1xdise2.png");;
    .lan{
      letter-spacing: -0.65px;
      position: absolute;
      top: 20px;
      right: 0;
    }
    .national-flag {
      position: absolute;
      top: 20px;
      right:42px;
    }
    .center{
      position: relative;
      height: 117px;
      box-sizing: border-box;
      padding-top: 12px;
    }
  }
  /*//icon*/
  /*ul:first-of-type{*/
    /*position: absolute;*/
    /*left:0;*/
    /*top: 16px;*/
    /*li{*/
      /*float: left;*/
    /*}*/
    /*li+li{*/
      /*margin-left: 15px;*/
    /*}*/
  /*}*/
  //列表
  ul:nth-of-type(1){
    display: flex;
    justify-content: center;
    a,span{
      color: #FFFFFF;;
    }
    li{
      float: left;
    }
    span{
      margin: 0 12px;
    }
  }

  .company,
  .address{
    font-size: 12px;
    letter-spacing: 0;
    line-height: 20px;
    text-decoration: none;
    color: #fff;
  }
  .company{
    margin-top: 12px;
  }
</style>
