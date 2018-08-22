const mongoose = require("../models/User")
const User = mongoose.model('User')
const config = require("../config/config")
const jwt = require('jwt-simple')
const Animals = require("../models/Animals")
const News = require("../models/News")

module.exports = {
  show: (req, res) => {
        User.findOne({_id: req.params.id})
        .populate("animals")
        .populate("news")
        .then(res => {
            res.json()
        })
    },
    createLogin: (req,res) => {
      if (req.body.email && req.body.password) {
        User.findOne({ email: req.body.email }).then(user => {
          if (user) {
            if (user.password === req.body.password) {
              var payload = {
                id: user.id
              }
              var token = jwt.encode(payload, config.jwtSecret)
              res.json({
                token: token
              })
            } else {
              res.sendStatus(401)
            }
          } else {
            res.sendStatus(401)
          }
        })
      } else {
        res.sendStatus(401)
      }
        },
    createSignUp: (req, res) => {
      if (req.body.email && req.body.password) {
        let newUser = {
          email: req.body.email,
          password: req.body.password
        }
        User.findOne({ email: req.body.email })
          .then((user) => {
            if (!user) {
              User.create(newUser)
                .then(user => {
                  if (user) {
                    var payload = {
                      id: newUser.id
                    }
                    var token = jwt.encode(payload, config.jwtSecret)
                    res.json({
                      token: token
                    })
                  } else {
                    res.sendStatus(401)
                  }
                })
            } else {
              res.sendStatus(401)
            }
          })
      } else {
        res.sendStatus(401)
      }
    },
    // addAnimal: (req, res) => {
    //   User.findOne({_id: req.params.id})
    //   .then(user => {
    //     Animal.findOne({name: req.body.animalname})
    //     .then(animal => {
    //       console.log(animal)
    //       user.animals.push(animal)
    //       user.save()
    //     })
    //   })
    // },
    // removeAnimal: (req, res) => {
    //   User.findOne({_id: req.params.id})
    //   .then(user => {
    //     Animal.findOne({name: req.body.animalname})
    //     .then(animal => {
    //       console.log(animal)
    //       user.animals.push(animal)
    //       user.save()
    //     })
    //   })
    // }
}
