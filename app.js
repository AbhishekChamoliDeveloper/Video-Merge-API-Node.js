const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routers/userRouter");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connect To Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users", userRouter);

app.use(globalErrorHandler);

module.exports = app;
