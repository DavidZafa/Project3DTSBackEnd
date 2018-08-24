const mongoose = require("../models/User");
const User = mongoose.model("User");
const config = require("../config/config");
const jwt = require("jwt-simple");
const Animals = require("../models/Animals");
const News = require("../models/News");

module.exports = {
  show: (req, res) => {
        User.findOne({_id: req.params.id})
        .populate("animalList")
        .then(user => {
            res.json(user)
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
                payload,
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
        User.findOne({ email: req.body.email }).then(user => {
          if (!user) {
            User.create(newUser).then(user => {
              if (user) {
                var payload = {
                  id: user.id
                };
                var token = jwt.encode(payload, config.jwtSecret);
                res.json({
                  token: token
                });
              } else {
                console.log('here')
                res.sendStatus(401);
              }
            });
          } else {
            console.log('there')
            res.sendStatus(401);
          }
        });
      } else {
        console.log('everywhere')
        res.sendStatus(401);
      }

      // if (req.body.email && req.body.password) {
      //   let newUser = {
      //     email: req.body.email,
      //     password: req.body.password
      //   }
      //   User.findOne({ email: req.body.email })
      //     .then((user) => {
      //       if (!user) {
      //         User.create(newUser).then(user => {
      //             if (user) {
      //               var payload = {
      //                 // id: user.id
      //                 id: newUser.id
      //               }
      //               var token = jwt.encode(payload, config.jwtSecret)
      //               res.json({
      //                 token: token
      //               })
      //             } else {
      //               res.sendStatus(401)
      //             }
      //           })
      //       } else {
      //         res.sendStatus(401)
      //       }
      //     })
      // } else {
      //   res.sendStatus(401)
      // }
    },
    addAnimal: (req, res) => {
      User.findById(req.params.id)
      .then(user => {
        Animals.findOne({name: req.body.name})
        .then(animal => {
          user.animalList.push(animal)
          user.save()
          console.log(user)
        })

      })
    },
    removeAnimal: (req, res) => {
      User.findOne({_id: req.params.id})
      .then(user => {
        Animals.findOne({name: req.body.name})
        .then(animal => {
          user.animalList.pull(animal)
          user.save()
          console.log(user)
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
};
