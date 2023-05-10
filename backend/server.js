const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth.route");
var cookieParser = require('cookie-parser')

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRoute);

mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
