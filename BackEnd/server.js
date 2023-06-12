const express = require("express");
const morgan = require("morgan");
const { port } = require("./config/index");
const connectDb = require("./database/index");

const router = require("./routes/index");

//rest object

const app = express();

//midlewares

app.use(express.json());
app.use(morgan("dev"));

//routes
app.use(router);

//database
connectDb();
//listen port

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
