const Animals = require("../models/Animals")

module.exports = {
    index: (req, res) => {
        Animals.find()
          .then(animals => {
              res.json(animals)
          })
          .catch((err) => {
              console.log(err)
          })
    }
}