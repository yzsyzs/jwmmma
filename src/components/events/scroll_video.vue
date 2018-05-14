<template>
  <!--滚动通栏-->
  <div class="scroll-rank">
    <div class="left" @click="rightMove"><</div>
    <div class="middle">
      <ul :style="{transform:translateX,transition:'all 1s'}">
        <li v-for="(li, itemIndex) in arr" :key="li.id" @click = 'changTheVideo(itemIndex)' >
          <a>
            <div class="mask">
              <span class="mask-back"></span><span class="mask-icon"></span>
              <img :src="li.coverImage" alt="" :class="{on: itemIndex === currentIndex}">
            </div>
            <p>{{li.title}}</p>
          </a>
        </li>
      </ul>
    </div>

    <div class="right" @click="leftMove">></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        arr: [
        ],
        currentIndex: 0,
        index: 0,
        translateXnum: 0, // 图片滚动时的偏移量
        translateX: '',   // 生成图片偏移时的表达式
        width: 190
      }
    },
    computed: {
      ...mapGetters(['eventsDetails']),
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
        // 0 4 0 5  0 3 0 2 0 1
        // 0 0 0 -1 0 1 0 2 0 3
//        console.log(this.index, -(this.arr.length - 4))
        if (this.index <= -(this.arr.length - 4)) {
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
      },
      // 点击进入哪个视频
      changTheVideo (index) {
        this.currentIndex = index
        // 设置点击的数组索引
        this.$store.dispatch('getEventsDetailsVideoIndex', index)
      }
    },
    mounted () {
      this.arr = this.eventsDetails.demand
    }
  }

</script>

<style lang="scss" scoped>
  .scroll-rank{
    border-top: 1px solid #B5323A;;
    width: 820px;
    height: 170px;

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
      width: 2000px;
      left: 0;
      top:0;
      /*transform:translateX(50px);*/
    }
    li{
      width: 170px;
      height: 170px;
      float: left;
      position: relative;
      a{
        text-decoration: none;
        color: #4A4A4A;
        img{
          width: 170px;
          height: 100px;
        }
        p{
          margin-top: 10px;
          text-align: left;
          font-size: 12px;
          color: #353536;
          letter-spacing: 0;
        }
      }
      .mask{
        margin-top: 23px;
        position: relative;
      }
      .mask-back{
        display: inline-block;
        width: 170px;
        height: 100px;
        opacity: 0.41;
        background: #000000;
        position: absolute;
        left: 0;
        bottom: 0;
        filter:alpha(opacity=41);
        -moz-opacity:0.41;
        -khtml-opacity: 0.41;
        opacity: 0.41;

      }
      .mask-icon{
        position: absolute;
        left: 50%;
        bottom: 50%;
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url("../../assets/images/@1xshiping1.png") no-repeat center center;
        margin-bottom: -13px;
        margin-left: -12.5px;
        z-index: 888;
      }
    }
    li+li{
      margin-left: 20px;
    }
    .middle{
      width: 745px;
      height: 170px;
      overflow: hidden;
      position: relative;
    }
    .left,
    .right{
      width: 36px;
      box-sizing: border-box;
      font-family: '宋体';
      font-weight:bold;
      cursor: pointer;
    }
    .right{
      float: right;
    }
  }
  .on{
    border: 1px solid red;
  }

</style>
