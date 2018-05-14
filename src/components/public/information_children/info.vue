<template>
  <div class="club-rank">
    <!--子路由下面页-->
    <div class="content">
      <div v-html="playerDetails.details">
        <!--<p>名称：法里顿</p>-->
        <!--<p>绰号：大怪兽</p>-->
        <!--<p>性别：男</p>-->
        <!--<p>国籍：塔吉克斯坦</p>-->
        <!--<p>民族：-</p>-->
        <!--<p>年龄：25</p>-->
        <!--<p>身高：174cm</p>-->
        <!--<p>体重：80kg</p>-->
        <!--<p>级别：次重量级</p>-->
        <!--<p>俱乐部：广州K9搏击俱乐部</p>-->
        <!--<p>简介：来自塔吉克斯坦的“大怪兽”-法里顿拥有无与伦比的速度与耐力，······</p>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {

    },
    computed: mapGetters(['playerDetails'])
  }

</script>

<style lang="scss" scoped>
  .club-rank{
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
  }
  .content {
    text-align: left;
  }


</style>
