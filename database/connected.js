const mongoose = require("mongoose");

const db = () => {
  return mongoose
    .connect(
      "mongodb+srv://xyz1233214321:godplan@cluster0.j5xz0ab.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(console.log("Database Connected"))
    .catch((err) => console.log(err));
};

module.exports = db;
