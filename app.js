const express = require("express");
const app = express();
const routes = require("./routes/tasks.js");
const db = require("./database/connected");
const notfound = require("./middleware/notfound.js");
const error_handler = require("./middleware/error-handler.js");

app.use(express.json());
app.use("/", routes);
app.use(notfound);
app.use(error_handler);

const start = async () => {
  try {
    await db();
    app.listen(4000, () => {
      console.log("this works");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
