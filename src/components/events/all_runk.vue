<template>
    <div class="all-rank overflow">
      <a href="">
        <div class="all-rank-left">
          <img :src="require('../../assets/images/placeholder.png')" alt="">
          <p>全部赛事</p>
          <p>点击查看精武联赛的全部赛事</p>
        </div>
        <div class="all-rank-right">
        <span>
          >
        </span>
        </div>
      </a>
    </div>
</template>

<script>


</script>

<style lang="scss" scoped>
    .all-rank{
      overflow: hidden;
      box-sizing: border-box;
      border: 1px solid #cccccc;
      width: 251px;
      height: 68px;
      padding-left: 5px;
      img{
        width: 61px;
        height: 61px;
        margin-top: 5px;
        float: left;
        margin-right: 10px;
      }
      .all-rank-left{
        width: 200px;
        float: left;
      }
      .all-rank-right{
        width: 19px;
        height: 100%;
        float: right;
        border: 1px solid #cccccc;
        line-height:68px;
        font-size: 28px;
        font-weight:bold;
      }
      p{
        text-align: left;
        margin-top: 5px;
      }
    }

</style>
