const Animal = require('../models/Animals')
const animalData = require('./animals.json')
const News = require('../models/News')
const newsData = require('./news.json')

Animal.remove({})
    .then(() => {
        Animal.collection.insertMany(animalData)
        .then(animal => {
            console.log(animal)
        })
    })
    .catch(err => {
        console.log(err)
    })

News.remove({})
.then(() => {
    News.collection.insertMany(newsData)
    .then(news => {
        console.log(news)
        process.exit()
    })
})
.catch (err => {
    console.log(err)
})