<template>
      <!--滚动通栏-->
      <div class="scroll-rank">
        <div class="new-rank">最新赛事</div>
        <div class="left" @click="rightMove"><</div>
        <div class="middle">
          <ul :style="{transform:translateX,transition:'all 1s'}">
            <li v-for="(li,index) in arr" @click="jumpToEvents(li.id)" :key="li.id">
              <a>
                <img class="flag-left" :src ="li.mmaPlayerRed.countryUrl" :title="li.mmaPlayerRed.countryName">
                <img class="flag-right" :src = "li.mmaPlayerBlue.countryUrl" :title="li.mmaPlayerBlue.countryName">
                <div class="scroll-rank-top"><span>{{li.startTime | monthDay}}  第{{li.screenings}}场</span> <span>{{li.level | level}}</span></div>
                <div class="scroll-rank-bottom">
                  <div class="lf">
                    <p class="name">{{li.mmaPlayerRed.name | getLengthPonit(0,5)}}<span></span></p>
                    <p>{{li.mmaPlayerRed.victoryCount}}胜-{{li.mmaPlayerRed.failureCount}}负-{{li.mmaPlayerRed.matchCount-li.mmaPlayerRed.victoryCount -  li.mmaPlayerRed.failureCount}}平</p>
                    <!--<p>{{li.mmaPlayerRed.koCount}}KO, {{li.mmaPlayerRed.tkoCount}}TKO</p>-->
                  </div>
                  <span class="vs">vs</span>
                  <span class="status">{{li.status|status}}</span>
                  <div class="rt">
                    <p class="name">{{li.mmaPlayerBlue.name|getLengthPonit(0,5)}}<span></span></p>
                    <p>{{li.mmaPlayerBlue.victoryCount}}胜-{{li.mmaPlayerBlue.failureCount}}负-{{li.mmaPlayerBlue.matchCount- li.mmaPlayerBlue.victoryCount - li.mmaPlayerBlue.failureCount}}平</p>
                    <!--<p>{{li.mmaPlayerBlue.koCount}}KO, {{li.mmaPlayerBlue.tkoCount}}TKO</p>-->
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="right" @click="leftMove">></div>
      </div>
</template>

<script>
  export default {
    props: {
      arr: {
        type: Array
      }
    },
    data () {
      return {
        // arr: [],
        index: 0,
        translateXnum: 0, // 图片滚动时的偏移量
        translateX: '',   // 生成图片偏移时的表达式
        width: 358
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
          if (this.index >= this.arr.length) {
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
        // 当长度大于3，return， 小于3，
        if (this.index <= -(this.arr.length - 3)) {
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
      jumpToEvents (id) {
        this.$store.dispatch('getEventsDetails', id)
        this.$router.push({path: '/events/runk_details/' + id})
      }

    },
    mounted () {
      // this.$http.getNewesMatch().then(res => {
      //   // console.log('滚动赛事数据', res.data)
      //   this.arr = res.data
      // })
    }
  }

</script>


<style lang="scss" scoped>
  .scroll-rank{
    width: 1240px;
    height: 120px;
    margin-top: 30px;
    margin-bottom: 10px;
    position: relative;
    .flag-left,
    .flag-right{
      display: block;
      width: 30px;
      height: 18px;
      position: absolute;
      top: 53px;
      img{
        width: 30px;
        height: 18px;
      }
    }
    .flag-left{
      left: 119px;
      background:url("../../assets/images/@1xchina copy.png") no-repeat;
    }
    .flag-right{
      right:119px;
      background:url("../../assets/images/@1xchina copy.png") no-repeat;
    }
    &>div{
      text-align: center;
      height:100%;
      display:flex;
      justify-content: center;
      align-items: center;
      float: left;
      /*background-color: white;*/
    }
    ul{
      position: absolute;
      width: 20000px;
      left: 0;
      bottom:0;
      /*transform:translateX(50px);*/
    }
    li{
      transition: all 300ms;
      width: 338px;
      height: 120px;
      background-color: #F2F2F2;
      float: left;
      margin-left: 20px;
      position: relative;
      cursor: pointer;
      a{
        text-decoration: none;
        color: #4A4A4A;
      }

      .scroll-rank-top{
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
        padding: 12px 10px 0 10px;
        .name{
          font-weight:bold;
          font-size: 16px;
          color: #353536;
          letter-spacing: -0.39px;
          text-align: left;
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
        .rt p{
          text-align: right;
        }
      }
    }
    .middle{
      width: 1094px;
      height: 125px;
      overflow: hidden;
      position: relative;
      top: -5px;

    }
    .left,
    .right{
      width: 20px;
      box-sizing: border-box;
      background-color: #EBEBEB;
      font-family: '宋体';
      font-weight:bold;
      cursor: pointer;
    }
    .left:hover,
    .right:hover{
      color: red;
    }
    .left{
      margin-left: 10px;

    }
    .right{
      float: right;
    }
    .new-rank{
      padding: 25px;
      width: 89px;
      background-color: #EBEBEB;
      box-sizing: border-box;
      font-size: 16px;
      color: #353536;
      letter-spacing: -0.39px;
      line-height: 22px;

    }
    .vs{
      position: absolute;
      top: 51px;
      left: 159px;
      font-size: 16px;
      color: #353536;
      letter-spacing: -0.51px;
      font-weight: bold;
    }
    .status{
      /*display: inline-block;*/
      /*width: 50px;*/
      /*height: 22px;*/
      position: absolute;
      left: 50%;
      top:75px;
      font-size: 16px;
      color: #353536;
      letter-spacing: -0.51px;
      font-weight: bold;
      transform: translate(-50%,0);
    }
  }
li:hover{
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transform: translate3d(0,-5px,0) ;
  -webkit-transform: translate3d(0,-5px,0) ;
}

</style>
