import LRU from 'lru-cache'
import { fetchItems } from './api'
import Axios from 'axios'

let api
let dxgUrl;
// 当不同环境下请求api为不同的端口
switch(process.env.PORT){
    case '8001':
        dxgUrl = 'http://test.cwmmma.com:81'
        break;
    case '8000':
        dxgUrl = 'http://test.cwmmma.com'
        // dxgUrl = 'http://192.168.80.11:8010'
        break;
    default:
        dxgUrl = 'http://www.cwmmma.com'
}
console.log(dxgUrl);
if (process.__API__) {
    api = process.__API__
} else {
    api = {
        //url: 'https://hacker-news.firebaseio.com/v0/',
        url: dxgUrl,
        onServer: true,
        // cachedItems: LRU({
        //     max: 1000,
        //     maxAge: 1000 * 60 * 15
        // }),
        cachedIds: {}
    }
    // const arr = ['home', 'new']
    // arr.forEach(type => {
    //     // console.log('调试', `${api.url}${type}stories.json`)
    //     // Axios.get(`${api.url}${type}stories.json`).then(res => {
    //     //     api.cachedIds[type] = res.data
    //     // })
    // })
    process.__API__ = api
}
export default api
