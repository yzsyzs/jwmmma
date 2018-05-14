/**
 * Created by Administrator on 2017/7/27.
 */
// import Router from 'vue-router'
import lockr from 'lockr'
import {

  INCREMENT,
  GETUSER,
  SETUSERINFO,
  LOGINOUT,
  CHANGSELECTNAVSHOW,
  CHANGNAVSHOW,
  LONGING_SHOW,
  LONGING_HIDE,
  GETSLIDERSHOW,
  NEWSDETAILS,
  VIDEODETAILS,
  NEWSTAG,
  VIDEOTAG,
  PHOTOTAG,
  PHOTODETAILS,
  CLUBDETAILS,
  PLAYERDETAILS,
  PLAYERLIST,
  PLAYEROPTION,
  PLAYERRUNKTAP,
  EVENTSID,
  FIRSTID,
  INDEXTAP,
  ClEARARR,
  EVENTSLIST,
  EVENTSOPTION,
  EVENTSDETAILS,
  EVENTSDETAILSVIDEOINDEX,
  SEARCHARR,
  CLEARSEARCHARR,
  ADVERTISING,
  HOMENEWS,
  MEDIA,
  CLUB
} from './types.js'
import getters from './getters'
import $http from '../api/api'
const state = {
  // 侧边栏广告api
  advertising: {
    isShowTopAdvertising: true,
    isShowAdvertising: true,
    fullUrl: 'javascript:;',
    url: 'javascript:;',
    fullImg: '',
    img: '',
  },
  // 首页轮播图
  slide_show: [
    {
      'photoUrl': require('../assets/images/default_img/@1xshouye_banner.jpg'),
      'title': '',
      'hrefUrl': 'detail/analysis'
    },
    {
      'photoUrl': require('../assets/images/default_img/@1xshouye_banner.jpg'),
      'title': '',
      'hrefUrl': 'detail/count'
    },
    {
      'photoUrl': require('../assets/images/default_img/@1xshouye_banner.jpg'),
      'title': '',
      'hrefUrl': 'http://xxx.xxx.com'
    },
    {
      'photoUrl': require('../assets/images/default_img/@1xshouye_banner.jpg'),
      'title': '',
      'hrefUrl': 'detail/forecast'
    }
  ],
  // tagsli的数据
  information_arr: {
    tags: [],
    all: [
      {
        type: 1,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '精武门八强赛精彩瞬间【16P】',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '第二种类型',
        rank: 1
      },
      {
        type: 1,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '精武门八强赛精彩瞬间【16P】',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '第二种类型',
        rank: 1
      }
    ],
    photos: [
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '精武门八强赛精彩瞬间【16P】',
        time: '6月27日 14:12'
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '第二种类型',
        rank: 1
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '精武门八强赛精彩瞬间【16P】',
        time: '6月27日 14:12'
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '第二种类型',
        rank: 1
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '精武门八强赛精彩瞬间【16P】',
        time: '6月27日 14:12'
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '精武门八强赛精彩瞬间【16P】',
        time: '6月27日 14:12'
      },
      {
        type: 2,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '精武门八强赛精彩瞬间【16P】',
        time: '6月27日 14:12'
      }
    ],
    video: [
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      },
      {
        type: 3,
        icon: require('../assets/images/@1xRectangle 20 Copy.png'),
        name: '搏击行业现状及未来发展解析',
        content: '搏击运动起源于日本，是1960年日本空手道与泰拳对抗赛，由日本人改良的运动项目。Kickboxing，从英文名称就可以看出，规则大概就是“可以踢的拳击”，可以使用拳、腿、膝，但是禁止摔和肘击（也算是区别泰拳规则），也禁止打击后脑和裆部。······',
        time: '6月27日 14:12'
      }
    ],
    hotNews: [
      {
        icon: require('../assets/images/@1xRectangle 10.png'),
        name: '雅桑克莱进军诸神16强',
        title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xsanjiao_x.png'),
        name: '格斗兄弟',
        title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xsanjiao_x.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xsanjiao_x.png'),
        name: '格斗兄弟',
        title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xsanjiao_x.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xsanjiao_x.png'),
        name: '格斗兄弟',
        title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xsanjiao_x.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xsanjiao_x.png'),
        name: '格斗兄弟',
        title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xsanjiao_x.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xsanjiao_x.png'),
        name: '格斗兄弟',
        title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍...',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xsanjiao_x.png') + ')'
        },
        rank: 1
      }
    ],
    allKingsOfCombat: [
      {
        icon: require('../assets/images/@1xRectangle 10.png'),
        name: '拳击',
        title: '一种依靠拳头上的填充式皮制手套相互攻击的格斗项目或运动。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xkongshoudao.png'),
        name: '空手道',
        title: '一种日本格斗术，以力大、直线攻击技艺著称，包括型和组手两种技术形式。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xbaxiroushu.png'),
        name: '巴西柔术',
        title: '一种根据“柔道”改良过后，综合格斗竞技与系统自卫于一身的武术。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xsanda.png'),
        name: '散打',
        title: '国标武术的主要表现形式，以踢、打、摔、拿四大攻防技法为主的格斗项目。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xrondao.png'),
        name: '柔道',
        title: '柔道是一种日本的传统格斗术，以摔法和地面技为主。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xtaiquan.png'),
        name: '泰拳',
        title: '在极短的距离下，利用手肘、膝盖等部位进行攻击，以力量与敏捷著称。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xtaiquandao.png'),
        name: '跆拳道',
        title: '全球最为流行的格斗术之一，是一种韩国格斗术，因其快速多变的踢技而闻名。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xshuaijiao.png'),
        name: '自由式摔跤',
        title: '据目前记载，起源于英国，可手足并用，直至将对方摔到两肩着地为止。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/古典式摔跤.jpg'),
        name: '古典式摔跤',
        title: '起源于法国，比赛中要求运动员只许用手臂和上身攻击对方的上身。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      },
      {
        icon: require('../assets/images/@1xjiequandao.jpg'),
        name: '截拳道',
        title: '截拳道是李小龙所创立的融合世界各种武术精华的全方位自由搏击术。',
        runkImg: {
          backgroundImage: 'url(' + require('../assets/images/@1xRectangle 10.png') + ')'
        },
        rank: 1
      }
    ]
  },
  // nav切换input控制
  isSelectNavShow: true,
  // 控制nav是否显示
  isNavShow: true,
  // 请求数据过渡效果
  loading: false,
  // 新闻详情
  newsDetails: {
    title: '',
    lastNews: {
      title: ''
    },
    firstNews: {
      title: ''
    }
  },
  // 视频详情
  videoDetails: {},
  // 图片详情
  photoDetails: {
    releaseTime: 1501603200000,
    id: 999,
    title: '1',
    infoPhotoImages:
    [
      {
        id: 2,
        title: '2',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502901026727&di=4251879efe34db3afe5452ce92456c4d&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg',
        detail: '2'
      },
      {
        id: 999,
        title: '1',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502901026727&di=4251879efe34db3afe5452ce92456c4d&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg',
        detail: '1'
      }
    ]
  },
  // 新闻页tag内容
  newsTag: [],
  // 视频页tag内容
  videoTag: [],
  // 图片页tag内容
  photoTag: [],
  // 俱乐部详情页
  clubDetails: {
      detail: '<p>***************************</p>'
  },
  // 选手详情页
  playerDetails: {
    club: {
      fullName: '初始值'
    },
    atRecord: {
      integral: '初始值'
    }
  },
  // 选手对手信息
  playerEnemy: [],
  // 选手页列表
  playerList: {data: [], last: true},
  // 选手参数
  playerOption: {limit: 10},
  // 选手排行榜全部水平页面
  playerRunkTap: {
    data: []
  },
  // 赛事记录点击哪一个赛事
  eventsId: 0,
  // 记录第一次不点击时候进来的id
  firstId: 0,
  // 赛事动态tag内容
  indexTap: {
    data: [],
    last: '',
    // 判断第一次进入是否为空
    frist: true
  },
  // 全部选手页列表
    eventsList: {
      arr: [],
      last: true
    },
  // 选手参数
  eventsOption: {limit: 10},
  // 赛事详情
  eventsDetails: {
      demand: [],
      siteName: '****',
    mmaPlayerBlue: {faceImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503319062491&di=b0e805d5b63273bf8bd011feafe2c5eb&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg',
      id: 0},
    mmaPlayerRed: {
      faceImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503319062491&di=b0e805d5b63273bf8bd011feafe2c5eb&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg',
      clubName:'***',
      id: 0
    },
  },
  // 赛事详情点播哪一个视频
  eventsDetailsVideoIndex: {index: 0, videoUrl: ''},
  // 首页搜索内容
  searchArr: {
    data: [],
    last: '',
    // 判断第一次进入是否为空
    frist: true,
    // 搜索值
    searchData: '',
    count: 0
  },
  // --------------------------------------------服务端预渲染数据-----------------------------------------------------------
  // 首页资讯
  homeNews: [],
  // 合作媒体
  mediaPartners: [],
  // 合作俱乐部
  clubPartners: [],
  // 用户信息
  userInfo:null
}
const mutations = {
  [INCREMENT] (state) {
   // alert('测试')
  },
  // 获取用户信息
  [GETUSER] (state, userData){
    // console.log('mutationsuser', userData);
    state.userInfo = userData

  },

  //登录时设置用户信息
  [SETUSERINFO] (state,loginCallBackInfo){

    if(!loginCallBackInfo) return
    if(!loginCallBackInfo.userInfo) return
    state.userInfo = loginCallBackInfo.userInfo
    // console.log('存入vuex', state.userInfo)

  },
  // 退出用户
  [LOGINOUT] (state){
    pass.default.loginOut()
    state.userInfo = null
  },
  // 搜索页点击切换
  [CHANGSELECTNAVSHOW] (state) {
    state.isSelectNavShow = !state.isSelectNavShow
  },
  // 导航页隐藏
  [CHANGNAVSHOW] (state) {
    state.isNavShow = !state.isNavShow
  },
  [LONGING_HIDE] (state) {
    state.loading = false
  },
  [LONGING_SHOW] (state) {
    state.loading = true
  },
  [GETSLIDERSHOW] (state, item) {
    state.slide_show = item
  },
  // 新闻详情
  [NEWSDETAILS] (state, item) {
      state.newsDetails = item
  },
  // 视频详情
  [VIDEODETAILS] (state, item) {
      for(let val in item) {
          if(item[val] === null) {
              item[val] = []
          }
      }
      state.videoDetails = item
  },
  // 新闻tag栏列表数据获取
  [NEWSTAG] (state, option) {
    // 如果是赛事新闻页面
    if (option.currentTap === 'eventsNewz') {
      $http.getInfoList(option.option).then(res => {
        if (res.data.data === null) {
          res.data = {'last': '', data: []}
        }
        state.newsTag = res.data.data
        state.newsTag.forEach(function (val, index) {
          state.newsTag[index].summary = val.details
          state.newsTag[index].releaseTime = val.createTime
        })
        state.newsTag['last'] = res.data.last
      })
    // 如果是其他新闻页面
    } else {
      $http.getNews(option.type, option.limit).then(res => {
        if (res.data.data === null) {
          res.data = {'last': '', data: []}
        }
        state.newsTag = res.data.data
        state.newsTag['last'] = res.data.last
      })
    }
  },
  // 视频tap栏
  [VIDEOTAG] (state, option) {
    if (option.currentTap === 'eventsVideo') {
      $http.getInfoList(option.option).then(res => {
        if (res.data.data === null) {
          res.data = {'last': '', data: []}
        }
        // 转换组图接口数据
        res.data.data.forEach(function (val, index) {
          for (var key in val) {
            if (key === 'image') {
              val['coverImage'] = val.image
            }
          }
          res.data.data[index].releaseTime = val.createTime
        })
        state.videoTag = res.data.data
        state.videoTag['last'] = res.data.last
      })
      // 如果是其他新闻页面
    } else {
      $http.getVideo(option.type, option.limit).then(res => {
        if (res.data.data === null) {
          res.data = {'last': '', data: []}
        }
        state.videoTag = res.data.data
        state.videoTag['last'] = res.data.last
      })
    }
  },
  [PHOTOTAG] (state, option) {
    if (option.currentTap === 'eventsPhoto') {
      $http.getInfoList(option.option).then(res => {
        if (res.data.data === null) {
          res.data = {'last': '', data: []}
        }
        // 转换组图接口数据
        res.data.data.forEach(function (val, index, arr) {
          res.data.data[index].releaseTime = val.createTime
          for (var key in val) {
            if (key === 'images') {
              val['infoPhotoImages'] = []
              val[key].forEach(function (imageVal, imageIndex) {
                val['infoPhotoImages'].push({'url': imageVal})
              })
            }
          }
        })
        state.photoTag = res.data.data
        state.photoTag['last'] = res.data.last
      })
      // 如果是其他新闻页面
    } else {
      $http.getPhoto(option.type, option.limit).then(res => {
        if (res.data.data === null) {
          res.data = {'last': '', data: []}
        }
        state.photoTag = res.data.data
        state.photoTag['last'] = res.data.last
      })
    }
  },
  [PHOTODETAILS] (state, item) {
    state.photoDetails = {
      releaseTime: 1501603200000,
      id: 999,
      title: '1',
      infoPhotoImages: [{
        id: 2,
        title: '2',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502901026727&di=4251879efe34db3afe5452ce92456c4d&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg',
        detail: '2'
      },
      {
        id: 999,
        title: '1',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502901026727&di=4251879efe34db3afe5452ce92456c4d&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg',
        detail: '1'
      }
      ]
    }
      state.photoDetails = item
  },
  [CLUBDETAILS] (state, item) {
     //  console.log('是否请求',state.clubDetails.id !== id,state.clubDetails.id,id)
     //  if(state.clubDetails.id !== id){
     //     $http.getClubMessage(id).then(res => {
     //         console.log('数据里的内容',state.clubDetails,res.data)
     //         state.clubDetails = res.data
     //         // 存到h5存储
     //         // 转到服务端渲染下不能使用locastore
     //         // lockr.set('clubDetails', res.data)
     //     })
     // }
      state.clubDetails = item

  },
  // 选手详情页
  [PLAYERDETAILS] (state, item) {
      for(let key in item[0]){
        if(key === 'club'){
          item[0][key] = item[0][key] || {fullName: "", id: 0}
        }else if (key === 'mmaPlayerGlories'){
          item[0][key] = item[0][key] || []
        }
      }
      state.playerDetails = item[0]
      state.playerEnemy = item[1]
  },
  // 选手列表
  [PLAYERLIST] (state, limit) {
    if (limit) {
      state.playerOption.limit = state.playerOption.limit + 12
    } else {
      state.playerOption.limit = 12
    }
    $http.getPlayerList(state.playerOption).then(res => {
      if(res.data.data){
        let arr = res.data.data
        arr.forEach((val, index) => {
            arr[index].club = val.club || {fullName: "", id: 0}
        })
      }
      state.playerList.data = res.data.data
      state.playerList.last = res.data.last
    })
  },
  // 选手传入参数
  [PLAYEROPTION] (state, option) {
    state.playerOption = option
  },
  // 获取选手水平排行榜
  [PLAYERRUNKTAP] (state, option) {
    $http.getPlayerRank(option.type, option.limit).then(res => {
      if(res.data.data){
          res.data.data.forEach((val, index) =>{
              if(!val.club){
                  val.club = {
                      fullName: '',
                      id: -1
                  }
              }
          })
      }
      // console.log('选手的数据', res.data.data)
      state.playerRunkTap.data = res.data.data === null ? [] : res.data.data
      state.playerRunkTap.last = res.data.last
    })
  },
  // 获取赛事的点击的id
  [EVENTSID] (state, id) {
    state.eventsId = id
  },
  // 获取当前赛事
  [FIRSTID] (state, id) {
    state.firstId = id
  },
  // 赛事动态新闻数据
  [INDEXTAP] (state, option) {
    // 判断option的currentTap如果有值侧为其他没值则为赛事动态
    if (option.curentTap === 'playerDetails') {
      $http.getHomePageInfoList(option.option).then(res => {
        if (res.data.data === null) {
          state.indexTap.last = res.data.last
          return
        }
        if (state.indexTap.data !== []) {
          state.indexTap.frist = false
        }
        state.indexTap.data = state.indexTap.data.concat(res.data.data)
        state.indexTap.last = res.data.last
      })
      // 其他则为赛事页
    } else {
      $http.getInfoList(option).then(res => {
        if (res.data === null) {
          state.indexTap.frist = true
          return
        } else if (res.data.data === null) {
          state.indexTap.last = res.data.last
          return
        }
        if (state.indexTap.data !== []) {
          state.indexTap.frist = false
        }
        state.indexTap.data = state.indexTap.data.concat(res.data.data)
        state.indexTap.last = res.data.last
      })
    }
  },
  [ClEARARR] (state) {
    state.indexTap = {
      data: [],
      last: true,
      // 判断第一次进入是否为空
      frist: true
    }
  },
    // 清除首页搜索tap数据
    [CLEARSEARCHARR] (state) {
      state.searchArr = {
        data: [],
        last: true,
        // 判断第一次进入是否为空
        frist: true,
        searchData: state.searchArr.searchData,
        count: state.searchArr.count
      }
    },
  // 首页搜索数据
  [SEARCHARR] (state, option) {
    state.searchArr.searchData = option.search
    // $http.getHomeSearchCount(option.search).then(res => {
    //   state.searchArr.count = res.data
    // })
    $http.getHomePageInfoList(option).then(res => {
      if (res.data === null) {
        state.searchArr.frist = true
        return
      } else if (res.data.data === null) {
        state.searchArr.last = res.data.last
        return
      }
      if (state.searchArr.data !== []) {
        state.searchArr.frist = false
      }

      if(state.searchArr.frist){
          // 如果为第一次请求
          state.searchArr.data = res.data.data
      }else {
          // 如果不是第一次请求
          state.searchArr.data = state.searchArr.data.concat(res.data.data)
      }
        console.log('里面请求的数据', res.data)
        state.searchArr.count = res.data.count
      state.searchArr.last = res.data.last
    })
  },

  [EVENTSLIST] (state, limit) {
      if (limit) {
          state.eventsOption.limit = state.eventsOption.limit + 10
      } else {
          state.eventsOption.limit = 10
      }
      $http.getSearchMatch(state.eventsOption).then(res => {
          function tastMiss (tast) {
              if (tast === '') return
              for (let key in tast) {
                  if (tast[key] === null || tast[key] === undefined) {
                  } else if (typeof (tast[key]) === 'string' || typeof (tast[key]) === 'number') {
                      continue
                  } else {
                      for (let secondKey in tast[key]) {
                          if (tast[key][secondKey] === null || tast[key][secondKey] === undefined) {
                              // console.error('列表数据里的' + key + '为空')
                              if (secondKey === 'mmaPlayerVictory' || secondKey === 'mmaPlayerBlue' || secondKey === 'mmaPlayerRed') {
                                  // console.log('修改的key', key, secondKey)
                                  tast[key][secondKey] = {
                                      clubLogo: '',
                                      clubName: '',
                                      countryName: '',
                                      countryUrl: '',
                                      faceImage: undefined,
                                      failureCount: '',
                                      id: '',
                                      koCount: '',
                                      level: '',
                                      matchCount: '',
                                      name: '',
                                      nickname: '',
                                      tkoCount: '',
                                      victoryCount: ''
                                  }
                                  // console.log('修改后', tast[key])
                              }
                          }
                      }
                  }
              }
          }
          tastMiss(res.data)
          if (res.data === '') {
              state.eventsList.arr = []
              state.eventsList['last'] = true
          } else {
              state.eventsList.arr = res.data
              if (res.data.length % 10 > 0 || res.data.length < state.eventsOption.limit) {
                  state.eventsList['last'] = true
              } else {
                  if (res.data === '') {
                      state.eventsList['last'] = true
                  } else {
                      state.eventsList['last'] = false
                  }
              }
          }
      })
  },
  // 赛事传入参数
  [EVENTSOPTION] (state, option) {
    state.eventsOption = option
  },
  // 赛事详情页
  [EVENTSDETAILS] (state, item) {
      // console.log('11', item)
      for(let val in item) {
          if(val === 'mmaPlayerVictory'){
              continue
          } else if(item[val] === null) {
              item[val] = []
          }
      }
      // console.log('22', item)
      state.eventsDetails = item
      // console.log('vuex里的', state.eventsDetails)
  },
  // 获取赛事详情页视频索引
  [EVENTSDETAILSVIDEOINDEX] (state, index) {
    state.eventsDetailsVideoIndex.index = index
    // 获取赛事的视频url并转成视频正则url
    if (!(state.eventsDetails.demand === null || state.eventsDetails.demand.length === 0)) {
        // console.log('打印的值', state.eventsDetails.demand)
        var url = state.eventsDetails.demand[index].url
      var reg = new RegExp('http://v.youku.com/v_show/id_([^.]*).html')
      var repUrl = url.replace(reg, 'http://player.youku.com/embed/$1')
      state.eventsDetailsVideoIndex.videoUrl = repUrl
    }
  },
  // 获取侧位栏广告位api
  [ADVERTISING] (state, item) {
    state.advertising = item
    // 广告api
    // $http.getAdsense(id).then(res => {
    //   // 代码优化
    //   // function checkData(newData) {
    //   //     if (newData) {
    //   //       // 判断是否数组
    //   //      newData =  Array.isArray(newData) ? newData : newData.infoAdsenseImages
    //   //       checkData(newData[0])
    //   //     }else {
    //   //       this.isShowAdvertising = false
    //   //     }
    //   // }
    //   if (res.data) {
    //     if (res.data[0]) {
    //       if (res.data[0].infoAdsenseImages[0]) {
    //         state.advertising.url = res.data[0].infoAdsenseImages[0].url
    //         state.advertising.img = res.data[0].infoAdsenseImages[0].imageUrl
    //       } else {
    //         state.advertisingisShowAdvertising = false
    //       }
    //     } else {
    //       state.advertising.isShowAdvertising = false
    //     }
    //   } else {
    //     state.advertising.isShowAdvertising = false
    //   }
    // })
  },
  // --------------------------------------------服务端渲染-----------------------------------------------------------
  // 首页资讯
  [HOMENEWS] (state) {
    $http.getNewInfo(10).then(res => {
        console.log('首页资讯')
        for (var key in res.data.data) {
        if (res.data.data[key].type === '1') {
            res.data.data[key].image = res.data.data[key].image.split(',')
        }
      }
      state.homeNews = res.data.data
    })
  },
  // 首页合作媒体和合作俱乐部静态化
 [MEDIA] (state,res) {
     state.mediaPartners = res.data.data
 },
 [CLUB] (state, res) {
     state.clubPartners = res.data.data
 }
}
export default {
  state,
  mutations,
  getters
}
