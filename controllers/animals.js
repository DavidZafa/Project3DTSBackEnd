const Animals = require("../models/Animals")

module.exports = {
    index: (req, res) => {
        Animals.find({})
          .then(animals => {
              res.json(animals)
          })
          .catch((err) => {
              console.log(err)
          })
    },
    singleAnimal: (req, res) => {
        Animals.findOne({_id: req.params.id})
            .then(animal => {
                res.json(animal)
            })
    }
}