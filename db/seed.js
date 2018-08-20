const Animal = require('../models/Animals')
const animalData = require('./animals.json')

Animal.remove({})
    .then(() => {
        Animal.collection.insert(animalData)
        .then(animal => {
            process.exit()
        })
    })
    .catch(err => {
        console.log(err)
    })