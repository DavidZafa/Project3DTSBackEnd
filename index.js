<<<<<<< HEAD
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
const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const passport = require("./config/passport")();
const app = express();

app.options("*", cors());
app.use(cors());
app.use(parser.json());
app.use(passport.initialize());
app.use(require("./routes/index"));
=======
/* FROM LAB START*/
const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const passport = require("./config/passport")();

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(parser.json());
app.use(passport.initialize());

app.use(require("./routes/index"));

>>>>>>> 0ffc1b05f082953cb8adcd1d1ea2574ce0a35a50
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log("GET READY TO GET RICKETY RICKETY RECKED - on port 3001");
});

/* FROM LAB END*/
<<<<<<< HEAD

// CORS
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
=======
>>>>>>> 0ffc1b05f082953cb8adcd1d1ea2574ce0a35a50
