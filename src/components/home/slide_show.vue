<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex]['hrefUrl']">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex]['photoUrl'] | smallImage(830,456)">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex]['photoUrl'] | smallImage(830,456)">
        </transition>
      </a>
    </div>
    <div class="scroll-banner-bottom">
      <div>
        <p>{{slides[nowIndex].title | getLengthPonit(0,29)}}</p>
      </div>
      <ul>
        <li v-for="(item, index) in slides" @click="goto(index)">
          <a :class="{on: index === nowIndex}"><span class="masking"></span><img :src="item['photoUrl'] |smallImage(188, 98) " alt=""></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// :href="slides[nowIndex][hreUrl]"
import {mapGetters} from 'vuex'
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    ...mapGetters(['slide_show']),
    prevIndex () {
//      console.log(1)
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      if (index === this.nowIndex) {
        return
      }
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  },
  destroyed () {
    this.clearInv()
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
.slide-trans-enter-active {
  transition: all .2s;
}
.slide-trans-enter {
  transform: translateX(830px);
}
.slide-trans-old-leave-active {
  transition: all .2s;
  transform: translateX(-830px);
}
.slide-show {
  position: relative;
  width: 830px;
  height: 576px;
  overflow: hidden;
}
.slide-img {
  width: 100%;
  height: 456px;
}
.slide-img img {
  width: 100%;
  height: 456px;
  position: absolute;
  top: 0;
  left: 0;
}

// scroll banner
.scroll-banner-bottom{
  div{
    float: left;
    height: 100%;
    width: 830px;
    text-align: left;
    margin: 12px 10px 0 12px;
  }
  height: 175px;
  background-color: rgba(0,0,0,0.64);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: -0.94px;
  ul{
    overflow: hidden;
    width: 830px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 10px;
  }
  li{
    float: left;
    width: 190px;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
    }
    .on{
      border: 1px solid red;
      .masking{
        filter:alpha(Opacity=0);
        -moz-opacity:0;
        opacity: 0;
      }
    }
    a{
      width: 100%;
      height: 100%;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
    }
    .masking{
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
     filter:alpha(Opacity=50);
      -moz-opacity:0.5;
      opacity: 0.5;
    }

  }
}

</style>
