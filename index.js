const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//parser for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set static
app.use(express.static(path.join(__dirname, 'public')));

//connect
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ql_nhahang');
//on connection
mongoose.connection.on('connected', () => {
    console.log('connected mongodb');
})

//get api routers
const apiHome = require('./server/routers/user/apiUser');

// Set our api routes
app.use('/api', apiHome);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


app.listen(port, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.