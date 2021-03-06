const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

console.log(db);

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Mongo DBconnected "))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
