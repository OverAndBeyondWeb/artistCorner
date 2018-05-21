//get access to environment variables
require('dotenv').config();

//define app dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//initialize express app
const app = express();

//send all requests through body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//db config
const db = require('./config/keys').MONGODB_URI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('connected to mongo'))
  .catch(err => console.log(err));

//use routes from routes directory
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/auth', require('./routes/auth/auth'));

//set up a port variable
const PORT = process.env.PORT || 3000;

//run the app on the specified port
app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
