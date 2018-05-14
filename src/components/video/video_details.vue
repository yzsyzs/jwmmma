<template>
    <div class="video-details w white overflow">
        <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;视频&nbsp;&nbsp;>&nbsp;&nbsp;视频详情</p>
        <div class="video-details-top">
            <!--屏蔽视频-->
            <div class="no-video"></div>
            <div v-html="VideoUrl" v-if="isIframe" class="iframe"></div>
            <iframe height=0 width=0 :src='VideoUrl' frameborder=0 allowfullscreen v-else></iframe>
            <div class="video-details-bottom">
                <h3>{{videoDetails.title}}</h3>
                <p>{{videoDetails.details}}</p>
                <p class="right">来源: {{videoDetails.source}} &nbsp;&nbsp; &nbsp;&nbsp;发布时间: {{ videoDetails.releaseTime
                    |normalTime(2)}}</p>
            </div>
        </div>
        <div class="clear out-box">
            <!--左边子router-->
            <related-club-player class="lf"></related-club-player>
            <div class="details-right rt">
                <related-information :arr='videoDetails.info'></related-information>
            </div>
        </div>
    </div>
</template>
<script>
    import RelatedInformation from '../side_board/related_information.vue'
    import RelatedClubPlayer from '../side_board/related_club_player.vue'
    import {mapGetters} from 'vuex'

    export default {
        asyncData ({store, route}) {
            return store.dispatch('jumpToVideoDetails', route.params.index)
        },
        title () {
            return this.videoDetails.title
        },
        data () {
            return {
                related_arr: [],
                VideoUrl: '',
                VideoUrlH5: '',
                isIframe: true
            }
        },
        components: {
            RelatedInformation,
            RelatedClubPlayer
        },
        computed: {
            ...mapGetters(['videoDetails'])
        },
        mounted () {
            this.related_arr = this.videoDetails.info
            // 下面的例子用来获取url的两个参数，并返回urlRewrite之前的真实Url
            setTimeout(() => {
                var reg = new RegExp('http://v.youku.com/v_show/id_([^.]*).html')
                var url = this.videoDetails.url
                //判断传过来的是iframe标签还是网址链接
                let getIframe = /^[ ]*<iframe/
                this.isIframe = getIframe.test(url)
                if (this.isIframe) {
                    let replaceString = /'allowfullscreen'/
                    this.VideoUrl = url.replace(replaceString, '')
                } else {
                    //iframe标签 http://player.youku.com/embed/XMjYxNDYwODM1Mg==
                    if(reg.test(url)){
                        this.VideoUrl = url.replace(reg, 'http://player.youku.com/embed/$1')
                    }

                }
            }, 300)
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .video-details {
        padding: 18px 10px;
        & > p:first-of-type {
            text-align: left;
        }
    }

    .video-details-top {
        position: relative;
        width: 1220px;
        margin-top: 20px;
        margin-bottom: 20px;
        embed, iframe {
            width: 1220px;
            height: 705px;
        }
    }

    .video-details-bottom {
        position: relative;
        background: #353536;
        border-radius: 1px;
        padding: 20px 20px 38px 20px;
        text-align: left;
        h3 {
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: -0.6px;
            line-height: 30px;
        }
        p {
            font-size: 14px;
            letter-spacing: -0.6px;
            line-height: 30px;
            color: #838383;
        }
        .right {
            bottom: 20px;
            right: 20px;
            position: absolute;
            font-size: 12px;
            color: #838383;
            letter-spacing: -0.36px;
            line-height: 16px;
        }
    }

    .corner-c {
        display: none !important;
        filter: alpha(opacity=0) !important;
        -moz-opacity: 0 !important;
        -khtml-opacity: 0 !important;
        opacity: 0 !important;
        img {
            display: none !important;
            filter: alpha(opacity=0) !important;
            -moz-opacity: 0 !important;
            -khtml-opacity: 0 !important;
            opacity: 0 !important;
        }

    }

    .h5-ext-layer .inter_player_big {
        display: none !important;
        opacity: 0;
    }

    .h5-ext-layer-adsdk {
        display: none !important;
        opacity: 0 !important;
    }
</style>
