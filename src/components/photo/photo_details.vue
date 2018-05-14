<template>
  <div class="photo-details overflow w white">
    <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;图片&nbsp;&nbsp;>&nbsp;&nbsp;图片详情</p>
    <h2>{{ photoDetails.title }}</h2>
    <div class="overflow">
      <div class="previous" >
        <div class="left" v-show="showLeft" @click="goto(prevIndex)">
        </div>
      </div>
      <div class="middle-box lf">
        <div class="slide-show" >
          <div class="slide-img">
            <ul :style="{left:moveImage, transition:'all 1s'}" ref="loadImg">
              <li v-for="(item, index) in arr" :class="{on: index === nowIndex}" >
                <a >
                    <img :src="item.miniUrl" :alt="item.title" @load="imageLoaded" ref="mybox" :class="{bigwidth:imgData[index], bigheigh:!imgData[index]}">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="next" >
        <div class="right" v-show="showRight" @click="goto(nextIndex)">
        </div>
      </div>
    </div>
    <div class="title">
     <div class="lf title-left">
       <span class="current-page">{{nowIndex+1}}</span>
       /
       <span class="all-page">{{$store.getters.photoDetails.infoPhotoImages.length}}</span>
     </div>
      <div class="lf title-right">
        <p>{{photoDetails.infoPhotoImages[nowIndex].title}}</p>
        <p>{{photoDetails.infoPhotoImages[nowIndex].detail}}</p>
        <span>{{photoDetails.releaseTime | monthDaySecond}}</span>
      </div>

    </div>
    <div class="scroll-banner-bottom">
      <div class="sroll-banner-bottom-box">
        <div class="sroll-banner-bottom-previous" @click="imgScroTo(move_right)"><</div>
        <div class="sroll-banner-middle">
          <ul :style="{left:move, transition:'all 1s'}">
            <li v-for="(item, index) in photoDetails.infoPhotoImages" @click="goto(index)" :class="{on: index === nowIndex}">
              <a ><img :src="item.url| smallImage(108,74)" :alt="photoDetails.infoPhotoImages[index].title||photoDetails.title" ></a>
            </li>
          </ul>
        </div>
        <div class="sroll-banner-bottom-next" @click="imgScroTo(move_left)">></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    asyncData({store, route}) {
      return store.dispatch('jumpToPhotoDetails', route.params.index)
    },
    title() {
        return this.photoDetails.title
    },
    data () {
      return {
        arr:[],
        nowIndex: 0,
        index: 0,
        move: 0,
        moveImage: 0,
        isShow: true,
        inv: 1000,
        // 图片宽高数据
        imgData: [],
        loadedImages: 0,
        // 控制两边按钮显示隐藏
        // leftBtnIsShow: false,
        // rightBtnIsShow: true
        // 加载图片方法
        loadAllImg: null,
        // 是否没离开当前页
        noLevelPage: true
      }
    },
    computed: {
      ...mapGetters(['photoDetails']),
      move_left () {
        if (this.$store.getters.photoDetails.infoPhotoImages.length <= 8) {
          return this.index
        } else if (this.index === -(this.$store.getters.photoDetails.infoPhotoImages.length - 8)) {
          return -(this.$store.getters.photoDetails.infoPhotoImages.length - 8)
        } else {
          return this.index - 1
        }
      },
      move_right () {
        if (this.$store.getters.photoDetails.infoPhotoImages.length <= 8) {
          return this.index
        } else if (this.index === 0) {
          return 0
        } else {
          return this.index + 1
        }
      },
      prevIndex () {
        // this.showLeft()
        if (this.nowIndex === 0) {
          return 0
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        // this.showRight()
        if (this.nowIndex === this.$store.getters.photoDetails.infoPhotoImages.length - 1) {
          return this.$store.getters.photoDetails.infoPhotoImages.length - 1
        } else {
          return this.nowIndex + 1
        }
      },
      showRight () {
          if (this.nowIndex === this.$store.getters.photoDetails.infoPhotoImages.length - 1) {
              return false
          } else {
              return true
          }
      },
      showLeft () {
        if(this.nowIndex === 0){
              return false
          } else {
              return true
          }
      }
     },
    methods: {
      goto (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
          // console.log(this.nowIndex)
          if(this.nowIndex === this.$store.getters.photoDetails.infoPhotoImages.length - 1){
              this.rightBtnIsShow = false
          }else if (this.nowIndex === 0){
              this.leftBtnIsShow = false
          } else {
              this.rightBtnIsShow = true
              this.leftBtnIsShow = true
          }
          this.moveImage = this.nowIndex * -1009 + 'px'
        }, 10)
      },
      imgScroTo (newIndex) {
//        if (this.photoDetails.infoPhotoImages.length <= 9) {
//          alert('最后一张')
//          return
//        }
//        console.log(newIndex, this.index)
        this.move = newIndex * 136 + 'px'
        this.index = newIndex
      },
      imageLoaded () {
        this.loadedImages ++
        this.$nextTick(() => {
          if (this.loadedImages === this.photoDetails.infoPhotoImages.length) {
            // 图片判断宽高显示拉伸，如果宽度比较大侧width = 1009px, 高度比较大侧height = 645px
            // 拿到每个元素后判断每个元素的宽调并返回显示的类名真假
            this.imgData = []
            this.$refs.mybox.forEach((val, index) => {
              this.imgData[index] = val.clientWidth > val.clientHeight
            })
          }
        })
      }
    },
    beforeMount () {
        // 图片预加载时显示小图代替
        let loadTheImgs = (imgs) => {
            const imgLength = imgs.length
            imgs.forEach((val,index)=>{
                // 增加miniUrl
                imgs[index].miniUrl = val.url + '?imageView2/2/w/108/h/74'
            })
            // 逐张加载大图片
            let loadAllImg = (i,setImgs) => {
                let img = new Image()
                img.src = setImgs[i].url
                img.onload = () => {
                    if(this.noLevelPage){
                        // console.log('是否离开',this.noLevelPage)
                        setImgs[i].miniUrl = setImgs[i].url
                        this.$refs.loadImg.childNodes[i].childNodes[0].firstChild.src = setImgs[i].url
                        if(i >= imgLength - 1) {
                            console.log('大图片加载完成')
                            return false
                        }
                        i++
                        // console.log('打印的值',i, imgLength - 1)
                        loadAllImg(i,setImgs)
                    }
                }
            }
            // 逐张加载小图片
            let loadImg = (i,setImgs) => {
                let img = new Image()
                img.src = setImgs[i].miniUrl
                img.onload = () => {
                    if(i >= imgLength - 1) {
                        console.log('小图片加载完')
                        loadAllImg(0, setImgs)
                        return false
                    }
                    i++
                    loadImg(i,setImgs)
                }
            }
            loadImg(0, imgs)
        }
        // 传入要加载的图片数组
        loadTheImgs(this.photoDetails.infoPhotoImages)
        // console.log('fdfdsdfs',this.photoDetails.infoPhotoImages)
        this.arr = this.photoDetails.infoPhotoImages
    },
    mounted () {
//      if (this.photoDetails.id === 999) {
//        this.$store.dispatch('jumpToPhotoDetails', this.$route.params.index)
//      }
    },
    beforeDestroy () {
        this.noLevelPage = false
        console.log('触发离开',this.noLevelPage)
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .inside{
    i{
      font-size: 30px !important;
    }

  }
  .photo-details{
    padding: 18px 10px;
    p:first-child {
      text-align: left;
    }
    h2{
      font-size: 26px;
      color: #353536;
      letter-spacing: -0.98px;
      text-align: center;
      margin-top: 16px;
      margin-bottom: 20px;
    }
  }
  .middle-box{
    margin: 0 20px;
  }
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(1009px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-1009px);
  }
  .slide-show {

    position: relative;
    width: 1009px;
    height: 645px;
    overflow: hidden;

  }
  .slide-img {
    width: 100%;
    height: 645px;
    position: relative;
    ul{
      position: absolute;
      width: 200000px;
      height: 100%;
    }
    li{
      float: left;
      width: 1009px;
      height: 645px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }
  .slide-img img {
    max-height: 645px;
    max-width: 1009px;
  }
  .slide-img .bigheigh{
    height: 645px;
  }
  .slide-img .bigwidth{
    width: 1009px;
  }
  //  大图片左右标
  .previous,
  .next{
    height: 645px;
    width: 85px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  }

  // 内容文字
  .title{
    margin-top: 27px;
    width: 1220px;
    height: 115px;
    font-size: 16px;
    color: #171718;;
    letter-spacing: -0.6px;
    line-height: 32px;
    text-align: left;
  }
  .title-left{
    padding-left: 10px;
    width: 86px;
    height: 100%;
    box-sizing: border-box;
    color: #353535;
    span:first-child{
      font-size: 30px;
      color: #D90200;
      letter-spacing: -0.6px;
    }
  }
  .title-right{
    position: relative;
    width: 1026px;
    height: 100%;
    p:first-child{
      font-size: 20px;
      color: #171718;
      letter-spacing: -0.6px;
      line-height: 32px;
      font-weight: bold;
    }
    span{
      position: absolute;
      right: 0;
      bottom: 10px;
      color: #838383;
    }
  }

  // 下面图片选择
  .sroll-banner-bottom-box{
    .sroll-banner-bottom-previous,
    .sroll-banner-bottom-next{
      width: 36px;
      height: 100%;
      float: left;
      background-color: #ebebeb;
      line-height: 123px;
      cursor: pointer;
      font-size: 16px;
      font-family: '宋体';
      font-weight: bolder;
      color: #838383;
    }
    .sroll-banner-bottom-previous:hover{
      color: red;
    }
    .sroll-banner-bottom-next:hover{
      color: red;
    }
    .sroll-banner-middle{
      margin: 0 40px;
      position: relative;
      width: 1068px;
      height: 123px;
      float: left;
      overflow: hidden;
    }
    width: 1220px;
    height: 123px;
    float: left;
    position: relative;
    font-size: 26px;
    color: #FFFFFF;
    letter-spacing: -0.94px;
    ul{
      overflow: hidden;
      width: 20000px;
      height: 78px;
      position: absolute;
      left: 0;
      top: 24px;
    }
    li{
      border: 1px solid white;
      box-sizing: border-box;
      float: left;
      width: 110px;
      height: 76px;
      img{
        width: 100%;
        height: 100%;
      }

      a{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: inline-block;
        position: relative;

      }
    }
    .on{
      border: 1px solid red;
    }
    li+li{
      margin-left: 26px;
    }
  }
  .left,
  .right{
    width: 80px;
    height: 80px;
  }
  .left{
    left: 0;
    background-image: url("../../assets/images/@1ximgzuo.png");
  }
  .left:hover{
    background-image: url("../../assets/images/@1ximgzuo1.png");
  }
  .right{
    right:0;
    background-image: url("../../assets/images/@1ximgyou.png");
  }
  .right:hover{
    background-image: url("../../assets/images/@1ximgyou1.png");
  }

</style>
