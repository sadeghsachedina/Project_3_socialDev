const express = require('express');
const mongoose = require('mongoose')


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB Config
const db = require('./config/keys.js').mongoURI;

//connect to mongoDB using mongoose
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello world'));


//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//Heroku Setup

const port = process.env.PORT || 5000;

//server using E6

app.listen(port, () => console.log(`Server Running on port ${port}`));