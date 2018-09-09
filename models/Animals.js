const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Animals = new Schema({
  name: String,
  species: String,
  picture: String,
  region: String,
  habitat: String,
  endangeredLvl: String,
  population: String,
  about: String
});

module.exports = mongoose.model("Animals", Animals);
