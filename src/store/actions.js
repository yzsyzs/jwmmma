/**
 * Created by Administrator on 2017/7/27.
 */
import * as types from './types.js'
import $http from '../api/api'
export default {
  increment: ({
    commit
  }) => {
    commit(types.INCREMENT)
  },
  //  用户信息
  getUser: ({commit}) => {
      pass.default.getUserInfo().then(userData => {
          // console.log('actionuser', userData);
          commit(types.GETUSER, userData.data)
      }).catch((err) => {
          console.log('actionuser_err',err);
      })

  },
  changSelectNavShow: ({
    commit
  }) => {
    commit(types.CHANGSELECTNAVSHOW)
  },
  changNavShow: ({
    commit
  }) => {
    commit(types.CHANGNAVSHOW)
  },
  // 数据请求时loading动画
  loading_show: ({
     commit
  }) => {
    commit(types.LONGING_SHOW)
  },
  loading_hide: ({
     commit
  }) => {
    commit(types.LONGING_HIDE)
  },
  // 首页轮播图请求接口
  getSliderShow: ({
    commit
  }) => {
     return $http.getSlideShow().then(res => {
       commit(types.GETSLIDERSHOW, res.data)
     })
  },
  // 首页跳转到新闻详情
  jumpToNewsDetails: ({commit}, id) => {
   return $http.getNewsMessage(id).then(res => {
      commit(types.NEWSDETAILS, res.data)
    })
  },
  // 首页跳转到视频详情
  jumpToVideoDetails: ({commit}, id) => {
  return $http.getDemandMessage(id).then(res => {
    let item = {}
    item = res.data
    for (let key in item.info) {
      if (item.info[key].type === '1') {
          item.info[key].image = item.info[key].image.split(',')
      }
    }
      commit(types.VIDEODETAILS, item)
    })
  },
  // 新闻tag内容改变
  changTheNewTag: ({commit}, option) => {
    commit(types.NEWSTAG, option)
  },
  // 视频tag内容改变
  changThenVideoTag: ({commit}, option) => {
    commit(types.VIDEOTAG, option)
  },
  // 图片tag内容改变
  changThePhotoTag: ({commit}, option) => {
    commit(types.PHOTOTAG, option)
  },
  // 跳转图片详情页
  jumpToPhotoDetails: ({commit}, id) => {
   return $http.getPhotoMessage(id).then(res => {
        commit(types.PHOTODETAILS, res.data)
    })

  },
  // 跳转俱乐部详情页
  jumpToClubDetails: ({commit}, id) => {
        return  $http.getClubMessage(id).then(res => {
              commit(types.CLUBDETAILS, res.data)
          })
  },
  // 跳转选手详情页
  jumpToPlayerDetails: ({commit}, id) => {
     // return $http.getPlayerMessage(id).then(res => {
     //     let item = {
     //         club: {
     //             fullName: '初始值'
     //         },
     //         atRecord: {
     //             integral: '初始值'
     //         }
     //     }
     //      item = res.data
     //      $http.getPlayerEnemy(id, 4).then(res => {
     //          console.log('上面请求的数据',res.data)
     //          // commit(types.PLAYERDETAILS, item,res.data)
     //      })
     //  })
      const playerMessage = $http.getPlayerMessage(id)
      const playerEnemy = $http.getPlayerEnemy(id, 4)
      return Promise.all([playerMessage,playerEnemy]).
      then(([playerMessage,playerEnemy]) => {
          commit(types.PLAYERDETAILS, [playerMessage.data,playerEnemy.data])
      })

  },
  // 获取选手列表
  getThePlayerList: ({commit}, limit) => {
    commit(types.PLAYERLIST, limit)
  },
  // 修改选手参数
  getThePlayerOption: ({commit}, option) => {
    // console.log('action传入的数据', option)
    commit(types.PLAYEROPTION, option)
  },
  getThePlayerRunk: ({commit}, option) => {
    commit(types.PLAYERRUNKTAP, option)
  },
  // 赛事id记录
  getTheEventId: ({commit}, id) => {
    commit(types.EVENTSID, id)
  },
  // 获取初次记录
  getFristId: ({commit}, id) => {
    // console.log('进入', id)
    commit(types.FIRSTID, id)
  },
  // 获取赛事页动态数据
  getIndexTap: ({commit}, option) => {
    commit(types.INDEXTAP, option)
  },
  // 清除数据
  clearIndexArr: ({commit}) => {
    commit(types.ClEARARR)
  },
  // 获取首页搜索数据
  getSearchArr: ({commit}, option) => {
    commit(types.SEARCHARR, option)
  },
  // 清除首页搜索数据
  clearSearchArr: ({commit}) => {
    commit(types.CLEARSEARCHARR)
  },
  // 获取赛事列表
  getTheEventList: ({commit}, limit) => {
    commit(types.EVENTSLIST, limit)
  },
  // 修改赛事参数
  getTheEventOpion: ({commit}, option) => {
    // console.log('action传入的数据', option)
    commit(types.EVENTSOPTION, option)
  },
  // 获取赛事详情页
  getEventsDetails: ({dispatch,commit}, id) => {
     return $http.getMatchMessage(id).then(res => {
          commit(types.EVENTSDETAILS, res.data)
          dispatch('getEventsDetailsVideoIndex', 0)
      })
  },
  // 获取赛事详情视频详情索引
  getEventsDetailsVideoIndex: ({commit}, index) => {
    commit(types.EVENTSDETAILSVIDEOINDEX, index)
  },
  // 获取侧边栏广告api
  getAdvertising: ({commit}, id) => {
      // 广告api
    return $http.getAdsense(id).then(res => {
      let item = {
          url: 'javascript:;',
          img: '',
          isShowAdvertising: true,
          fullUrl: 'javascript:;',
          fullImg: '',
          isShowTopAdvertising: true
      }
          // 代码优化
          // function checkData(newData) {
          //     if (newData) {
          //       // 判断是否数组
          //      newData =  Array.isArray(newData) ? newData : newData.infoAdsenseImages
          //       checkData(newData[0])
          //     }else {
          //       this.isShowAdvertising = false
          //     }
          // }
      if (res.data) {
        if (res.data[0]) {
          if (res.data[0].infoAdsenseImages[0]) {
            item.url = res.data[0].infoAdsenseImages[0].url
            item.img = res.data[0].infoAdsenseImages[0].imageUrl
          } else {
            item.isShowAdvertising = false
          }
        } else {
          item.isShowAdvertising = false
        }
      } else {
        item.isShowAdvertising = false
      }
        commit(types.ADVERTISING, item)
    })
  },
  // --------------------------------------------服务端-----------------------------------------------------------
  getSevrerHomeNews: ({commit}) => {
      commit(types.HOMENEWS)
  },
  // 合作俱乐部和合作媒体
  getMediaPartners: ({commit}) => {
    return $http.getTeamMediaInfo().then(arr => {
        commit(types.MEDIA,arr)
    })
  },
 // 合作俱乐部
 getClubPartners: ({commit}) => {
    return $http.getTeamClubInfo(100).then(arr => {
        commit(types.CLUB,arr)
     })
 }
}
