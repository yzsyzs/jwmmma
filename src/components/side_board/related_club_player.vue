<template>
  <div class="club-rank">
    <div class="top">
      <span>相关俱乐部&选手</span>
    </div>
    <div class="player" v-if="videoDetails.club.length > 0 || videoDetails.player.length>0">
      <ul>
        <li v-for="item in videoDetails.club" @click = 'jumpToClub(item.id)' :key="item.id" >
          <div class="img-box">
            <img :src="item.logo" alt="">
            <div class="img-box-bottom">{{item.fullName}}</div>
          </div>
        </li>
        <li v-for="item in videoDetails.player" @click = 'jumpToPlayer(item.id)' :key="item.id">
          <div class="img-box">
            <img :src="item.faceImage" alt="">
            <div class="img-box-bottom">{{item.name}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="undata" v-else>
      <img src="../../assets/images/@1xlogo111.png" alt="">
      <p>暂无相关俱乐部&选手</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        arr: [
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          },
          {
            img: require('../../assets/images/@1xRectangle 7 Copy 2.png'),
            runk: 1,
            name: '狄米崔斯-约翰逊',
            level: '蝇量级',
            flag: require('../../assets/images/@1x中国 copy 4.png'),
            grade: '4胜-0败-1平, 1KO, 3TKO',
            club: '广州k-9俱乐部'
          }
        ]
      }
    },
    computed: {
      ...mapGetters(['videoDetails'])
    },
    methods: {
      getMore () {
       // alert(1)
      },
      jumpToClub (id) {
        this.$store.dispatch('jumpToClubDetails', id).then(()=>{
            this.$router.push({'path': '/players/club_details/' + id})
            window.scroll(0, 0)
        })
      },
      jumpToPlayer (id) {
        this.$store.dispatch('jumpToPlayerDetails', id).then(()=>{
            this.$router.push({'path': '/players/player_details/' + id})
            window.scroll(0, 0)
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .club-rank{
    overflow: hidden;
    box-sizing: border-box;
    width: 820px;
    .top{
      height: 44px;
      background-color: #353536;
      span{
        width: 155px;
        display: inline-block;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.6px;
        background-image: url("../../assets/images/@1xsekuai3.png");
        float: left;
        line-height: 41px;
        padding-left: 13px;
        text-align: left;
        box-sizing: border-box;
      }
    }
  }
  .player{
    box-sizing: border-box;
    padding: 20px 8px;
    ul{
      width: 830px;
      float: left;
    }
    .get-more{
      width: 100%;
      color: #838383;
      padding: 0;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      border: none;
      background-color: #F0EFEF;
      margin-bottom: 80px;
    }
  }
  .player>ul>li{
    cursor: pointer;
    box-sizing: border-box;
    width: 207px;
    height: 285px;
    float: left;
  }
  .img-box{
    position: relative;
    width: 180px;
    height: 239px;
    border: 1px solid #979797;
    padding: 7px 8px;
    box-sizing: border-box;
    img{
      width: 163px;
      height: 195px;
    }
    .img-box-bottom{
      box-sizing: border-box;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 180px;
      height: 32px;
      background: #353536;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      line-height: 32px;
      text-align: center;
    }
  }

  .undata{
    margin-top: 50px;
    text-align: center;
    font-size: 16px;
    color: #838383;
    letter-spacing: -0.6px;
  }
</style>
