const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const gigRoute = require("./routes/gig.route");
const reviewRoute = require("./routes/review.route.js");
const orderRoute = require("./routes/order.route.js");
const conversationRoute = require("./routes/conversation.route.js");
const messageRoute  = require("./routes/message.route.js");


const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

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
