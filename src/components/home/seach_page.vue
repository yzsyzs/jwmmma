<template>
    <div class="search-page w white overflow">
      <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;搜索结果</p>
      <p>"{{searchArr.searchData}}"相关搜索结果{{searchArr.count}}个...</p>

      <div class="clear">
        <!--全部-->
        <information class="lf"></information>
        <div class="details-right rt">
          <!--热点新闻-->
          <hot-newz class="rt"></hot-newz>
          <!--热门图集-->
          <hot-pictures class="rt"></hot-pictures>
          <!--热门视频-->
          <hot-video class="rt"></hot-video>
        </div>
      </div>

    </div>
</template>

<script>
  import information from '../public/information.vue'
  import hotPictures from '../side_board/hot_pictures.vue'
  import hotNewz from '../side_board/hot_newz.vue'
  import hotVideo from '../side_board/hot_video.vue'
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        searchData: {
          search_value: '“八强赛”',
          count: 36
        }
      }
    },
    components: {
      information,
      hotNewz,
      hotPictures,
      hotVideo
    },
    computed: mapGetters(['information_arr', 'searchArr']),
    mounted () {
      this.information_arr.tags = [
        {
          href: '/home/search/' + encodeURIComponent(this.$route.params.id),
          title: '全部'
        },
        {
          href: '/home/search/newz/' + encodeURIComponent(this.$route.params.id),
          title: '资讯'
        },
        {
          href: '/home/search/photo/' + encodeURIComponent(this.$route.params.id),
          title: '图片'
        },
        {
          href: '/home/search/video/' + encodeURIComponent(this.$route.params.id),
          title: '视频'
        }
      ]
    }
  }

</script>

<style lang="scss" scoped="">
  .search-page{
    padding: 18px 10px;
    p:first-child,
    p:nth-child(2){
      text-align: left;
    }
    p:nth-child(2){
      font-size: 22px;
      color: #838383;
      letter-spacing: -0.83px;
      margin: 17px 0 15px 0;
    }
  }
h1{
  text-align: left;
}
.details-right{
  width: 251px;
}

</style>
