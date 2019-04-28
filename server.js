const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// CORS
app.use(cors());

// More CORS settings
app.use((req, res, next) => {
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

// TODO: unused endpoints
app.get('/api', (req, res) => { });
app.post('/api/sendEmail', (req, res) => { });

// Required for path location strategy
/*
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
*/

app.get('*', (req, response) => {
	//this is for i18n
  const supportedLocales = ['en', 'de'];
  const defaultLocale = 'en';
  const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
  //check if the requested url has a correct format '/locale' and matches any of the supportedLocales
  const locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;

  //res.render(`${ locale }/index`, { req });
  response.sendFile(path.join(__dirname, `dist/${ locale }`, 'index.html'));
});

// Fire up the server and log it
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${ app.get('port') }`); // eslint-disable-line no-console
});