const News = require("../models/News")

module.exports = {
    index: (req, res) => {
        News.find({})
            .then(news => {
                console.log(news)
                res.json(news)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}