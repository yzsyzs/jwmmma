<template>
    <div class="banner-right-top">
        <a  :style="aStyle" @click="jumpToUrl(url)">
            <img :src="matchIcon" alt="">
            <div>
                <p>{{matchName}}</p>
                <span class="time">{{matchTime}}</span>
                <!--version 1.07-->
                <!--<span class="time">2017年12月9日-12月10日(已结束)</span>-->
                <!--<span class="time">{{matchTime | normalTime(5)}}</span>-->
                <!--<p>精武门2017-2018赛季揭幕战</p>-->
            </div>
            <span class="banner-right-top-icon"></span>
        </a>
    </div>
</template>
<script>
    export default {
//  asyncData({store, route}) {
//     // 获取当前赛季信息
//      return  this.$http.getCurrentSite().then(res => {
//                this.currentSite = res.data
//          })
//  },
        props: {
            matchIcon: {
                type: String,
                default: require('src/assets/images/@1xjingwumen.png')
            },
            matchName: {
                type: String,
                default: ''
            },
            matchTime: {
                default: '',
                type: String
            },
            url: {
                default: '#',
                type: String
            }
        },
        data() {
            return {
                currentSite: {},
                aStyle: {cursor: 'auto'}
            }
        },
        watch: {
            matchName () {
                // console.log('1', this.matchName)
            },
            matchIcon () {
                // console.log('2', this.matchIcon)
            },
            url () {
              if (this.url === '' || this.url === null) {
                  this.aStyle = {cursor: 'auto'}
              } else {
                  this.aStyle = {cursor: 'pointer'}
              }
            }
        },
        mounted() {
            // this.$http.getCurrentSite().then(res => {
            //     this.currentSite = res.data
            // })
        },
        methods: {
            jumpToUrl (url) {
                if(url){
                    window.location.href = url
                }else {
                    return
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .banner-right-top {
        background-color: #000000; /* IE6和部分IE7内核的浏览器(如QQ浏览器)下颜色被覆盖 */
        background-color: rgba(0, 0, 0, 0.5); /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
        width: 390px;
        height: 134px;
        padding: 15px 14px 0 14px;
        text-align: left;
        position: relative;
        a{
            cursor:pointer;
            text-decoration: none;
        }
        img {
            float: left;
            width: 100px;
            height: 100px;
            margin-right: 15px;
        }
        div {
        }
        p {
            font-size: 20px;
            color: white;
            letter-spacing: -0.64px;
            line-height: 32px;
            font-weight: bold;
            margin-bottom: 9px;
        }
        .time {
            font-size: 16px;
            color: white;
            letter-spacing: -0.69px;
        }
        .banner-right-top-icon {
            display: inline-block;
            width: 180px;
            height: 13px;
            position: absolute;
            left: 0;
            bottom: -11px;
            background-image: url("../../assets/images/@1xhongling.png");
        }
    }


</style>
