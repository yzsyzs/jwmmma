<template>
  <div class="club_intro">
    <div class="top">
      <div class="left">
        <span>俱乐部简介</span>
      </div>
    </div>
    <div class="content">
        <!--<p >公司名称：{{clubDetails.corporateName}}</p>-->
        <!--<p >中文全称/中文简称：{{clubDetails.fullName}}</p>-->
        <!--<p >英文全称/英文简称：Guangzhou K9 Fight Club/Guangzhou K9</p>-->
        <!--<p >联系人：{{clubDetails.contacts}}</p>-->
        <!--<p >联系电话：{{clubDetails.contactNumber }}</p>-->
        <!--<p >联系邮箱：{{clubDetails.contactEmail}}</p>-->
        <!--<p >联系地址：{{clubDetails.contactAddress}}</p>-->
        <div class="text-indent" v-html="clubDetails.detail"></div>
      <!--<div class="img-box">-->
        <!--<img src='../../assets/images/@1x视频.png' alt="">-->
      <!--</div>-->

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        icon: require('../../assets/images/@1xhubei.png')
      }
    },
    computed: mapGetters(['clubDetails'])
  }

</script>

<style lang="scss" scoped>
  .club_intro{
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
    .left{
      height: 100%;
      width: 150px;
      background: url('../../assets/images/@1xsekuai2 copy.png') no-repeat;
      padding-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: white;
    }
    span{
      float: right;
    }
    .content{
      padding: 13px 10px 20px 10px;
      div:first-of-type{
        text-align: left;
        font-size: 16px;
        color: #171718;
        letter-spacing: -0.69px;
        line-height: 36px;
      }

    }
  }
  .top{
    width: 820px;
    height: 44px;
    line-height: 44px;
    background-color: #353536;
  }
  .text-indent{
    margin-top: 13px;
  }
  .img-box{
    text-align: center;
    height: 310px;
    margin: 15px 0;
    img{
      width: 694px;
    }
  }
</style>
