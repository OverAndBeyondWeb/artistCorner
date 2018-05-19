//get access to environment variables
require("dotenv").config();

//define app dependencies
const express = require("express");
const mongoose = require("mongoose");

//initialize express app
const app = express();

//db config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("connected to mongo"))
  .catch(err => console.log(err));

//define a route
app.get("/", (req, res) => res.send("welcome, this an express app"));

//set up a port variable
const PORT = process.env.PORT || 3000;

//run the app on the specified port
app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
