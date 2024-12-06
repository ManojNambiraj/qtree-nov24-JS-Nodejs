const mongoose = require("mongoose");

const connection = (url) => {
  try {
    mongoose.connect(url);

    const db = mongoose.connection;

    db.once("open", () => {
      console.log("DB Connected");
    });
  } catch (err) {
    console.log("DB Connection Error");
  }
};

module.exports = connection