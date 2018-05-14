<template>
    <div class="parther">
        <div class="top">
            <div class="left">
                精武门合作伙伴
            </div>
        </div>
        <div class="bottom">
            <ul>
                <li @click="go(item.url)"
                    v-for="(item, index) in arr"
                    :key="item.id">
                    <a>
                        <img :src="item.icon" :alt="item.mediaName">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            arr:{
                type:Array,
                default: function () {
                    return []
                }
            }
        },
        data() {
            return {
               // arr: []
            }
        },
        methods: {
            go(url) {
                console.log(url)
                window.open(url)
            }
        },
        mounted () {
            // console.log('组件里', this.arr)
            // this.$http.getTeamMediaInfo(100).then(res => {
            //     // console.log('合作媒体', res.data.data)
            //     this.arr = res.data.data
            // })
        }
    }
</script>

<style lang="scss" scoped>
    .parther {
        overflow: hidden;
        width: 1220px;
        .top {
            height: 44px;
            font-size: 16px;
            color: #FFFFFF;
            letter-spacing: -0.6px;
            background: #353536;
            .left {
                width: 155px;
                background: url("../../assets/images/@1xsekuai3.png") no-repeat;
                float: left;
                padding-left: 13px;
                text-align: left;
                line-height: 40px;
            }
        }
        .bottom {
            width: 100%;
            box-sizing: border-box;
            padding-top: 10px;
            padding-bottom: 32px;
            ul {
                overflow: hidden;
                li {
                    float: left;
                    box-sizing: border-box;
                    /*border: 1px solid #000;*/
                    width: 122px;
                    margin-top: 20px;
                    img {
                        border: 1px solid #aaaaaa;
                        box-sizing: border-box;
                        width: 114px;
                        height: 52px;
                    }
                }
                /*li+li{*/
                /*margin-left: 10px;*/
                /*margin-bottom: 20px;*/

                /*}*/
                /*li:nth-of-type(11){*/
                /*margin-left: 0;*/
                /*}*/
            }
        }

    }


</style>
