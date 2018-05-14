<template>
  <div class="w white overflow player">
    <div class="advertising-top" v-if="isShowTopAdvertising">
      <a :href="fullUrl">
        <img :src="fullImg |smallImage(1240, 120)" alt="">
      </a>
    </div>
    <div class="all-runk-page">
      <div class="all-runk-page-left lf overflow">
        <div class="top">
          <span>选手</span>
        </div>
        <div class="player-input">
          <input type="text" placeholder="请输入名称" v-model="searchData" @keyup.enter="search"><span @click = 'search' ><i></i></span>
        </div>
        <div class="runk-choose  overflow">
          <ul>
            <li class="third-li">
              <span>俱乐部:</span>
              <ul :class="{showUl:isShowClubUl}">
                <li :class="{red:checkActive('club',index) }" v-for="(club,index) in initChooseValue.club" @click="toggleSelection('club',index )">{{club.fullName}}</li>
              </ul>
              <!--<span v-if="initChooseValue.club.length > 5"><i :class="{showI:isShowClubUl}" @click="showTheUl('isShowClubUl')"></i>显示全部</span>-->
              <span @click="showTheUl('isShowClubUl')">
                <i class="iconfont" v-if="isShowClubUl">&#xe6e0;</i>
                <i class="iconfont" v-if="!isShowClubUl">&#xe6f2;</i>
                显示全部
              </span>
            </li>
            <li>
              <span>级别:</span>
              <ul :class="{showUl:isShowUl}">
                <li :class="{red:checkActive('level',index) }" v-for="(level,index) in initChooseValue.level" @click="toggleSelection('level',index )">{{level.code|playLevel}}</li>
              </ul>
              <!--<span>-->
                <!--<i :class="{showI:isShowUl}" @click="showTheUl">-->

              <!--</i>显示全部</span>-->
              <span @click="showTheUl('isShowUl')">
                <i class="iconfont" v-if="isShowUl">&#xe6e0;</i>
                <i class="iconfont" v-else>&#xe6f2;</i>
                显示全部
              </span>
            </li>
            <li>
              <span>国籍:</span>
              <ul :class="{showUl:isShowCountryUl}">
                <li :class="{red:checkActive('country',index) }" @click="toggleSelection('country',index )" v-for="(country,index) in initChooseValue.country" >{{country.name}}</li>
              </ul>
              <span @click="showTheUl('isShowCountryUl')">
                <i class="iconfont" v-if="isShowCountryUl">&#xe6e0;</i>
                <i class="iconfont" v-if="!isShowCountryUl">&#xe6f2;</i>
                显示全部
              </span>
            </li>
          </ul>
        </div>
        <!--下边列表显示-->
        <div class="list">
          <player-list v-if="playerList !== null"></player-list>
          <!--<player-list ></player-list>-->
          <!--<div class="if-list-no-show" v-if="playerList.length == 0">-->
          <div class="if-list-no-show" v-if="playerList.data === null">
            <img src="../../assets/images/@1xlogo111.png" alt="">
            <p>暂无相关搜索结果...</p>
          </div>
        </div>
      </div>
      <div class="details-right rt">
        <!--广告-->
        <div class="advertising rt" v-if="isShowAdvertising">
          <a :href="url">
            <img :src="img | smallImage(380, 231)" alt="">
          </a>
        </div>
        <!--俱乐部排名-->
        <!-- <club-rank class="rt"></club-rank> -->
        <player-rank></player-rank>
      </div>
    </div>
  </div>
</template>

<script>
  import ClubRank from '../side_board/club_rank.vue'
  import PlayerRank from '../side_board/player_rank.vue'
  import PlayerList from './player_list.vue'
  import _ from 'lodash'
  import {mapGetters} from 'vuex'
  import {title} from 'src/base/title.js'
  export default{
    title: title + '选手',
    data () {
      return {
        // 广告api
        url: 'javascript:;',
        img: '',
        fullUrl: 'javascript:;',
        fullImg: '',
        isShowAdvertising: true,
        isShowTopAdvertising: true,
        // 列表数据
        isShowClubUl: true,
        isShowCountryUl: true,
        isShowUl: true,
        initChooseValue: {
          country: ['全部', '2017~2018赛季', '2018~2019赛季'],
          level: ['全部', '2018年4月', '2018年5月'],
          club: ['全部', '徐州韩磊搏击1', '徐州韩磊搏击2', '徐州韩磊搏击3', '徐州韩磊搏击4', '徐州韩磊搏击5']
        },
        // 选中的索引
        chooseValue: {
          country: [],
          level: [],
          club: []
        },
        // 要发送的数据
        sendValue: {
          country: [],
          level: [],
          club: []
        },
        on: false,
        limit: 10,
        // 搜索
        searchData: ''
      }
    },
    components: {
      ClubRank,
      PlayerRank,
      PlayerList
    },
    watch: {
      searchData: function (newData, oldData) {
        if (newData === '') {
          this.$store.dispatch(
            'getThePlayerOption',
            {
              countryId: '',
              level: '',
              clubId: '',
              search: this.searchData,
              limit: this.limit
            })
          this.$store.dispatch('getThePlayerList')
        }
      }
    },
    computed: mapGetters(['playerOption', 'playerList']),
    methods: {
      showTheUl (key) {
        this[key] = !this[key]
      },
      toggleSelection (nowIndex, chooseIndex) {
        // console.log(''nowIndex)
        var that = this
        // 如果不存在，添加索引
        if (that.chooseValue[nowIndex].indexOf(chooseIndex) === -1) {
          if (chooseIndex === 0) {
            that.chooseValue[nowIndex] = [0]
          }
          // 如果全部 按钮存在，再点击，则删除全部
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
          }
        }
        // 当前所有全部选中的各属性nowIndex对应的列表
        // console.log('当前选中的', that.chooseValue[nowIndex])
        // 如果是 level属性，拿到level里的code属性
        if (nowIndex === 'level') {
          that.sendValue[nowIndex] = _.map(that.chooseValue[nowIndex], (idx) => {
            return this.initChooseValue[nowIndex][idx].code
          })
        } else {
          // 如果是国籍和其他的拿到对应的id，给到要发送的数组
          that.sendValue[nowIndex] = _.map(that.chooseValue[nowIndex], (idx) => {
            return this.initChooseValue[nowIndex][idx].id
          })
        }
        // console.log('复制数组前', this.sendValue)
        // 复制数组
        var newArr = []
        // 深拷贝
        Object.assign(newArr, this.sendValue)
        // 改变传入参数
        // console.log('复制后的数组', newArr)
        this.$store.dispatch(
          'getThePlayerOption',
          {
            countryId: newArr.country,
            level: newArr.level,
            clubId: newArr.club,
            search: this.searchData,
            limit: this.limit
          })
        // 拿到参数发送请求
        this.$store.dispatch('getThePlayerList')
      },
      checkActive (type, index) {
        // console.log('判断类名', this.chooseValue[type][index])
        return this.chooseValue[type].indexOf(index) !== -1 || this.chooseValue[type][index] === null
      },
      search () {
        // 判断是否为空或者全部是空格
        function isNull (str) {
          if (str === '') return true
          var regu = '^[ ]+$'
          var re = new RegExp(regu)
          return re.test(str)
        }
        // 如果输入内容为空，返回
        if (isNull(this.searchData)) return
        this.$store.dispatch(
          'getThePlayerOption',
          {
            countryId: '',
            level: '',
            clubId: '',
            search: this.searchData,
            limit: this.limit
          })
        this.$store.dispatch('getThePlayerList')
      }
    },
    mounted () {
      // 广告api
      this.$http.getAdsense(5).then(res => {
        if (res.data) {
//        alert(1)
          if (res.data[0]) {
//          alert(2)
            if (res.data[0].infoAdsenseImages[0]) {
//            alert(3)
              this.url = res.data[0].infoAdsenseImages[0].url
              this.img = res.data[0].infoAdsenseImages[0].imageUrl
            } else {
              this.isShowAdvertising = false
            }
          } else {
            this.isShowAdvertising = false
          }
        } else {
          this.isShowAdvertising = false
        }
      })
      // 广告横栏api 横栏传参数为奇数
      this.$http.getAdsense(4).then(res => {
        if (res.data) {
          if (res.data[0]) {
            if (res.data[0].infoAdsenseImages[0]) {
              this.fullUrl = res.data[0].infoAdsenseImages[0].url
              this.fullImg = res.data[0].infoAdsenseImages[0].imageUrl
            } else {
              this.isShowTopAdvertising = false
              console.error('res.data[0].infoAdsenseImages[0]无数据')
            }
          } else {
            this.isShowTopAdvertising = false
            console.error('res.data[0]无数据')
          }
        } else {
          this.isShowTopAdvertising = false
          console.error('res.data无数据')
        }
      })
      this.$http.getPlayerCountryList().then(res => {
//          console.log('国籍', res.data.data)
        this.initChooseValue.country = res.data.data.reverse()
      })
      this.$http.getPlayerLevelList().then(res => {
//        console.log('水平', res.data)
        this.initChooseValue.level = res.data.reverse()
//        console.log(this.initChooseValue.level)
      })
      this.$http.getClubRankTop().then(res => {
//        console.log('俱乐部', res.data.data)
        this.initChooseValue.club = res.data.data.reverse()
      })
      // 进入获取全部选手信息
      this.$store.dispatch('getThePlayerOption', {limit: 10})
      this.$store.dispatch('getThePlayerList')
    }
  }
</script>

<style lang="scss" scoped>
  .player-input{
    padding: 23px 0 10px 0;
    overflow: hidden;
    &>input{
      border: 1px solid #959698;
      border-right: none;
      border-radius: 3px;
      float: left;
      box-sizing: border-box;
      padding: 5px 10px 5px 10px;
      width: 242px;
      height: 30px;
      font-size: 14px;
      color: #838383;
      letter-spacing: 0;
    }
    span{
      width: 48px;
      height: 30px;
      display: inline-block;
      background:url("../../assets/images/@1xCombined Shape.png");
      float: left;
      line-height: 36px;
      i{
        width: 16px;
        height: 16px;
        display: inline-block;
        color: red;
        background:url("../../assets/images/@1xsearch.png");
      }
    }
  }
  .top{
    height: 44px;
    background-color: #353536;
    span{
      width: 100px;
      display: inline-block;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: -0.6px;
      background-image: url("../../assets/images/@1xsekuai1.png");
      float: left;
      line-height: 41px;
      padding-left: 13px;
      text-align: left;
      box-sizing: border-box;
    }
  }

  .all-runk-page{
    padding: 18px 10px;
  }
  .details-right{
    width: 380px;
  }
  .all-runk-page-left{
    width: 820px;
  }
  .runk-choose{
    font-size: 16px;
    color: #353536;
    letter-spacing: -0.6px;
    line-height: 22px;
    &>ul>li{
      width: 820px;
      clear: both;
      float: left;
      text-align: left;
      padding-top: 15px;
      border-bottom: 1px dashed #353536;
      span:first-child{
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

    &>ul>li>ul{
      float: left;
      width: 652px;
    }
    &>ul>li>.showUl{
      height: 36px;
      overflow: hidden;
    }
    &>ul>li .showI{
      background: url('../../assets/images/@1xxianshi.png') no-repeat 0 0;
    }

    &>ul>li>ul>li{
      cursor: pointer;
      float: left;
      margin-left: 30px;
      margin-bottom: 14px;
    }
    &>ul>li>ul>li:hover {
      color: red;
    }
    &>ul>li>ul>.red{
      color: red;
    }
    &>li{
      float: left;
      margin-left: 20px;
      margin-bottom: 10px;
    }
  }
  .list{
    margin-top: 22px;
    width: 820px;
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
