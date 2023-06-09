// require dependencies
const express = require('express');
const path = require('path'); // pkg from node.js , allows for building dynamic paths
const favicon = require('serve-favicon');
const logger = require('morgan');

//initialize express app
const app = express();

// configure settings
require('dotenv').config();
require('./config/database');

// mount middleware
app.use(express.json()); //bodyparser from express, also creates req.body
//express.json checks for incoming json data (formdata content-type needs to be json)
app.use(logger('dev')); //dev logger
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))) //__dirname is a node.js variable that always point to the root directory
app.use(express.static(path.join(__dirname, 'build'))) // we don't have to provide name of static folder bc it automatically look for the 'static' folder

app.use(require('./config/CheckToken'));

// mount routes
// API Routes
app.use('/api/users', require('./routes/api/users'));

//catch-all route -- used to always serve index.html
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// tell app to listen
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port: ${port}`);
})