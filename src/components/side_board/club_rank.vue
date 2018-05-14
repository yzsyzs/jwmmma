<template>
    <div :class="{myHeight: isHomePage, clubRank: true}">
        <div class="top">
            <div class="left">
                <span class="title">俱乐部积分排名</span>
                <!--<span class="year">2016-2017</span>-->
            </div>
            <!--<a class="top-a" @click="jumpToAllPlayer" v-if="isGetMoreShow && arr.length > 0">全部》</a>-->
        </div>
        <!--<div class="content" v-if="arr.length > 0">-->
        <div class="content" v-if="(imgUrl !== null || imgUrl !== '') && loadImgErr">
        <!--<div class="content" v-if="false">-->
            <!--<ul>-->
            <!--<li v-for="(item,index) in arr" @click="jumpToClubDetails(item.id)" :key="item.id">-->
            <!--<div class="img-out-box">-->
            <!--<img :src="item.logo | smallImage(90)" alt="">-->
            <!--</div>-->
            <!--<div class="overflow">-->
            <!--<span class="runk-icon">{{index+1}}</span>-->
            <!--<span class="runk-name">{{item.abbreviationName}}</span>-->
            <!--</div>-->
            <!--<div class="p-div">-->
            <!--<p>{{item.fullName}}</p>-->
            <!--</div>-->
            <!--</li>-->
            <!--<li class="get-more" @click="getMore" v-if="isGetMoreShow" v-show="!isLast">加载更多</li>-->
            <!--</ul>-->
            <!--<img :src="imgUrl" :onerror="handleError" alt="" >-->
            <img :src="imgUrl" ref="img" alt="" class="inside-img">
        </div>
        <div v-else class="undata">
        <img src="../../assets/images/@1xlogo111.png" alt="">
        <p>敬请期待</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr: [],
                isGetMoreShow: true,
                start: 0,
                isLast: false,
                isHomePage: true,
                imgUrl: require('../../assets/images/default_img/@1xmorenjulebu.jpg'),
                loadImgErr: true
            }
        },
        methods: {
            jumpToClubDetails(id) {
//      console.log('俱乐部id', id)
                this.$store.dispatch('jumpToClubDetails', id)
                setTimeout(() => {
                    this.$router.push({path: '/players/club_details/' + id})
                    window.scroll(0, 0)
                }, 300)
            },
            jumpToAllPlayer() {
                this.$router.push({path: '/events/player_rank'})
                window.scroll(0, 0)
            },
            getMore() {
                this.start++
                this.$http.getClubRank(this.start).then(res => {
                    // console.log(res.data.data)
                    this.arr = this.arr.concat(res.data.data)
                    this.isLast = res.data.last
                })
            },
            initPage() {
                // 显示多少条数据
                if (this.$route.path === '/events/player_rank') {
                    this.isGetMoreShow = false
                    this.isHomePage = false
                    this.$http.getClubRank(0, 16).then(res => {
                        // console.log(res.data.data)
                        this.arr = res.data.data === null ? [] : res.data.data
                    })
                } else {
                    this.isHomePage = true
                    this.$http.getClubRank(0).then(res => {
                        // console.log(res.data.data)
                        this.arr = res.data.data === null ? [] : res.data.data
                        this.isGetMoreShow = this.arr.length > 0
                    })
                }
            },
            getClubImg() {
                this.loadImgErr = true
                this.$http.getClubRankImg().then(res => {
                    this.imgUrl = res.data.url
                    // this.imgUrl = '12313'
                })
            },
            handleError () {
                console.log('fsdfs')
                // this.loadImgErr = false
                // console.log('fsdfs',this.loadImgErr)
            }
        },
        mounted() {
            // this.initPage()
            this.$refs.img.onerror = () => {
                console.log(111)
                this.loadImgErr = false
            }
            this.getClubImg()
        }
    }

</script>

<style lang="scss" scoped>
    .content {
        margin: 24px 10px;
    }

    .myHeight {
        /*min-height: 614px*/
    }

    .clubRank {
        overflow: hidden;
        box-sizing: border-box;
        width: 380px;
        /*height: 614px;*/
        text-align: left;
        /*padding-bottom: 30px;*/
        .left {
            position: relative;
            float: left;
            width: 240px;
            height: 40px;
            background: url("../../assets/images/@1xsekuai2.png") no-repeat 0 0;
            padding-left: 10px;
            font-size: 16px;
            color: #FFFFFF;
            letter-spacing: -0.6px;
            .title {
                position: absolute;
                left: 10px;
                top: 0;
            }
            .year {
                position: absolute;
                font-size: 12px;
                top: 9px
            }

        }
        li {
            cursor: pointer;
            width: 100%;
            clear: both;
            float: left;
            height: 110px;
            box-sizing: border-box;
            .img-out-box {
                float: left;
                margin-left: 10px;
                margin-top: 20px;
                border-radius: 50%;
                overflow: hidden;
                width: 90px;
                height: 90px;
                position: relative;
                z-index: 1;
            }
            a {
                font-size: 14px;
                color: #838383;
                letter-spacing: -0.6px;
                text-decoration: none;
            }
            .runk-icon {
                width: 22px;
                height: 22px;
                display: inline-block;
                margin-top: 30px;
                margin-left: 15px;
                float: left;
                font-size: 16px;
                color: #FFFFFF;
                letter-spacing: -0.6px;
                text-align: center;
                line-height: 22px;
                background-image: url('../../assets/images/@1xsekuai4.png')
            }
            .runk-name {
                display: inline-block;
                margin-top: 30px;
                margin-left: 15px;
                float: left;
                font-size: 16px;
                color: #353536;
                letter-spacing: -0.6px;
            }
            .p-div {
                float: left;
                width: 251px;
                height: 40px;
                margin-top: 12px;
                margin-left: 15px;
                overflow: hidden;
            }
        }
        li:nth-of-type(1) {
            .runk-icon {
                background-image: url("../../assets/images/@1xsekuaipamin1.png");
            }
        }
        li:nth-of-type(2) {
            .runk-icon {
                background-image: url("../../assets/images/@1xsekuaipaimin2.png");
            }
        }
        li:nth-of-type(3) {
            .runk-icon {
                background-image: url("../../assets/images/@1x色块3.png")
            }
        }
        .get-more {
            width: 380px;
            height: 30px;
            text-align: center;
            color: #838383;
            padding: 0;
            margin-top: 20px;
            line-height: 40px;
            cursor: pointer;
            border: none;
            margin-bottom: 80px;
        }
    }

    .top {
        width: 380px;
        height: 44px;
        line-height: 44px;
        background-color: #353536;
        .top-a {
            float: right;
            color: #FFFFFF;
            letter-spacing: -0.6px;
            text-decoration: none;
            margin-right: 5px;
        }
    }

    li:hover {
        .runk-name {
            color: red;
        }
    }

    .img-out-box img {
        transition: all .7s;
    }

    li .img-out-box:hover img {
        transition: all .7s;
        -webkit-transition: all .7s;
        transform: scale(1.2, 1.2);
        -webkit-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2); /* IE 9 */
        -moz-transform: scale(1.2, 1.2); /* Firefox */
        -o-transform: scale(1.2, 1.2);
    }

    .undata {
        text-align: center;
        font-size: 16px;
        color: #838383;
        letter-spacing: -0.6px;
        margin-top: 50px;
        height: 614px;
    }
</style>
