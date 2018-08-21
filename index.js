const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const passport = require('./config/passport')()
const app = express()

app.use(require('./routes/index.js'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     
    extended: true
  })); 
app.use(passport.initialize())
app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log('GET READY TO GET RICKETY RICKETY RECKED - on port 3001')
})