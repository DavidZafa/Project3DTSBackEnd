const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')
const passport = require('./config/passport')()
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(passport.initialize())

app.use(require('./routes/index'))

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log('GET READY TO GET RICKETY RICKETY RECKED - on port 3001')
})