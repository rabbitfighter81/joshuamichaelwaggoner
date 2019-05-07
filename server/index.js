var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

// CORS
app.use(cors());

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '../dist'));
app.use('/en/', express.static(__dirname + '/../dist/en'));
app.use('/de/', express.static(__dirname + '/../dist/de'));
app.use('/es/', express.static(__dirname + '/../dist/es'));

// More CORS settings
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Support json encoded bodies
app.use(bodyParser.json());

// Support encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Set port
app.set('port', process.env.PORT || 8080);

module.exports = app;
