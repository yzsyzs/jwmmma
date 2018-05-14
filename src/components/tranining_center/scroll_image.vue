<template>
  <!--滚动通栏-->
  <div class="scroll-rank">
    <div class="left" @click="rightMove"></div>
    <div class="middle">
      <ul :style="{transform:translateX,transition:'all 1s'}">
        <li>
          <img src="../../assets/images/@1xhuanjing1.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/@1xhuanjing2.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/@1xhuanjing3.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/@1xhuanjing14.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/@1xhuanjing5.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/@1xhuanjing6.png" alt="">
        </li>
      </ul>
    </div>
    <div class="right" @click="leftMove"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        arr: [
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        index: 0,
        translateXnum: 0, // 图片滚动时的偏移量
        translateX: '',   // 生成图片偏移时的表达式
        width: 584
      }
    },
    computed: {
      prevIndex () {
//        console.log(this.index)
        if (this.index === this.arr.length - 1) {
          return this.index
        } else if (this.index === 1) {
          return this.index
        }
      }

    },
    watch: {
      index: {
        handler () {
          if (this.index >= this.arr.length - 1) {
            return this.index
          }
          this.translateXnum = this.index * this.width
        }
      },
      translateXnum: {
        handler () {
          this.translateX = 'translateX(' + this.translateXnum + 'px)'
        }
      }
    },
    methods: {
      // 向左移动
      leftMove: function () {
        if (this.index === -(this.arr.length - 2)) {
          return
        }
        this.index--
      },
      // 向右移动
      rightMove: function () {
        if (this.index === 0) {
          return
        }
        this.index++
      }

    }
  }

</script>

<style lang="scss" scoped>
  .scroll-rank{
    width: 100%;
    height: 100%;
    position: relative;
    &>div{
      text-align: center;
      height:100%;
      display:flex;
      justify-content: center;
      align-items: center;
      float: left;
      background-color: white;
    }
    ul{
      position: absolute;
      width: 5000px;
      left: 0;
      top:0;
    }
    li{
      img{
        width: 564px;
        height: 280px;
      }
      width: 564px;
      height: 280px;
      background-color: #F2F2F2;
      float: left;
      position: relative;
      a{
        text-decoration: none;
        color: #4A4A4A;
      }

      .scroll-rank-top{
        position: relative;
        padding: 9px 10px 0 10px;
        height: 40px;
        border-top: 4px solid #D90200;
        border-bottom: 1px solid #CCCDCF;
        font-size: 14px;
        color: #4A4A4A;
        letter-spacing: -0.34px;
        box-sizing: border-box;
        span:first-child{
          float: left;
        }
        span:nth-of-type(2){
          float: right;
        }
      }
      .scroll-rank-bottom{
        padding: 9px 10px 0 10px;
        .name{
          font-weight:bold;
          font-size: 16px;
          color: #353536;
          letter-spacing: -0.39px;
        }
        p:not(:first-child){
          font-size: 12px;
          color: #838383;
          letter-spacing: -0.39px;
        }
        p:nth-of-type(2){
          margin-top: 7px;
        }
        .lf p:not(:first-child){
          text-align: left;
        }
        .rt p:not(:first-child){
          text-align: right;
        }
      }
    }
    li+li{
      margin-left: 21px;
    }
    .middle{
      width: 1150px;
      height: 280px;
      overflow: hidden;
      position: relative;
    }
    .left,
    .right{
      position: absolute;
      top:50%;
      margin-top: -40px;
      width: 80px;
      height: 80px;
      box-sizing: border-box;
      color: white;
      font-family: '宋体';
      font-size: 30px;
      font-weight:bolder;
      cursor: pointer;
      z-index: 800;
      background-color:#000000;
      background-color:rgba(0,0,0,0)
    }
    .left{
      left: 0;
      background-image: url("../../assets/images/@1xzou.png");
    }
    .left:hover{
      background-image: url("../../assets/images/@1xhong_ZUO.png");
    }
    .right{
      right:0;
      background-image: url("../../assets/images/@1xyou.png");
    }
    .right:hover{
      background-image: url("../../assets/images/@1xhong.png");
    }

  }


</style>
