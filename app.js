const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require("body-parser");
const User = require('./models/User');
const passport = require('passport');


mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  "/" get request on the root route
// app.get("/", (req, res) => {
//   const user = new User({
//     handle:'jim',
//     email: 'jim@jim.com',
//     password: 'password',
//     password2: 'password'
//   })

//   user.save()

//   res.send("Goodbye World");
// })

// app.get("/", (req, res) => res.send("Hello World!!"));

app.use(passport.initialize());
require('./config/passport')(passport);

// using the users and tweets routes
app.use("/api/users", users);
app.use("/api/tweets", tweets);


// if we are in production use that port variable, if not use 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));