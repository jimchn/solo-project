const twitterConfig = require('./twitterConfig');
const twit = require('twit');
const search = new twit(twitterConfig);
const twitterFetch = {};


twitterFetch.getTweet = (req , res, next) => {
    search.get('search/tweets', {q: "coronavirus", result_type: "recent", count: 50, lang: "en"},(err, data) => {
        if(err) {
            return next({
                log: "getTweet is not working",
                err: { err }
            });
        }
        res.locals.data = data.statuses;
        return next();
    });
}


module.exports = twitterFetch;