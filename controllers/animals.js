const Animals = require("../models/Animals")

module.exports = {
    show: (req, res) => {
        Animals.find({})
        .populate ("")
    }
}