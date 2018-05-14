<template>
  <div class="w  white overflow" >
    <!--赛事-->
    <div class="events">
        <div class="events-content">
          <div class="top_strip animated fadeIn" v-if="currentClass != -1" @click="showAllTheRank(-1)">
            <img src="../../assets/images/@1xscreen.png" alt=""  >
            取消选择
          </div>
          <!--上方塞事选择-->
          <div class="Top_choose_rank">
          <ul class="choose_rank" :class="{ptop:currentClass != -1}">
            <li :class="{current:currentClass == club.id}"  @click="changTheRank(club.id)" v-for="(club,index) in currentClubArr.mmaClubMatches" :key="club.id">
              <!--胜负图标开始-->
              <img class="win-icon-right" v-if="returnClubVictory (club.mmaClubVictory) == club.mmaClubBlue.id" src="../../assets/images/@1xsheng_da.png" alt="">
              <img class="win-icon-left"  v-if="returnClubVictory (club.mmaClubVictory) == club.mmaClubRed.id" src="../../assets/images/@1xsheng_da.png" alt="">
              <img class="dogfall-icon-right"v-if="iconStatus(club.status,club.mmaClubVictory)" src="../../assets/images/@1xping_da.png" alt="">
              <img class="dogfall-icon-left" v-if="iconStatus(club.status,club.mmaClubVictory)"  src="../../assets/images/@1xping_da.png" alt="">
              <!--胜负图标结束-->
              <span class="title-left">{{club.mmaClubRed.abbreviationName|getLengthPonitInside(12)}}</span>
              <img src="../../assets/images/@1xVS.png" class="vs">
              <span class="title-right">{{club.mmaClubBlue.abbreviationName |getLengthPonitInside(12)}}</span>
              <img :src="club.mmaClubRed.logo"  class="logo-left">
              <img :src="club.mmaClubBlue.logo" class="logo-right" alt="">
              <div class="runk-start-time">{{club.matchTime}}</div>
              <img src="../../assets/images/@1xhongtiao1.png" alt="" class="bottom-line">
            </li>
          </ul>
          </div>
          <div class="rank_details">
            <table >
              <thead>
                <tr >
                <th class="arrow-parent">场次</th>
                <th>战绩</th>
                <th>俱乐部</th>
                <th>国籍</th>
                <th>红方选手</th>
                <th> </th>
                <th class="table-th"><img src="../../assets/images/@1xVS.png" class="table-vs"></th>
                <th> </th>
                <th>蓝方选手</th>
                <th>国籍</th>
                <th>俱乐部</th>
                <th>战绩</th>
                <th>状态</th>
              </tr>
              </thead>
              <tbody class="table-height" v-if="!(competitionArr.length<=0)" :class="{haveheadheight:currentClubArr.mmaClubMatches.length>0,nohaveheadheight:currentClubArr.mmaClubMatches.length == 0,havescroll:haveScroll(currentClubArr.mmaClubMatches,competitionArr),nohavescroll:!haveScroll(currentClubArr.mmaClubMatches,competitionArr)}">
                <tr v-for="(runk,key) in competitionArr" @click="jumpToRunk(runk.id)" :key = 'runk.id'>
                  <td>第{{runk.screenings | number}}场</td>
                  <td>{{runk.mmaPlayerRed.victoryCount}}胜-{{runk.mmaPlayerRed.failureCount}}负-{{runk.mmaPlayerRed.matchCount - runk.mmaPlayerRed.victoryCount -  runk.mmaPlayerRed.failureCount}}平</td>
                  <td><img class="club-logo" :src="runk.mmaPlayerRed.clubLogo" alt="" v-if="runk.mmaPlayerRed.clubLogo"></td>
                  <td><img :src="runk.mmaPlayerRed.countryUrl" alt="" :title="runk.mmaPlayerRed.countryName"></td>
                  <td>{{runk.mmaPlayerRed.name|getLengthPonitInside(14)}}</td>
                  <td>
                    <img  class="win-icon" v-if="runk.mmaPlayerRed.id === returnThemmaPlayerVictory(runk)" src="../../assets/images/@1xsheng.png" alt="">
                    <img class="dogfall-icon" v-if="iconStatus(runk.status,runk.mmaPlayerVictory)" src="../../assets/images/@1xping.png" alt="">
                  </td>
                  <td><span>{{runk.level | level}}</span></td>
                  <td>
                    <img  class="win-icon" v-if="runk.mmaPlayerBlue.id === returnThemmaPlayerVictory(runk)" src="../../assets/images/@1xsheng.png" alt="">
                    <img class="dogfall-icon" v-if="iconStatus(runk.status,runk.mmaPlayerVictory)"  src="../../assets/images/@1xping.png" alt="">
                  </td>
                  <td>{{runk.mmaPlayerBlue.name|getLengthPonitInside(14)}}</td>
                  <td><img :src="runk.mmaPlayerBlue.countryUrl" alt=""  :title="runk.mmaPlayerBlue.countryName"></td>
                  <td><img class="club-logo" :src="runk.mmaPlayerBlue.clubLogo" alt="" v-if="runk.mmaPlayerBlue.clubLogo"></td>
                  <td>{{runk.mmaPlayerBlue.victoryCount}}胜-{{runk.mmaPlayerBlue.failureCount}}负-{{runk.mmaPlayerBlue.matchCount - runk.mmaPlayerBlue.victoryCount -  runk.mmaPlayerBlue.failureCount}}平</td>
                  <td :class="{black:runk.status == '01',gray:runk.status == '03'||runk.status == '04',deepyellow:runk.status == '02'}">{{runk.status|status}}</td>
                </tr>
              </tbody>
            </table>
            <div class="if-list-no-show" v-if="competitionArr.length == 0" :class="{divheight:currentClubArr.mmaClubMatches.length > 0,nodivheight:currentClubArr.mmaClubMatches.length == 0}">
              <div style="height: 116px">
                <img v-show="isHaveData" src="../../assets/images/@1xlogo111.png" alt="" >
                <p  v-show="isHaveData">暂无相关结果...</p>
              </div>
            </div>
          </div>
        </div>
        <!--赛季滑动列表-->
        <div class="events-bottom" >
          <div class="events-bottom-leftbtn" @click="eventsBottomMoveLeft(moveLeft)"></div>
          <div class="events_bottom_title">
            <p>{{currentArr.name}}&bull;{{currentSite.name}}</p>
            <p>{{currentSite.startTime|normalTime(2)}}，{{currentSite.address}}</p>
          </div>
          <div class="line"></div>
          <ul  :style='{left:move}' class="overflow"  >
            <li  :class="{events_bottom_current:currentIndex == index }" v-for="(item,index) in currentArr.sites" :key = 'item.id' @click="changCurrentRunk(index, item.id)">
              <p class="events-bottom-frist-p">{{item.name|getLengthPonit(0,8)}}</p>
              <span></span>
              <p>{{item.startTime | normalTime(2)}}</p>
            </li>
            <li class="last-li">
              <p class="events-bottom-frist-p">敬请期待</p>
              <span></span>
              <p>即将开启</p>
            </li>
          </ul>
          <div class="events-bottom-rightbtn" @click="eventsBottomMoveRight(moveRight)"></div>
        </div>
      </div>

    <div class="clear out-box">
      <!--左边子router-->
      <information class="lf" ></information>
      <div class="details-right rt">
        <!--全部赛事-->
        <all-runk></all-runk>
        <!--电视台-->
        <tele-station class="events-margin rt"></tele-station>
        <!--俱乐部排名-->
        <!-- <club-rank class="events-margin rt"></club-rank> -->
        <!--选手排名-->
        <player-rank class="events-margin rt"></player-rank>
      </div>
    </div>
  </div>
</template>

<script>
  import information from '../public/information.vue'
  import clubRank from '../side_board/club_rank.vue'
  import PlayerRank from '../side_board/player_rank.vue'
  import TeleStation from '../side_board/television_station.vue'
  import AllRunk from './side_board_right_top.vue'
  import {mapGetters} from 'vuex'
  import {title} from 'src/base/title.js'
  export default{
    title: title + '赛事',
    data () {
      return {
        // 选中的赛季索引
        currentIndex: 0,
        // 当前赛季
        currentArr: [],
        // 判断是否显示暂无相关搜索
        isHaveData: false,
        // 当前赛季id
        currentId: 0,
        // 当前俱乐部
        currentClubArr: {
          mmaClubMatches: []
        },
        currentClass: -1,
        arrowPosition: '50px',
        arr_runk: [
          {id: 0},
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4}
        ],
        competitionArr: [],
        arr: [
          {
            time: '第一场',
            red_performance: '10胜-2败-0平',
            red_cunk: require('../../assets/images/@1xGroup Copy.png'),
            red_country: require('../../assets/images/@1xGroup Copy.png'),
            red_play: '谢小龙',
            red_win: require('../../assets/images/@1xGroup Copy.png'),
            level: '蝇量级',
            blue_win: require('../../assets/images/@1xGroup Copy.png'),
            blue_play: '韩磊',
            blue_country: require('../../assets/images/@1xGroup Copy.png'),
            blue_cunk: require('../../assets/images/@1xGroup Copy.png'),
            blue_performance: '10胜-2败-0平'
          }
        ],
        currentMove: 0,
        move: 0,
        moveWidth: -190,
        time: null,
        // 当前赛站
        currentSite: {
          name: '',
          startTime: 1513751304,
          address: ''
        }
      }
    },
    components: {
      information,
      clubRank,
      PlayerRank,
      TeleStation,
      AllRunk
    },
    computed: {
      ...mapGetters(['information_arr', 'eventsId']),
      moveLeft () {
        if (this.currentMove <= 0) {
          this.currentMove = 0
          return 0
        } else {
          return this.currentMove
        }
      },
      moveRight () {
        var length = (this.currentArr.sites === undefined || this.currentArr.sites === null) ? 0 : this.currentArr.sites.length - 5
        length = length <= 0 ? 0 : length
        if (this.currentMove >= length) {
          this.currentMove = length
          return length
        } else {
          return this.currentMove
        }
      }
    },
    mounted () {
      this.information_arr.tags = [
        {
          href: '/events/',
          title: '动态'
        },
        {
          href: '/events/newz',
          title: '资讯'
        },
        {
          href: '/events/photo',
          title: '图片'
        },
        {
          href: '/events/video',
          title: '视频'
        }
      ]
      this.$http.getNowSeason().then(res => {
        if (res.data.sites === '' || res.data.sites === null) {
          res.data.sites = []
        }
        this.currentArr = res.data
        // 判断是否是当前赛站,并拿到赛站的所有内容并倒序
        for (let key in this.currentArr.sites.reverse()) {
          if (this.currentArr.sites[key].currentCompetitionSite === '01') {
            // 记录当前需要滑动的第几个数组
            this.currentMove = key
            this.move = this.moveRight * this.moveWidth + 'px'
            // console.log('里面的2', this.currentArr.sites[key])
            this.currentClubArr = this.currentArr.sites[key]
            // 解构赋值
            let {name, startTime, address}= this.currentArr.sites[key]
            this.currentSite ={name,startTime,address}
              // 更改选中的赛季id
            // 记录当前的选中滚动条赛事的id
            this.currentId = this.currentArr.sites[key].id
            this.$store.dispatch('getTheEventId', this.currentId)
            // console.log('当前的id', this.currentId)
            // 根据赛季的id获取全部赛事列表
            this.$http.getMatch({siteId: this.currentId}).then(res => {
              this.isHaveData = res.data === ''
              this.competitionArr = res.data
            })
            // 进入获取当前选中的赛季的位置
            this.currentIndex = key
          }
        }
      })
    },
    methods: {
      // 判断head有没有，有的话 列表大于6条显示滚动条，没有的话大于5条显示滚动条
      haveScroll (headArr, arr) {
        // head存在，则判断arr大于5条显示scroll，小于显示padding
        if (headArr.length > 0) {
          if (arr.length > 5) {
            return true
          } else return false
        } else {
          if (arr.length > 6) {
            return true
          } else return false
        }
      },
      // 赛事上方ul团队列表容错
      returnClubVictory (mmaClubVictory) {
        if (mmaClubVictory === null) {
          return ''
        } else {
          return mmaClubVictory.id
        }
      },
      // 赛事下面列表容错
      returnThemmaPlayerVictory (runk) {
        if (runk.mmaPlayerVictory === null) {
          return ''
        } else {
          return runk.mmaPlayerVictory.id
        }
      },
      // 切换赛事id
      changTheRank (id) {
        this.currentClass = id
        this.$http.getMatch({id: id}).then(res => {
          // 判断是否显示暂无搜索数据
          this.isHaveData = res.data === ''
            console.log(this.isHaveData)
            this.competitionArr = res.data
        })
        this.arrowPosition = 50 + id * 232 + 'px'
      },
      // 点击全部赛事切换到选中的全部赛事列表
      showAllTheRank (index) {
        this.currentClass = index
        this.$http.getMatch({siteId: this.currentId}).then(res => {
          // 判断是否显示暂无搜索数据
          this.isHaveData = res.data === ''
          this.competitionArr = res.data
        })
      },
      jumpToRunk (id) {
        this.$store.dispatch('getEventsDetails', id).then(() => {
          setTimeout(() => {
            this.$store.dispatch('getEventsDetailsVideoIndex', 0).then(() => {
              this.$router.push({path: '/events/runk_details/' + id})
            })
          }, 300)
        })
      },
      // --------------------------------------------赛事移动-----------------------------------------------------------
      eventsBottomMoveLeft (moveLeft) {
        this.currentMove--
        this.move = this.moveLeft * this.moveWidth + 'px'
      },
      eventsBottomMoveRight (moveRight) {
        this.currentMove++
        this.move = this.moveRight * this.moveWidth + 'px'
      },
      // -----------------------------------------改变赛事按钮和当前数据------------------------------------------------
      changCurrentRunk (index, siteId) {
      // 解构赋值
        let {name, startTime, address}=  this.currentArr.sites[index]
        this.currentSite ={name,startTime,address}
        this.currentIndex = index
        this.currentClubArr = this.currentArr.sites[index]
        // 根据赛季的id获取全部赛事列表
        this.$http.getMatch({siteId: siteId}).then(res => {
          // 判断是否显示暂无搜索数据
          this.isHaveData = res.data === ''
          this.competitionArr = res.data
        })
        // 改变存储在mutation上的赛事id
        this.$store.dispatch('getTheEventId', siteId)
        // 判断当前在那个子路由模块更新当前模块
        if (this.$route.path === '/events' || this.$route.path === '/events/') {
          setTimeout(() => {
            // 清空数组
            this.$store.dispatch('clearIndexArr')
            this.$store.dispatch('getIndexTap', {
              type: '0,1,2',
              tagType: '03',
              tagValueId: this.eventsId,
              start: this.start,
              limit: 10
            })
          }, 200)
        } else if (this.$route.path === '/events/newz') {
          // 进入赛事新闻页内容
          this.$store.dispatch('changTheNewTag', {type: '',
            currentTap: 'eventsNewz',
            option: {
              tagType: '03',
              type: '0',
              tagValueId: this.eventsId,
              start: 0,
              limit: 10
            }
          })
        } else if (this.$route.path === '/events/photo') {
          this.$store.dispatch('changThePhotoTag', {type: '',
            currentTap: 'eventsPhoto',
            option: {
              tagType: '03',
              type: '1',
              tagValueId: this.eventsId,
              start: 0,
              limit: 10
            }})
        } else if (this.$route.path === '/events/video') {
          this.$store.dispatch('changThenVideoTag', {type: '',
            currentTap: 'eventsVideo',
            option: {
              tagType: '03',
              type: '2',
              tagValueId: this.eventsId,
              start: 0,
              limit: 10
            }
          })
        }
        // 切换当前的赛季id
        this.currentId = siteId
        // 设置全部赛事为不显示
        this.currentClass = -1
      },
      // 判断胜负图标显示条件
      iconStatus (status, victory) {
        if (status === '03' || status === '04') {
          if (victory === null) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  }

</script>

<style lang="scss" scoped="">
  .out-box{
    /*transition: all 2s;*/
  }
  .top_strip{
    background-image: url("../../assets/images/@1xRectangle 16.png");
    background-repeat: no-repeat;
    background-position: top;
    width: 130px;
    height: 47px;
    position: absolute;
    top:0;
    left: 50%;
    margin-left: -65px;
    font-size: 18px;
    color: #5D0202;
    letter-spacing: -0.59px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &>img{
      margin-right: 11px;
    }
  }
  .arrow-parent{
    position: relative;
  }
  .arrow{
    position: absolute;
    left: 50px;
    top:-10px;
  }
  .out-box{
    padding: 0 10px;
  }
  .events{
    position: relative;
    margin-top: 17px;
    margin-bottom:17px;
    padding-bottom: 188px;
  }
  // 赛事内容
  .clubrank{
    margin: 0;
  }
  .rank_details{
    transition: all 1s;
  }
 .table-height{
   display: inline-block;
   width: 1240px;
   box-sizing: border-box;
 }
 .havescroll{
   overflow-y:scroll;
 }
 .nohavescroll{
   padding-right: 18px;
 }
 .haveheadheight{
   height: 300px;
 }
 .nohaveheadheight{
   height: 400px;
 }
  //上边ul
  .ptop{
    padding-top: 54px;
  }
  .events-content{
    /*.Top_choose_rank{*/
      /*height: 161px;*/
    /*}*/
    .choose_rank{
      display: inline-block;
      transition: all 0.3s;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center bottom ;
      .title-left,
      .title-right{
        display:inline-block;
        font-size: 16px;
        letter-spacing: -0.74px;
        position: absolute;
        bottom: 30px;
        z-index: 2;
      }
      .title-left{
        left:24px;
        color: #B5323A;
      }
      .title-right{
        right: 24px;
        color: #4A90E2;
      }
      .bottom-line{
        display: none;
      }
      .current{
        .bottom-line{
          display: block;
          position: absolute;
          left: -2px;
          bottom: -3px;
          width:285px;
          height: 5px;
        }
        /*background-color: #5D0202;*/
        border: 2px solid #D90200;
        border-bottom: none;
      }
    }
    .choose_rank>li+li{
      margin-left: 15px;
    }
    .choose_rank>li:hover{
        box-shadow: 0 15px 30px rgba(0,0,0,.1);
        -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
        transform: translate3d(0,-5px,0);
        -webkit-transform: translate3d(0,-5px,0);
    }
    .choose_rank>li {
      transition: all 300ms;
      float: left;
      box-sizing: border-box;
      position: relative;
      width: 285px;
      height: 161px;
      border: 1px solid #D6D6D6;
      border-radius: 1px;
      cursor: pointer;
      .logo-left,
      .logo-right{
        margin-top: 10px;
        width: 90px;
        height: 90px;
      }
      .logo-left {
        margin-left: 10px;
        float: left;
      }
      .logo-right {
        margin-right: 10px;
        float: right;
      }
      .vs {
        width: 36px;
        height: 49px;
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: -0.74px;
        line-height: 30px;
        position: absolute;
        left: 50%;
        margin-left: -18px;
        top: 40px;
      }
      .win-icon-right,
      .dogfall-icon-right {
        width: 70px;
        height: 33px;
        position: absolute;
        top: 68px;
        right: 25px;
      }
      .win-icon-left,
      .dogfall-icon-left {
        width: 70px;
        height: 33px;
        position: absolute;
        top: 68px;
        left: 25px;
      }
      .runk-start-time{
      background-color:#EBEBEB ;
        width: 100%;
        position: absolute;
        bottom: 0;
      }
    }
    table{
      margin-top: 16px;
      width: 100%;
      th:nth-of-type(1),
      td:nth-of-type(1),
      th:nth-of-type(3),
      td:nth-of-type(3),
      th:nth-of-type(11),
      td:nth-of-type(11){
        width: 100px;
      }
      th:nth-of-type(4),
      td:nth-of-type(4),
      th:nth-of-type(10),
      td:nth-of-type(10){
        width: 60px;
      }
      th:nth-of-type(6),
      td:nth-of-type(6),
      th:nth-of-type(8),
      td:nth-of-type(8){
        width: 26px;
        position: relative;
      }
      td:nth-of-type(6){
        .win-icon,
        .dogfall-icon{
          width: 50px;
          height: 25px;
          position: absolute;
          left: -18px;
          top:20px;
        }
      }
      th:nth-of-type(2),
      td:nth-of-type(2),
      th:nth-of-type(12),
      td:nth-of-type(12){
        width: 140px;
      }
      th:nth-of-type(7),
      td:nth-of-type(7){
        width: 62px;
      }
      th:nth-of-type(5),
      td:nth-of-type(5),
      th:nth-of-type(9),
      td:nth-of-type(9)
     {
        width: 150px;
      }

      th{
        height: 30px;
        font-size: 14px;
        color: #353536;
        letter-spacing: -0.54px;
        text-align: center;
        background: #EBEBEB;
      }
      thead,
      tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;
      }
      tbody tr{
        .club-logo{
          width: 35px;
          height: 35px;
        }
        .win-icon,
        .dogfall-icon{
          width: 50px;
          height: 25px;
        }
        cursor: pointer;
        height: 64px;
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.62px;
        border-bottom: 1px dashed #979797;
      }
      .table-th{
        position: relative;
      }
      .table-vs{
        display: inline-block;
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: -0.74px;
        line-height: 30px;
        position: absolute;
        left: 50%;
        margin-left: -16px;
        bottom: -6px;
      }
      .events-video{
        width: 97px;
        height: 26px;
        border: 1px solid #5D0202;
        border-radius: 3px;
        font-size: 14px;
        color: #5D0202;
        letter-spacing: -0.39px;
        line-height: 26px;
        padding: 5px;
        img{
          margin: 0 9px 6px 9px;
        }
      }
    }
  }

  //赛事下边盒子
  .events-bottom{
    height: 125px;
    width: 100%;
    background: url('../../assets/images/@1xditusaishi.png') no-repeat;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: -0.65px;
    .events-bottom-leftbtn,
    .events-bottom-rightbtn{
      width: 30px;
      height: 116px;
      position: absolute;
      bottom: 0;
      z-index: 900;
    }
    .events-bottom-leftbtn{
      background-image: url("../../assets/images/@1xzou1.png");
      left: 0;
    }
    .events-bottom-rightbtn{
      background-image: url("../../assets/images/@1xyou2.png");
      right:0;
    }
    .events-bottom-leftbtn:hover{
      background-image: url("../../assets/images/@1xzuo1.png");
    }
    .events-bottom-rightbtn:hover{
      background-image: url("../../assets/images/@1xyou1.png");
    }
    .line{
      position: absolute;
      width: 1184px;
      top: 73px;
      height: 2px;
      left: 30px;
      background-color: #797979;
    }
    .events_bottom_title{
      height: 80px;
      width: 100%;
      position: absolute;
      left: 0;
      top: -45px;
      background: url("../../assets/images/@1xsshekuai.png");
      color: #FFFFFF;
      letter-spacing: -0.85px;
      background-size: 100% 100%;
      p:first-of-type{
        margin-top: 13px;
        font-size: 30px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 30px;
      }
      p:nth-of-type(2){
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 36px;
      }
    }
    ul{
      /*transition: all 0.5s;*/
      position: absolute;
      top: 37px;
      left: 0;
      width: 3000px;
      height: 80px;
    }
    li{
      cursor: pointer;
      float: left;
      margin-left: 40px;
      width: 136px;
      span{
        display: inline-block;
        width: 28px;
        height: 29px;
        background-image: url("../../assets/images/@1xJIANGPEI1.png");
      }
      p:first-of-type{
        margin: 5px 0;
      }
      p:nth-of-type(2){
        margin-top: -5px;
      }
    }
    li:hover{
      color: #D90200;
    }
    .last-li:hover{
      color: white;
      cursor: auto;
    }
    li+li{
      margin-left: 56px;
    }
    .events_bottom_current{
      font-size: 16px;
      color: #D90200;
      letter-spacing: -0.74px;
      span{
        background-image: url('../../assets/images/@1xJIANGPEI.png');
        margin-top: -5px;
      }
    }
  }

  .middle{
    width: 46px;
    height: 100px;
    float: left;
    text-align: center;
    .middle-top{
        position: absolute;
        left: 45%;
        top: 10px;
      }
    .middle-bottom{
      position: absolute;
      left: 45%;
      bottom: 15px;
    }

  }
  .scroll-rank-left,
  .scroll-rank-right{
    p{
      margin: 10px 10px;
    }
  }
  .scroll-rank-left{
    text-align: left;
  }
  .scroll-rank-right{
    text-align: right;
  }


  //内容下边右侧
  .details-right{
    width: 380px;
  }
  .if-list-no-show{
    img{
    }
    p{
      margin-top: 11px;
      font-size:16px;
      color: #838383;
    }
  }
  .divheight{
    margin: 92px auto;
  }
  .nodivheight{
    margin: 142px auto;
  }
</style>
