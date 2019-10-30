const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/members');
mongoose.Promise = global.Promise

//initialize body parser
app.use(bodyParser.json());

//initialize routes
app.use('/api/', require("./routes/api"))

//error handling middleware
app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message });
});

//listen to request
app.listen(process.env.port || 4000, function() {
    console.log("Now we are listining for request");
});