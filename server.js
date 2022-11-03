// adding the dependencies and using util module to have access to utility functions//
const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')




//setting up the server, make sure to communicate with Heroku an environment port or if that doesnt exist 5000, also set a variable (instance) in value of express//
const app = express();
const PORT = process.env.PORT || 3001;
//specifies middleware for express to use//
app.use(express.urlencoded({ extended: true}));
app.use(express.json ());

//static middleware for static files i.e. CSS
app.use(express.static("public"));
app.use('/api', apiRoutes);
api.use('/', htmlRoutes);

//Setting the server to listen, starts the express server, uses express to listen
app.listen(PORT, function () {
    console.log('App listening on PORT, its ALIVE!!' + PORT);
});


