/**
 * Created by Administrator on 2017/7/27.
 */
import lockr from 'lockr'
export default {
  userInfo: (state) => {
    return state.userInfo
  },
  count: (state) => {
    return state.count
  },
  information_arr: (state) => {
    return state.information_arr
  },
  isSelectNavShow: (state) => {
    return state.isSelectNavShow
  },
  isNavShow: (state) => {
    return state.isNavShow
  },
  slide_show: (state) => {
    return state.slide_show
  },
  newsDetails: (state) => {
    return state.newsDetails
  },
  videoDetails: (state) => {
    return state.videoDetails
  },
  newsTag: (state) => {
    return state.newsTag
  },
  videoTag: (state) => {
    return state.videoTag
  },
  photoTag: (state) => {
    return state.photoTag
  },
  photoDetails: (state) => {
    return state.photoDetails
  },
  clubDetails: (state) => {
    // if (state.clubDetails.length === undefined) {
    //   state.clubDetails = lockr.get('clubDetails')
    // }
    // 请求容错
    // if (state.clubDetails) {
    //   if (state.clubDetails.mmaClubGlories[0]) {
    //     if (state.clubDetails.mmaClubGlories[0].gloryTitle) {
    //     } else {
    //       state.clubDetails.mmaClubGlories = [{gloryTitle: ''}]
    //     }
    //   } else {
    //     console.error('clubDetails.mmaClubGlories[0]无数据')
    //     state.clubDetails.mmaClubGlories = [{gloryTitle: ''}]
    //   }
    // } else {
    //   state.clubDetails.mmaClubGlories = [{gloryTitle: ''}]
    //   console.error('clubDetails无数据')
    // }

      if (state.clubDetails) {
          if (state.clubDetails.mmaClubGlories && state.clubDetails.mmaClubGlories.length>0) {
              if (state.clubDetails.mmaClubGlories[0].gloryTitle) {
              } else {
                  state.clubDetails.mmaClubGlories = [{gloryTitle: ''}]
              }
          } else {
              console.warn('clubDetails.mmaClubGlories[0]无数据')
              state.clubDetails.mmaClubGlories = [{gloryTitle: ''}]
          }
      } else {
          state.clubDetails.mmaClubGlories = [{gloryTitle: ''}]
          console.warn('clubDetails无数据')
      }
      return state.clubDetails
  },
  playerDetails: (state) => {
    // if (state.playerDetails.id === undefined) {
    //   state.playerDetails = lockr.get('playerDetails')
    // }
    if (state.playerDetails) {
      if (state.playerDetails.atRecord) {
        if (state.playerDetails.atRecord.competitionRanking) {
        } else {
          state.playerDetails.atRecord.competitionRanking = ''
        }
      } else {
        console.warn('state.playerDetails.atRecord无数据')
        state.playerDetails.atRecord = {'competitionRanking': ''}
      }
    } else {
      console.warn('playerDetails无数据')
    }
    return state.playerDetails
  },
  playerEnemy: (state) => {
    return state.playerEnemy
  },
  loading: (state) => {
    return state.loading
  },
  playerList: (state) => {
    return state.playerList
  },
  playerOption: (state) => {
    return state.playerOption
  },
  playerRunkTap: (state) => {
    return state.playerRunkTap
  },
  eventsId: (state) => {
    return state.eventsId
  },
  firstId: (state) => {
    return state.firstId
  },
  indexTap: (state) => {
    return state.indexTap
  },
  eventsList: (state) => {
    return state.eventsList
  },
  eventsOption: (state) => {
    return state.eventsOption
  },
  eventsDetails: (state) => {
    return state.eventsDetails
  },
  eventsDetailsVideoIndex: (state) => {
    return state.eventsDetailsVideoIndex
  },
  searchArr: (state) => {
    return state.searchArr
  },
  //  侧边栏广告
  advertising: (state) => {
    return state.advertising
  },
  // --------------------------------------------分隔线-----------------------------------------------------------
  //首页资讯
  homeNews: (state) => {
    return state.homeNews
  },
  // 合作媒体
  mediaPartners: (state) => {
    return state.mediaPartners
  },
  // 合作俱乐部
  clubPartners:(state) => {
    return state.clubPartners
  }
}

