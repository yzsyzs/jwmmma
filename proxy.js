var request = require('request')
function proxy (app,newProxyUrl, wentProxyUrl) {
    app.use(newProxyUrl, function(req, res) {
        var url =  wentProxyUrl + req.url;
        req.pipe(request(url)).pipe(res);
    });
}

module.exports = proxy