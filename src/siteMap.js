/**
 * Created by Administrator on 2017/11/8.
 */
//引入包文件
var sm = require('sitemap');
var fs = require('fs');
var async = require('async');
var lodash = require('lodash');
//创建 sitemap文件的方法
var createSiteMap = function (url) {
    // 记录最后要输出的xml数组
    var urls = [{ url: '/', changefreq: 'daily', priority: 0.7 }]
    //读取已收录的网站json文件
    fs.readFile(__dirname + '/../../siteMapFile/sitemap.json','utf8',(err, data) => {
        if (err) throw err;
        // 持续添加的url json数组
        var arr = []
        for(let newUrl of  JSON.parse(data)){
            arr .push(newUrl)
            // 读取Json里的url添加到urls里
            urls.push({ url: newUrl, changefreq: 'daily', priority: 0.7 })
        }
        //去重
       if(arr.indexOf(url) === -1) {
           // 添加新的url地址
           arr.push(url)
       }
        // 覆盖sitemap.json文件
        fs.writeFileSync(__dirname + "/../../siteMapFile/sitemap.json", JSON.stringify(arr));
        //生成 sitemap.xml 文件
        createSiteMapFile(urls);
    })
};

var createSiteMapFile=function(geturls){
    //生成 sitemap.xml 静态文件
    var sitemap = sm.createSitemap({
        hostname: 'http://www.cwmmma.com',
        cacheTime: 12 * 60 * 60,
        urls: geturls
    });
    fs.writeFileSync(__dirname + "/../../siteMapFile/sitemap.xml", sitemap.toString());
}

module.exports = {
    createSiteMap
}