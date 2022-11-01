// adding the dependencies and using util module to have access to utility functions//
const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');

//Handling asuchonous processes//
const readFileAsync = util.promisify(fs.readfile);
const writeFileAsync = util.promisify(fs.writeFile);

