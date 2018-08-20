const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const News = new Schema ({
    title: String,
    imageUrl: String, 
    author: String,
    description: String,
    post: String
})

module.exports = mongoose.model("News", News)