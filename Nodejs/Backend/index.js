const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./config/db");
const cors = require("cors");
const userRouter = require("./router/userRouter");

(() => {
  app.use(express.json());

  app.use(
    cors({
      origin: "*",
    })
  );

  db(process.env.MONGO_URL);

  app.use("/", userRouter);
})();

app.listen(process.env.PORT, () => {
  console.log(`Server running in ${process.env.PORT}`);
});
