<template>
  <div class="all-runk-page w  white overflow">
    <p>首页&nbsp;&nbsp;>&nbsp;&nbsp;赛事&nbsp;&nbsp;>&nbsp;&nbsp;赛事列表</p>
    <div class="all-runk-page-left lf overflow">
      <div class="runk-choose  overflow">
        <ul>
          <li>
            <span>赛季:</span>
            <ul>
              <li :class="{red:checkActive('runk',index) }" @click="toggleSelection('runk',index )"
                  v-for="(runk,index) in initChooseValue.runk">{{runk.name}}
              </li>
            </ul>
          </li>
          <li>
            <span>赛站:</span>
            <ul :class="{showUl:isShowUl}">
              <li :class="{red:checkActive('time',index) }" v-for="(time,index) in initChooseValue.time"
                  @click="toggleSelection('time',index )">{{time.startTime|normalTime(6)}}{{time.name}}
              </li>
            </ul>
            <span @click="showTheUl('isShowUl')">
              <i class="iconfont" v-if="isShowUl">&#xe6e0;</i>
              <i class="iconfont" v-if="!isShowUl">&#xe6f2;</i>
              显示全部
            </span>
          </li>
          <li class="third-li">
            <span>俱乐部:</span>
            <ul :class="{showUl:isShowClubUl}">
              <li :class="{red:checkActive('club',index) }" v-for="(club,index) in initChooseValue.club"
                  @click="toggleSelection('club',index )">{{club.fullName}}
              </li>
            </ul>
            <span @click="showTheUl('isShowClubUl')">
              <i class="iconfont" v-if="isShowClubUl">&#xe6e0;</i>
              <i class="iconfont" v-if="!isShowClubUl">&#xe6f2;</i>
              显示全部
            </span>
          </li>
          <li>
            <span>选手:</span>
            <ul :class="{showUl:isShowPlaysUl}">
              <li :class="{red:checkActive('player',index) }" v-for="(player, index) in initChooseValue.player"
                  @click="toggleSelection('player',index )">{{player.name}}
              </li>
            </ul>
            <span  @click="showTheUl('isShowPlaysUl')">
              <i class="iconfont" v-if="isShowPlaysUl">&#xe6e0;</i>
              <i class="iconfont" v-if="!isShowPlaysUl">&#xe6f2;</i>
              显示全部
            </span>
          </li>
        </ul>
      </div>
      <!--下边列表显示-->
      <div class="list">
        <ul  v-if="eventsList.arr!== ''">
          <li v-for="(item,index) in eventsList.arr" :key = 'item.id' class="animated fadeIn" @click = jumpToRunk(item.id)>
            <ul class="list-details-ul">
              <li>
                <div class="line"></div>
                <div class="list-title-left">
                  <p>{{item.startTime|normalTime(2)}}第{{item.screenings}}场</p>
                  <i class="icon iconfont">&#xe643;</i>
                </div>
                <div class="list-details-left">
                  <img class="play-img" :src="item.mmaPlayerRed.faceImage | smallImage(72,90)">
                  <div class="list-details-left-inside">
                    <span class="list-name">{{item.mmaPlayerRed.name}}</span>
                    <img class="flag" :src="item.mmaPlayerRed.countryUrl" alt="" :title="item.mmaPlayerRed.countryName">
                    <img class="win-icon-left" src="../../assets/images/@1xsheng.png" alt="" v-if="item.mmaPlayerVictory.id  == item.mmaPlayerRed.id ">
                    <!--平图标-->
                    <img class="win-icon-left" src="../../assets/images/@1xping.png" alt="" v-if="iconStatus(item.status,item.mmaPlayerVictory.id)">
                    <p>{{item.mmaPlayerRed.clubName}}</p>
                    <p>{{item.mmaPlayerRed.victoryCount}}胜-{{item.mmaPlayerRed.failureCount}}负-{{ item.mmaPlayerRed.matchCount- item.mmaPlayerRed.victoryCount -item.mmaPlayerRed.failureCount}}平</p>
                  </div>
                </div>
                <div class="list-details-middle">
                  <p>{{item.level |level}}</p>
                  <span class="vs">vs</span>
                  <!--中间状态-->
                  <p class="status" :class="{gray: isGray(item.status,item.mmaPlayerVictory.id), lightYellow: item.status == '02',blue: isBlue(item.status, item.mmaPlayerVictory.id)}">{{mydata(item.status,item.victoryWay,item.mmaPlayerVictory.id)}}</p>
                </div>
                <div class="list-details-right">
                  <img class="play-img" :src="item.mmaPlayerBlue.faceImage | smallImage(72,90)" alt="">
                  <div class="list-details-left-inside">
                    <img class="win-icon-right" src="../../assets/images/@1xsheng.png" alt="" v-if="item.mmaPlayerVictory.id  == item.mmaPlayerBlue.id">
                    <img class="win-icon-right" src="../../assets/images/@1xping.png" alt="" v-if="iconStatus(item.status,item.mmaPlayerVictory.id)">
                    <img class="flag" :src="item.mmaPlayerBlue.countryUrl" alt="" :title="item.mmaPlayerBlue.countryName">
                    <span class="list-name">{{item.mmaPlayerBlue.name}}</span>
                    <p>{{item.mmaPlayerBlue.clubName}}</p>
                    <p>{{item.mmaPlayerBlue.victoryCount}}胜-{{item.mmaPlayerBlue.failureCount}}负-{{item.mmaPlayerBlue.matchCount - item.mmaPlayerBlue.victoryCount -  item.mmaPlayerBlue.failureCount}}平</p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="get-more" @click="getMore" v-if="!eventsList.last">加载更多</li>
        </ul>
        <div class="if-list-no-show" v-if="eventsList.arr.length === 0">
          <img src="../../assets/images/@1xlogo111.png" alt="">
          <p>暂无相关搜索结果...</p>
        </div>
      </div>
    </div>
    <div class="details-right rt">
      <!--电视台-->
      <tele-station class="rt"></tele-station>
      <!--俱乐部排名-->
      <!-- <club-rank class="rt"></club-rank> -->
    </div>
  </div>
</template>

<script>
  import clubRank from '../side_board/club_rank.vue'
  import TeleStation from '../side_board/television_station.vue'
  import _ from 'lodash'
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        isShowClubUl: true,
        isShowPlaysUl: true,
        isShowUl: true,
        initChooseValue: {
          runk: ['全部', '2017~2018赛季', '2018~2019赛季'],
          time: ['全部', '2018年4月', '2018年5月'],
          club: ['全部', '徐州韩磊搏击1', '徐州韩磊搏击2', '徐州韩磊搏击3', '徐州韩磊搏击4', '徐州韩磊搏击5'],
          player: ['全部', '米噶领取1', '米噶领取2', '米噶领取3', '米噶领取4', '米噶领取5', '米噶领取6', '米噶领取7']
        },
        // 请求回来要展示的数据
        requestValue: {
          runk: [],
          time: [],
          club: [],
          player: []
        },
        // 选择的数据的索引
        chooseValue: {
          runk: [],
          time: [],
          club: [],
          player: []
        },
        // 要发送的数据
        sendValue: {
          runk: [],
          time: [],
          club: [],
          player: []
        },
        limit: 10,
        on: false
      }
    },
    components: {
      clubRank,
      TeleStation
    },
    computed: mapGetters(['eventsList']),
    methods: {
      // 选手选项
      playItem (res) {
        this.requestValue.player = res.data
        var playerArr = [{'name': '全部'}]
        this.initChooseValue.player = playerArr.concat(res.data)
        // 选手全部 id
        var playIdArr = []
        for (var id in res.data) {
          playIdArr.push(res.data[id].id)
        }
        this.requestValue.player = playIdArr
      },
      // 封装清空默认初始值
      clearInitChooseValue (arr) {
        arr.forEach((value, index) => {
          this.initChooseValue[value] = []
        })
      },
      // 封装默认为全部变成红色
      defaultChooseValue (arr) {
        arr.forEach((value, index) => {
          this.chooseValue[value] = [0]
        })
      },
      // 封装发送请求默认为全部
      clearSendValue (arr) {
        arr.forEach((value, index) => {
          this.sendValue[value] = []
        })
      },
      // 封装选中等于runk时
      ifNowIndexIsRunk (obj) {
        return new Promise((resolve) => {
          // --------------------------------------------------请求时间列表开始-----------------------------------------------------------
          this.$http.getMatchSite(obj).then(res => {
            // 判断返回的数据是空的情况
            if (res.data === '') {
              this.clearInitChooseValue(['time', 'club', 'player'])
              // 赋值到时间原始数组id
              this.requestValue.time = []
            } else {
              // 拼接时间全部按钮到数组
              var timeArr = [{'startTime': '全部'}]
              this.initChooseValue.time = timeArr.concat(res.data.reverse())
              var timeIdArr = []
              // 获取时间的id数组
              for (var indexTime in res.data) {
                timeIdArr.push(res.data[indexTime].id)
              }
              // 赋值到时间原始数组id
              this.requestValue.time = timeIdArr
            }
            // 清除已选择的时间，俱乐部和选手
            this.defaultChooseValue(['time', 'club', 'player'])
            // 清除要发送的时间，俱乐部和选手
            this.clearSendValue(['time', 'club', 'player'])
            // --------------------------------------------------请求时间列表结束-----------------------------------------------------------
            // --------------------------------------------------请求俱乐部列表开始---------------------------------------------------------
            if (this.requestValue.time.length) {
              this.ifNowIndexIsTime(this.requestValue.time)
            }
            resolve()
          })
        })
      },
      // 封装选中等于time时
      ifNowIndexIsTime (obj) {
        return new Promise((resolve, reject) => {
          // --------------------------------------------------请求俱乐部开始---------------------------------------------------------
          this.$http.getMatchClub(obj).then(res => {
            // 判断返回的数据是空的情况
            if (res.data === '') {
              this.clearInitChooseValue(['club', 'player'])
              this.requestValue.club = []
            } else {
              var clubArr = [{'fullName': '全部'}]
              this.initChooseValue.club = clubArr.concat(res.data)
              // 获取选手的id数组
              var clubIdArr = []
              for (var id in res.data) {
                clubIdArr.push(res.data[id].id)
              }
              this.requestValue.club = clubIdArr
            }
            // 清除已选择的时间，俱乐部和选手
            this.defaultChooseValue(['club', 'player'])
            // 清除要发送的时间，俱乐部和选手
            this.clearSendValue(['club', 'player'])
            // --------------------------------------------------请求俱乐部结束---------------------------------------------------------
            if (this.requestValue.club.length) {
              // 封装选中等于club时
              this.ifNowIndexIsClub(this.requestValue.club)
            }
            resolve()
          })
        })
      },
      // 封装选中等于club时
      ifNowIndexIsClub (obj) {
        return new Promise((resolve) => {
          // ---------------------------------------------------请求选手开始----------------------------------------------------------
          this.$http.getMatchHotPlayer(obj).then(res => {
            // 判断返回的数据是空的情况
            if (res.data === '') {
              this.initChooseValue.player = []
              this.requestValue.player = []
            } else {
              this.playItem(res)
            }
            // 清除已选择的选手
            this.chooseValue.player = [0]
            // 清除要发送的选手
            this.sendValue.player = []
            resolve()
          })
          // ---------------------------------------------------请求选手结束----------------------------------------------------------
        })
      },
      showTheUl (key) {
        this[key] = !this[key]
      },
      // nowIndex = runk,time,club,player
      toggleSelection (nowIndex, chooseIndex) {
        //  console.log(''nowIndex)
        var that = this
        var callBack = () => {
          // 复制数组
          var newArr = []
          // 深拷贝
          Object.assign(newArr, this.sendValue)
          // 改变传入参数
          this.$store.dispatch(
            'getTheEventOpion',
            {
              season: newArr.runk,
              site: newArr.time,
              club: newArr.club,
              player: newArr.player,
              start: 0,
              limit: this.limit
            })
          // 拿到参数发送请求
          this.$store.dispatch('getTheEventList')
        }
        // 如果不存在，添加索引
        if (that.chooseValue[nowIndex].indexOf(chooseIndex) === -1) {
          if (chooseIndex === 0) {
            that.chooseValue[nowIndex] = [0]
          }
          // 如果全部 按钮存在，再点击，则删除全部所在的索引0
          if (that.chooseValue[nowIndex].indexOf(0) !== -1) {
            _.remove(that.chooseValue[nowIndex], (idx) => {
              return idx === 0
            })
          }
          // 点击添按钮的索引
          that.chooseValue[nowIndex].push(chooseIndex)

          // 如果点击的按钮存在
        } else {
          // 如果点击的按钮是全部按钮
          if (chooseIndex === 0) {
            // 这个类别按钮等于只选择全部
            that.chooseValue[nowIndex] = [0]
          } else {
            // 如果这个类别按钮不是全部，则删除全部这个按钮
            if (that.chooseValue[nowIndex].indexOf(0) !== -1) {
              _.remove(that.chooseValue[nowIndex], (idx) => {
                return idx === 0
              })
            }
            // 删除再次点击的按钮
            that.chooseValue[nowIndex] = _.remove(that.chooseValue[nowIndex], (idx) => {
              return idx !== chooseIndex
            })
            // 如果点击数值后没有选中任何数值，则要显示全部，并发的option为全部
            if (that.chooseValue[nowIndex].length === 0) {
              that.chooseValue[nowIndex] = [0]
            }
          }
        }
        // 当前所有全部选中的各属性nowIndex对应的列表
        // 判断如果当前选中的是全部的数组
        // 如果是国籍和其他的拿到对应的id，给到要发送的数组
        // 如果复制的数组的idx为0则说明是选择了全部
        if (that.chooseValue[nowIndex][0] === 0) {
          that.sendValue[nowIndex] = that.requestValue[nowIndex]
          if (nowIndex === 'runk') {
            // 点击了全部并且为赛季
            // 封装赛季列表和请求数据
            this.ifNowIndexIsRunk(that.requestValue[nowIndex]).then(callBack)
            // 封装请求时间
          } else if (nowIndex === 'time') {
            this.ifNowIndexIsTime(that.requestValue[nowIndex]).then(callBack)
            // 封装请求俱乐部
          } else if (nowIndex === 'club') {
            this.ifNowIndexIsClub(that.requestValue[nowIndex]).then(callBack)
          } else {
            // 如果是选手
            callBack()
          }
        } else {
          that.sendValue[nowIndex] = _.map(that.chooseValue[nowIndex], (idx) => {
            return this.initChooseValue[nowIndex][idx].id
          })
        }
        if (nowIndex === 'runk' && this.sendValue.runk.length) {
          // 封装赛季列表和请求数据
          this.ifNowIndexIsRunk(this.sendValue.runk).then(callBack)
        } else if (nowIndex === 'time' && this.sendValue.time.length) {
          // 封装请求时间
          this.ifNowIndexIsTime(this.sendValue.time).then(callBack)
        } else if (nowIndex === 'club' && this.sendValue.club.length) {
          // 封装请求俱乐部
          this.ifNowIndexIsClub(this.sendValue.club).then(callBack)
        } else {
          // 如果是选手
          callBack()
        }
         // console.log('复制前的', this.sendValue.player)
      },
      checkActive (type, index) {
        return this.chooseValue[type].indexOf(index) !== -1 || this.chooseValue[type][index] === null
      },
      getMore () {
        this.$store.dispatch('getTheEventList', true)
      },
      jumpToRunk (id) {
        this.$store.dispatch('getEventsDetails', id)
        this.$router.push({path: '/events/runk_details/' + id})
        window.scroll(0, 0)
      },
      // 判断为平的图标显示，如果status为03已结束和04已完成状态时才进行下一次判断
      iconStatus (status, victoryId) {
        if (status === '03' || status === '04') {
          if (victoryId === '') {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      },
      // 判断状态返回相应结果03和04为已结束和已完成状态
      mydata (status, victoryWay, victoryId) {
        if (status === '03' || status === '04') {
          if (victoryId === '') {
            return '平局'
          } else {
            var allVictoryWay = {
              '01': 'KO',
              '02': 'TKO',
              '03': '判定',
              '04': '一方弃权',
              '05': '一方被取消资格'
            }
            return allVictoryWay[victoryWay]
          }
        } else {
          var allStatus = {
            '01': '未开始',
            '02': '进行中',
            '05': '已取消'
          }
          return allStatus[status]
        }
      },
      isGray (status, victoryId) {
        if (status === '01' || status === '05') {
          return true
        } else {
          if (victoryId === '') {
            return true
          } else {
            return false
          }
        }
      },
      isBlue (status, victoryId) {
        if (status === '03' || status === '04') {
          if (victoryId === '') {
            return false
          } else {
            return true
          }
        } else {
          return false
        }
      }
    },
    mounted () {
      // 1.进来全部都显示红色
      // 2.再次点击取消的时候要判断当前的数组是否还有没有其他选中的，如果没有选中，则要显示全部
      // 3.显示全部的同时，下面下级联动和下面列表都要再请求一次
      var that = this
      // 获取选择各项
      this.$http.getMatchSeason().then(res => {
        if (!res.data) {
          return
        }
        // 拼接全部数组
        var runkArr = [{'name': '全部'}]
        this.initChooseValue.runk = runkArr.concat(res.data)
        // 设置全部为红色
        this.chooseValue.runk = [0]
        // 拿到数组里的id拼成数组发给下一联动
        var runkIdArr = []
        //  console.log(typeof (runkIdArr))
        // 获取赛事的id数组
        for (var index in res.data) {
          runkIdArr.push(res.data[index].id)
        }
        // 请求的原始数组id
        this.requestValue.runk = runkIdArr
        // 设置初始数据
        // --------------------------------------------进来请求下方选手对战列表开始------------------------------------------------
        that.$store.dispatch(
          'getTheEventOpion',
          {
            season: that.requestValue.runk,
            start: 0,
            limit: that.limit
          })
        // 拿到参数发送请求获取赛事列表
        that.$store.dispatch('getTheEventList')
        // --------------------------------------------进来请求下方选手对战列表结束-------------------------------------------------
        // --------------------------------------------------请求时间开始-----------------------------------------------------------
        this.$http.getMatchSite(runkIdArr).then(res => {
          // 拼接时间全部按钮到数组
          var timeArr = [{'startTime': '全部'}]
          this.initChooseValue.time = timeArr.concat(res.data.reverse())
          // 设置全部为红色
          this.chooseValue.time = [0]
          var timeIdArr = []
          // 获取时间的id数组
          for (var indexTime in res.data) {
            timeIdArr.push(res.data[indexTime].id)
          }
          // 赋值到时间原始数组id
          this.requestValue.time = timeIdArr
          // --------------------------------------------------请求时间结束-----------------------------------------------------------
          // --------------------------------------------------请求俱乐部开始---------------------------------------------------------
          this.$http.getMatchClub(timeIdArr).then(res => {
            var clubArr = [{'fullName': '全部'}]
            this.initChooseValue.club = clubArr.concat(res.data)
            // 设置全部为红色
            this.chooseValue.club = [0]
            // 获取选手的id数组
            var clubIdArr = []
            for (var id in res.data) {
              clubIdArr.push(res.data[id].id)
            }
            this.requestValue.club = clubIdArr
            // --------------------------------------------------请求俱乐部结束---------------------------------------------------------
            // ---------------------------------------------------请求选手开始----------------------------------------------------------
            this.$http.getMatchHotPlayer(clubIdArr).then(res => {
              this.playItem(res)
              // 设置全部为红色
              this.chooseValue.player = [0]
            })
            // ---------------------------------------------------请求选手结束----------------------------------------------------------
          })
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  .all-runk-page {
    padding: 18px 10px;
    p:first-child {
      text-align: left;
    }
  }
  .details-right {
    width: 380px;
  }

  .all-runk-page-left {
    width: 820px;
  }

  .runk-choose {
    font-size: 16px;
    color: #353536;
    letter-spacing: -0.6px;
    line-height: 22px;
    & > ul > li {
      width: 820px;
      clear: both;
      float: left;
      text-align: left;
      padding: 16px 0;
      /*border-bottom: 1px dashed #353536;*/
      span:first-child {
        display: inline-block;
        width: 51px;
        float: left;
      }
      span:nth-of-type(2){
        cursor: pointer;
        margin-left: 22px;
        position: relative;
        float: right;
      }
      i {
        position: absolute;
        left: -32px;
        top: -2px;
        display: inline-block;
        width: 19px;
        height: 19px;
        margin-top: 2px;
        margin-right: 8px;
      }
    }

    & > ul > li > ul {
      float: left;
      width: 652px;
    }
    & > ul > li > .showUl {
      height: 20px;
      overflow: hidden;
    }
    & > ul > li .showI {
    }

    & > ul > li > ul > li {
      cursor: pointer;
      float: left;
      margin-left: 30px;
      margin-bottom: 10px;
    }
    & > ul > li > ul > li:hover{
      color: red;
    }
    & > ul > li > ul > .red {
      color: red;
    }
    & > li {
      float: left;
      margin-left: 20px;
      margin-bottom: 10px;
    }
  }

  .list {
    margin-top: 22px;
    width: 820px;
    li:hover .list-name{
      color: red;
    }
    li:hover .status{
      color: black !important;
    }
    li:hover{
      background-color: #EBEBEB !important;
      .list-title-left{
        background-color: #EBEBEB !important;
      }
    }
    .list-details-ul > li {
      position: relative;
      width: 100%;
      height: 130px;
      background: #FFFFFF;
      padding: 5px 0 0 0;
      box-sizing: border-box;
      cursor: pointer;
      .line{
        width: 100%;
        height: 1px;
        border-bottom: 1px dotted #979797;
        position: absolute;
        left: 160px;
        top: 16px;

      }
      .gray{
        color: #aaaaaa;
      }
      .lightYellow{
        color: #f7bb59;
      }
      .blue{
        color: #1B3864;
      }
      .win-icon-left{
        margin-left: 13px;
      }
      .win-icon-right{
        margin-right: 13px;
      }
      .list-title-left {
        .icon{
          color: #838383;
          font-size: 14px;
          position: absolute;
          left: 151px;
          top: 9px;
        }
        width: 160px;
        height: 20px;
        background-color: white;
        font-size: 14px;
        color: #838383;
        letter-spacing: -0.53px;
        margin-bottom: 10px;
        z-index: 999;
      }
    }
    //列表详情
    .list-details-left,
    .list-details-right {
      width: 350px;
      .play-img {
        width: 72px;
        height: 90px;
      }
      .list-name {
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.74px;
        font-weight: bolder;
      }
      .flag {
        width: 30px;
        height: 18px;
      }
      p {
        font-size: 14px;
        color: #353536;
        letter-spacing: 0;
        line-height: 24px;
      }
      p:first-of-type {
        margin-top: 9px;
      }
      .list-details-left-inside {
        margin-top: 5px;
      }
    }
    .list-details-left {
      text-align: left;
      float: left;
      & > img:first-of-type {
        float: left;
        margin-right: 20px;
      }
      .flag {
        margin-left: 17px;
      }
    }
    .list-details-right {
      text-align: right;
      float: right;
      & > img:first-of-type {
        float: right;
        margin-left: 20px;
      }
      .flag {
        margin-right: 17px;
      }
    }
    .list-details-middle {
      width: 160px;
      height: 130px;
      position: absolute;
      left: 50%;
      top: 39px;
      margin-left: -80px;
      .vs {
        font-size: 24px;
        color: #353536;
        letter-spacing: -0.74px;
        font-weight: bolder;
      }
      p {
        margin-top: 6px;
        font-size: 16px;
        color: #353536;
        letter-spacing: -0.74px;
        text-align: center;
      }
    }
    .get-more{
      color: #838383;
      padding: 0;
      margin-top: 50px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      border: none;
      background-color: #F0EFEF;
      margin-bottom: 80px;
    }
  }
  .if-list-no-show{
    margin: 160px auto;
    p{
      margin-top: 12px;
      font-size:16px;
      color: #838383;
    }
  }
</style>
