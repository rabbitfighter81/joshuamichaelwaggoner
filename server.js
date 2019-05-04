var cors = require('cors');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var compression = require('compression');

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use("/en/", express.static(__dirname + "/dist/en"));
app.use("/de/", express.static(__dirname + "/dist/de"));
app.use("/es/", express.static(__dirname + "/dist/es"));

// CORS
app.use(cors());
app.use(compression())

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
app.use(bodyParser.urlencoded({ extended: false }));

// Set port
app.set('port', process.env.PORT || 8080);

var greyhoundsFilePath = path.join(__dirname, 'src/db.greyhounds.json');

app.get('/api/greyhounds', function(req, res) {
    var readable = fs.createReadStream(greyhoundsFilePath);
    readable.pipe(res);
});

// Required for path location strategy
/*
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
*/

app.get('*', function(req, response) {
    //this is for i18n
    var supportedLocales = ['en', 'es', 'de'];
    var defaultLocale = 'en';
    var matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
    //check if the requested url has a correct format '/locale' and matches any of the supportedLocales
    var locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;

    //res.render(`${ locale }/index`, { req });
    response.sendFile(path.join(__dirname, 'dist/' + locale, 'index.html'));
});

// Fire up the server and log it
app.listen(app.get('port'), function() {
    console.log('Find the server at: http://localhost:' + app.get('port')); // eslint-disable-line no-console
});