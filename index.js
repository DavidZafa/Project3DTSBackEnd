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

const app = express()
// const userController = require('./controllers/user.js')

app.use(cors())
app.use(parser.json())
app.use(passport.initialize())

app.use(require('./routes/index'))

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log('GET READY TO GET RICKETY RICKETY RECKED - on port 3001')
})


/* FROM LAB END*/