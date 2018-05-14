<template>
    <div class="BannerRightBottom">
        <div class="title overflow">
            <p>热门参赛选手</p>
        </div>
        <ul>
            <li v-for="(item,index) in arr" :key='item.id' @click="jumpToPlayDetails(item.id)" v-if="index<8">
                <div class="img-out-box">
                    <img :src="item.faceImage |smallImage(80, 87)" alt="">
                    <span></span>
                    <p>{{item.name}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            arr: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                hot_players: []
            }
        },
        methods: {
            jumpToPlayDetails(id) {
                this.$router.push({path: '/players/player_details/' + id})
//       this.$store.dispatch('jumpToPlayerDetails', id)
            }
        },
        mounted() {
            // this.$http.getHotPlayer().then(res => {
            //     this.hot_players = res.data
            // })
        }
    }
</script>

<style lang="scss" scoped>
    .BannerRightBottom {
        background-color: #000000; /* IE6和部分IE7内核的浏览器(如QQ浏览器)下颜色被覆盖 */
        background-color: rgba(0, 0, 0, 0.5); /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
        box-sizing: border-box;
        width: 390px;
        height: 225px;
        padding: 0 15px 0 15px;
        .title {
            color: white;
            font-size: 14px;
            letter-spacing: -0.6px;
            text-align: left;
            margin-bottom: 10px;
        }
        ul {
            width: 390px;
            overflow: hidden;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        li {
            cursor: pointer;
            position: relative;
            width: 94px;
            height: 97px;
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: -0.54px;
            line-height: 30px;
            & > div {
                position: relative;
                margin-bottom: 10px;
            }
            span {
                opacity: 0.5;
                display: block;
                width: 80px;
                position: absolute;
                bottom: 0;
                height: 30px;
                background-image: url("../../assets/images/@1xRectangle 14 Copy 2.png");
                overflow: hidden;
            }
            p {
                display: block;
                width: 80px;
                position: absolute;
                bottom: 0;
                height: 30px;
                overflow: hidden;
            }
        }
        img {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 80px;
            height: 87px;
        }
    }

    .img-out-box {
        width: 80px;
        height: 87px;
        overflow: hidden;
    }

    .img-out-box img {
        transition: transform .7s;
    }

    .img-out-box:hover img {
        transition: all .7s;
        transform: scale(1.2, 1.2);
    }

</style>
