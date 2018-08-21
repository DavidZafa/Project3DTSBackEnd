const User = require("../models/User")
const mongoose = require('../models/User')
const config = require("../config/config")
const passport = require("../config/passport")
const jwt = require('jwt-simple')
const Animals = require("../models/Animals")
const News = require("../models/News")

module.exports = {
    show: (req, res) => {
        User.findOne({_id: req.params.id})
        .populate("animals")
        .then(res => {
            res.json()
        })
    },
    createLogin: (res,req) => {
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
    createSignUp: (res, req) => {
      router.post('/signup', (req, res) => {
        if (req.body.email && req.body.password) {
          let newUser = {
            email: req.body.email,
            password: req.body.password
          }
          console.log(newUser)
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
      })
    }
}