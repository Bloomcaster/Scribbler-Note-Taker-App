// adding the dependencies and using util module to have access to utility functions//
const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');

//Handling asuchonous processes//
const readFileAsync = util.promisify(fs.readfile);
const writeFileAsync = util.promisify(fs.writeFile);

//settig up the server, make sure to communicate with Heroku an environment port or if that doesnt exist 5000, also set a variable (instance) in value of express//
const app = express();
const PORT = process.env.PORT || 5000;
//specifies middleware for express to use//
app.use(express.urlencoded({ extended: true}));
app.use(express.json ());

//static middleware for static files i.e. CSS
app.use(express.static("./public"));

//reading db json converting into an array and how to view each note: API Rounte Section//

