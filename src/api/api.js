/**
 * Created by Administrator on 2017/8/4.
 */
// import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import api from 'create-api'
const url = api.url
// const url = 'http://127.0.0.1:8000'
export default {
  // 首页轮播图
  getSlideShow: () => {
    return axios.get(url + '/mma/rotation')
  },
  // 首页热门选手
  getHotPlayer: () => {
    return axios.get(url + '/mma/playerHot')
  },
  // 首页最新赛事
  getNewesMatch: () => {
    return axios.get(url + '/mma/newestMatch')
  },
  // 首页最新资讯
  getNewInfo: (index) => {
    return axios.get(url + '/mma/newInfo', {
      params: {
        start: 0,
        limit: index
      }
    })
  },
  // 俱乐部排名
  getClubRank: (index, limit = 5) => {
    return axios.get(url + '/mma/clubRank', {
      params: {
        start: index,
        limit: limit
      }
    })
  },
  // 选手排名
  getPlayerRank: (level, index) => {
    return axios.get(url + '/mma/playerRank', {
      params: {
        level: level,
        start: 0,
        limit: index
      }
    })
  },
  // 新闻详情页
  getNewsMessage: (id) => {
    return axios.get(url + '/mma/newsMessage', {
      params: {
        id: id
      }
    })
  },
  // 票务
  getTicketMessage: (id) => {
    return axios.get(url + '/mma/currentTicketing')
  },
  // 获取当前赛站id
  getCurrentSiteId: () => {
    return axios.get(url + '/mma/currentSite')
  },
  // 获取赛事资讯列表
  getInfoListDefault: req => {
    return axios.get(url + '/mma/newInfo?' + qs.stringify(req))
  },
  // 后更改的赛事资讯列表
  getInfoList: req => {
    return axios.get(url + '/mma/newSiteInfo?' + qs.stringify(req))
  },
  // 获取首页搜索数据
  getHomePageInfoList: req => {
    return axios.get(url + '/mma/newInfo?' + qs.stringify(req))
  },
  // 获取首页搜索总数
  getHomeSearchCount: req => {
    return axios.get(url + '/mma/infoCount?' + qs.stringify({search: req}))
  },
  // 视频详情页
  getDemandMessage: (id) => {
    return axios.get(url + '/mma/demandMessage', {
      params: {
        id: id
      }
    })
  },
  // 获取广告位信息
  getAdLists: ids => {
    return axios.get(url + '/mma/adsense?' + qs.stringify(ids))
  },
  // 新闻页 mma/newsSearch?categoryId=1&start=0&limit=10
  getNews: (type, index) => {
    return axios.get(url + '/mma/newsSearch', {
      params: {
        categoryId: type,
        start: 0,
        limit: index
      }
    })
  },
  // 热点新闻 /newsHot
  getNewsHot: () => {
    return axios.get(url + '/mma/newsHot')
  },
  // 视频页 mma/demandSearch?start=0&limit=10
  getVideo: (type, index) => {
    return axios.get(url + '/mma/demandSearch', {
      params: {
        categoryId: type,
        start: 0,
        limit: index
      }
    })
  },
  // 热点视频 /mma/demandHot
  getVideoHot: () => {
    return axios.get(url + '/mma/demandHot')
  },
  // 广告位 mma/adsense?ids=2
  getAdsense: (id) => {
    return axios.get(url + '/mma/adsense', {
      params: {
        ids: id
      }
    })
  },
  // 图片页 http://192.168.80.154:8010/mma/photoSearch?start=0&limit=10
  getPhoto: (type, index) => {
    return axios.get(url + '/mma/photoSearch', {
      params: {
        categoryId: type,
        start: 0,
        limit: index
      }
    })
  },
  // 热点图片
  getHotPhoto: () => {
    return axios.get(url + '/mma/photoHot')
  },
  // 图片详情页 http://192.168.80.154:8010/mma/photoMessage?id=1
  getPhotoMessage (id) {
    return axios.get(url + '/mma/photoMessage', {
      params: {
        id: id
      }
    })
  },
  // 俱乐部详情 mma/clubMessage?id=1
  getClubMessage: (id) => {
    return axios.get(url + '/mma/clubMessage', {
      params: {
        id: id
      }
    })
  },
  // 选手详情
  getPlayerMessage: (id) => {
    return axios.get(url + '/mma/playMessage', {
      params: {
        id: id
      }
    })
  },
  // 选手对象信息mma/playerMatch?id=1&start=0&limit=4
  getPlayerEnemy: (id, limit) => {
    return axios.get(url + '/mma/playerMatch', {
      params: {
        id: id,
        start: 0,
        limit: limit
      }
    })
  },
  /**
   * 公共api
   get /currentSite 当前赛季
   get /currentTicketing 票务
   */
  getCurrentSite () {
    return axios.get(url + '/mma/currentSite')
    // 测试客户端请求数据
    // return axios.get( '/client' + '/mma/currentSite')
  },
  getCurrentTicketing () {
    return axios.get(url + '/mma/currentTicketing')
  },
  /**
   * 公共apiTop栏
   get 分类id,0新闻,1组图，2视频 http://192.168.80.154:8010/mma/dynamicTop?type=0
   */
  getDynamicTop (type) {
    return axios.get(url + '/mma/dynamicTop', {
      params: {
        type: type
      }
    })
  },
  // 选手国籍列表http://192.168.80.154:8010/mma/countryList
  getPlayerCountryList () {
    return axios.get(url + '/mma/countryList')
  },
  // 选手水平列表http://192.168.80.154:8010/mma/playerLevel
  getPlayerLevelList () {
    return axios.get(url + '/mma/playerLevel')
  },
  // 选手俱乐部筛选
  getClubRankTop () {
    return axios.get(url + '/mma/clubTop', {
      params: {
        start: 0,
        limit: 999
      }
    })
  },
  // 选手根据传参数获取数据
  getPlayerList (option) {
    // console.log('api里的', option)
    // 改变传入参数
    let sendOption = {
      countryId: option.countryId,
      level: option.level,
      clubId: option.clubId,
      start: 0,
      search: option.search,
      limit: option.limit
    }
    return axios.get(url + '/mma/palyerSearch?' + qs.stringify(sendOption))
  },
  // 获取选手Tap栏http://192.168.80.154:8010/mma/playerLevel
  getPlayerTap () {
    return axios.get(url + '/mma/playerLevel')
  },
  /**
   * 赛站页
   * nowSeason 入口 获取当前事
   * getMatch 联动 获取下面列表
   * currentCompetitionSite 01是当前赛事 02非当前塞事
   */
  getNowSeason () {
    return axios.get(url + '/mma/nowSeason')
  },
  // 获取赛站的列表
  getMatch (sendOption) {
    return axios.get(url + '/mma/getMatch?' + qs.stringify(sendOption))
  },
  /**
   * 全部赛事接口
   * /mma/getMatchSeason 全部赛事
   * /getMatchSite 赛事时间
   * /getMatchClub 俱乐部
   * /getMatchHotPlayer 获取选手
   */
  getMatchSeason () {
    return axios.get(url + '/mma/getMatchSeason')
  },
  getMatchSite: ids => {
    var MatchSiteArr = 'ids='
    for (var mykey in ids) {
      // console.log(mykey)
      if (mykey === '0') {
        MatchSiteArr = MatchSiteArr + ids[mykey]
      } else {
        MatchSiteArr = MatchSiteArr + '%2C' + ids[mykey]
      }
    }
    return axios.get(url + '/mma/getMatchSite?' + MatchSiteArr)
  },
  getMatchClub (ids) {
    var MatchSiteArr = 'ids='
    for (var mykey in ids) {
      // console.log(mykey)
      if (mykey === '0') {
        MatchSiteArr = MatchSiteArr + ids[mykey]
      } else {
        MatchSiteArr = MatchSiteArr + '%2C' + ids[mykey]
      }
    }
    return axios.get(url + '/mma/getMatchClub?' + MatchSiteArr)
  },
  getMatchHotPlayer (ids) {
    var MatchSiteArr = 'ids='
    for (var mykey in ids) {
      // console.log(mykey)
      if (mykey === '0') {
        MatchSiteArr = MatchSiteArr + ids[mykey]
      } else {
        MatchSiteArr = MatchSiteArr + '%2C' + ids[mykey]
      }
    }
    return axios.get(url + '/mma/getMatchHotPlayer?' + MatchSiteArr)
  },
  // 获取赛事列表
  getSearchMatch (option) {
    return axios.get(url + '/mma/searchMatch?' + qs.stringify(option))
  },
  // 赛事详情http://192.168.80.237:8010/mma/MatchMessage?id=1
  getMatchMessage (id) {
    return axios.get(url + '/mma/MatchMessage', {
      params: {
        id: id
      }
    })
  },
    /**
     * 1.0.7 新增加api
     * 首页滚动屏左侧、
     */
  getIndexInfoNews () {
   return axios.get(url + '/mma/index_info_news')
  },
    /**
     * 1.0.8接口
     */
  // 合作俱乐部
  getTeamClubInfo (limit) {
   return axios.get(url + '/mma/team_club_info?' + qs.stringify({
       page: 0,
       pageSize: limit
   }) )
  },
  // 合作媒体
  getTeamMediaInfo (limit) {
   return axios.get(url + '/mma/team_media_info?'+ qs.stringify({
       page: 0,
       pageSize: limit
   }) )
  },
  getClubRankImg () {
   return axios.get(url + '/mma/getClubRankImg')
  }
}
