// mongoose.connect('mongodb://localhost/db_name')
const mongoose = require("mongoose");
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect(
    "mongodb://localhost:27017/dangerzone",
    { useNewUrlParser: true }
  ); //dangerzone is our local database name;
}
mongoose.Promise = Promise;
module.exports = mongoose;
