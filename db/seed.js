const Animal = require('../models/Animals')
const animalData = require('./animals.json')

const News = require('../models/News')
const newsData = require('./news.json')

Animal.deleteMany({})
    .then(() => {
        Animal.collection.insertMany(animalData)
        .then(animal => {
            console.log(animal)
            process.exit()
        })
    })
    .catch(err => {
        console.log(err)
    })
