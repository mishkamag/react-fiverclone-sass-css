const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

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
