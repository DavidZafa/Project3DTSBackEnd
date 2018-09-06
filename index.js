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

app.use(cors());
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(parser.json());
app.use(passport.initialize());
app.use(require("./routes/index"));
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log("GET READY TO GET RICKETY RICKETY RECKED - on port 3001");
});

/* FROM LAB END*/

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
