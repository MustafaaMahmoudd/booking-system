const mongoose = require("mongoose");

const DB = process.env.MONGODB_CONNECTION.replace(
  "<password>",
  process.env.MONGODB_PASSWORD
);

const connection = async () => {
  try {
    const mongoDB_connection = await mongoose.connect(DB);
    console.log("DataBase connected successfully");
  } catch (err) {
    console.log(`error is ${err.message}`)
    process.exit(1)
  }
};

module.exports=connection
