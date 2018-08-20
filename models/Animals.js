const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Animals = new Schema({
    name: String,
    species: String,
    picture: String,
    region: String,
    endangeredLvl: String,
    population: Number
})

module.exports = mongoose.model("Animals", Animals)