const dotenv = require("dotenv").config();

const port = process.env.PORT;
const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;

module.exports = {
  port,
  MONGODB_CONNECTION,
};
