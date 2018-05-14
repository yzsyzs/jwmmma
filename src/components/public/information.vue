<template>
  <div class="club-rank">
    <div class="top">
        <ul class="left">
          <router-link  tag="li" :to="{path:item.href}" v-for="(item, index) in information_arr.tags" :key="index">{{item.title}}</router-link>
        </ul>
    </div>
    <!--子路由下面页-->
    <div class="content">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    computed: mapGetters(['information_arr', 'isListNoShow'])
  }

</script>

<style lang="scss" scoped>
  .club-rank{
    font-size: 16px;
    letter-spacing: -0.6px;
    color: #979797;
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
    .router-link-exact-active{
      width: 100px;
      display: inline-block;
      background: url("../../assets/images/@1xsekuai11.png") no-repeat;
      float: left;
      line-height: 40px;
      box-sizing: border-box;
      text-align: center;
      color: #FFFFFF;
    }
    .top{
      height: 44px;
      background-color: #353536;
    }
    .left{
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      float: left;
      margin-top: -2px;
      li{
        cursor: pointer;
        width:100px;
        text-align: center;
        line-height: 40px;

      }
    }
  }


</style>
