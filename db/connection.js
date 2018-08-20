const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dangerzone", { useNewUrlParser: true }
);
mongoose.Promise = Promise;
module.exports = mongoose;
