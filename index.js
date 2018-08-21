// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser');
// const passport = require('./config/passport')()
// const app = express()

// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({     
//     extended: true
//   })); 
// app.use(passport.initialize())
// app.use(require('./routes/index.js'))

// app.set('port', process.env.PORT || 3001)
// app.listen(app.get('port'), () => {
//     console.log('GET READY TO GET RICKETY RICKETY RECKED - on port 3001')
// })





/* FROM LAB START*/
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()
const userController = require("./controllers/user");


// const dogController = require('./controllers/dogs.js')
// const userController = require('./controllers/users.js')


const app = express()

app.use(cors())
app.use(parser.json())
app.use(passport.initialize())


//for the user routes, you use the setup from the lab
//for the other routes, you do whatever you had already worked on
//remove all references to the user fron the routes/index.js and move them to the router-with-controller setup

app.use("/users", userController)

// app.use(require('./routes/index.js'))

// app.use('/users', userController)



// app.use('/api/dogs', dogController)

// app.listen(3002, () => console.log('Listening on port 3002 :)'))

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log('GET READY TO GET RICKETY RICKETY RECKED - on port 3001')
})


/* FROM LAB END*/