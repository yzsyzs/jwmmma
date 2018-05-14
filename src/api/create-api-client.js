let clientUrl
console.log('端口号',process.env.NODE_ENV);
switch(process.env.NODE_ENV){
    case 'production':
        clientUrl = '';
        break;
    default:
        clientUrl = '/client';
}
console.log('客户端url', clientUrl);
const api = {
    //url: 'https://hacker-news.firebaseio.com/v0/'
    url: clientUrl
}
export default api
