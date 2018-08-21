const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    imageUrl: String,
    email: String,
    password: String,
    animalList: [
        {
            type:Schema.Types.ObjectId,
            ref: "Animals"
        }
    ]
})

module.exports = mongoose.model("User", User)