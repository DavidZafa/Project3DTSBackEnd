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

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log("GET READY TO GET RICKETY RICKETY RECKED - on port 3001");
});

/* FROM LAB END*/
