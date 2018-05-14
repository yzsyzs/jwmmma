import Index from '../components/home/index.vue'
import GuidePage from '../components/guide_page/index.vue'
import Property from '../components/property_page/home.vue'
// 选手
import Players from '../components/players/players.vue'
import PlaysDetails from '../components/players/player_details.vue'
// 俱乐部详情
import ClubDetails from '../components/players/club_details.vue'

// 赛事
import Events from '../components/events/events.vue'
import AllRunk from '../components/events/all_runk_page.vue'
import RunkDetails from '../components/events/runk_details.vue'
import PlayerRank from '../components/events/player_rank_page.vue'

// 赛事选手排名
import Player from '../components/public/information_children/player.vue'

import Jmcollege from '../components/jm_college/jm_college.vue'

// 新闻
import Newz from '../components/news/news.vue'
import NewsDetails from '../components/news/news_details.vue'

// 图片
import Photo from '../components/photo/photo.vue'
import PhotoDetails from '../components/photo/photo_details.vue'

import Ticket from '../components/ticket/ticket.vue'

import Video from '../components/video/video.vue'
import VideoDetails from '../components/video/video_details.vue'

import Search from '../components/home/seach_page.vue'
import TrainingCenter from '../components/tranining_center/training_center.vue'

import InforMationChildren from './information_children'

import ChildrenVideo from '../components/public/information_children/video.vue'
import ChildrenIndex from '../components/public/information_children/index.vue'
import ChildrenNewz from '../components/public/information_children/newz.vue'
import ChildrenPhoto from '../components/public/information_children/photo.vue'
import Info from '../components/public/information_children/info.vue'

// 用户信息
import userInfo from '../components/userInfo/userInfo.vue'


// 搜索
import ChildrenSearch from '../components/public/information_children/search.vue'
export default[
    // 引导页
    {
        path: '/',
        component: GuidePage
    },
    {
        path: '/home',
        component: Property,
        children: [
            {
                path: '/',
                component: Index
            },
            // 搜索
            {
                path: 'search',
                component: Search,
                children: [
                    {
                        path: ':id',
                        component: ChildrenSearch
                    },
                    {
                        path: 'newz/:id',
                        component: ChildrenSearch
                    },
                    {
                        path: 'photo/:id',
                        component: ChildrenSearch
                    },
                    {
                        path: 'video/:id',
                        component: ChildrenSearch
                    }
                ]
            },
        ]
    },
    // 选手页
    {
        path: '/players',
        component: Property,
        children: [
            {
                path: '/',
                component: Players
            },
            // 俱乐部详情页
            {
                path: 'club_details/:id',
                component: ClubDetails
            },
            // 选手详情页
            {
                path: 'player_details',
                component: PlaysDetails,
                children: [
                    {
                        path: ':id',
                        component: ChildrenIndex
                    },
                    {
                        path: 'intro/:id',
                        component: Info
                    },
                    {
                        path: 'newz/:id',
                        component: ChildrenNewz
                    },
                    {
                        path: 'photo/:id',
                        component: ChildrenPhoto
                    },
                    {
                        path: 'video/:id',
                        component: ChildrenVideo
                    }
                ]
            },
        ]
    },
    // 赛事页
    {
        path: '/events',
        component: Property,
        children: [
            {
                path: '/',
                component: Events,
                children: InforMationChildren
            },
            {
                // 赛事详情
                path: 'runk_details/:id',
                component: RunkDetails
            },
            {
                // 全部赛事
                path: 'all_runk',
                component: AllRunk
            },
            // 首页全部选手和全部俱乐部
            {
                path: 'player_rank',
                component: PlayerRank,
                children: [
                    {
                        path: '/',
                        component: Player
                    },
                    {
                        path: ':id',
                        component: Player
                    }
                ]
            }
        ]
    },
    //  新闻 已修改
    {
        path: '/news',
        component: Property,
        children: [
            {
                path: '/',
                component: Newz,
                children: [
                    {
                        path: '/',
                        component: ChildrenNewz
                    },
                    {
                        path: ':id',
                        component: ChildrenNewz
                    }
                ]
            },
            // 新闻详情
            {
                path: ':id/news_details/:index',
                component: NewsDetails
            }
        ]
    },
    // 图片页
    {
        path: '/photo',
        component: Property,
        children: [
            {
                path: '/',
                component: Photo,
                children: [
                    {
                        path: '/',
                        component: ChildrenPhoto
                    },
                    {
                        path: ':id',
                        component: ChildrenPhoto
                    }
                ]
            },
            // 图片详情
            {
                path: ':id/photo_details/:index',
                component: PhotoDetails
            }
        ]

    },
//     component: Property,
//     children: [
//     {
//         path: '/',
//     }
// ]
    // 视频页
    {
        path: '/video',
        component: Property,
        children: [
            {
                path: '/',
                component: Video,
                children: [
                    {
                        path: '/',
                        component: ChildrenVideo
                    },
                    {
                        path: ':id',
                        component: ChildrenVideo
                    }
                ]
            },
            // 视频详情
            {
                path: ':id/video_details/:index',
                component: VideoDetails
            },
        ]
    },
    {
        path: '/ticket',
        component: Property,
        children:
            [
                {
                    path: '/',
                    component: Ticket
                }
            ]
    },
    {
        path: '/jm_college',
        component: Property,
        children: [
            {
                path: '/',
                component: Jmcollege
            }
        ]
    },
    {
        path: '/user_info',
        component: Property,
        children:
            [
                {
                    path: '/',
                    component: userInfo
                }
            ]
    },
    {
        path: '/training_center',
        component: TrainingCenter
    }
]
