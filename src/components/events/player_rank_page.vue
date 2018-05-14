<template>
    <div class="player-rank-page w  white overflow">
      <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;赛事&nbsp;&nbsp;>&nbsp;&nbsp;排行榜</p>
      <div class="content">
        <information class="lf"></information>
        <div class="details-right rt">
          <!--俱乐部排名-->
          <club-rank class="events-margin rt"></club-rank>
        </div>
      </div>
    </div>
</template>

<script>
import clubRank from '../side_board/club_rank.vue'
import information from '../public/information.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    information,
    clubRank
  },
  computed: mapGetters(['information_arr']),
  mounted () {
    this.information_arr.tags = [
    ]
    // 设置tap
    this.$http.getPlayerTap().then(res => {
      res.data.reverse().shift()
        console.log('tag', res.data)
        for (let key in res.data) {
        let tags = {href: '', title: ''}
        // 如果是第一个数组，设置成当前页的tap
        if (res.data[key].id === res.data[0].id) {
          tags.href = '/events/player_rank'
        } else {
          tags.href = '/events/player_rank/' + res.data[key].id
        }
          tags.title = res.data[key].name
          tags.id = res.data[key].id
        this.information_arr.tags.push(tags)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .player-rank-page{
    padding: 18px 10px;
    p:first-child{
      text-align: left;
    }
  }
  .details-right{
    width: 380px;
  }
  .content{
    margin-top: 18px;
  }


</style>
