const mongoose = require("mongoose");

const MONGODB_CONNECTION = require("../database/index");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_CONNECTION);
    console.log(`database is connected to host${conn.connection.host}`);
  } catch (error) {
    return error.message;
  }
};

module.exports = connectDb;
