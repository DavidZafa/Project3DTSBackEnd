const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')

const app = express()


app.use(parser.json())
app.use(cors())
app.use(passport.initialize())
app.use(require('./routes/index'))

app.set('port', process.env.PORT || 3001)


app.listen(app.get('port'), () => {
    console.log('GET READY TO GET RICKETY RICKETY RECKED - on port 3001')
})