var path = require('path');
var app = require('./index');
var fs = require('fs');

var greyhoundsFilePath = path.join(__dirname, './static/db.greyhounds.json');

app.get('/api/greyhounds', function(req, res) {
  var readable = fs.createReadStream(greyhoundsFilePath);
  readable.pipe(res);
});

app.get('*', function(req, response) {
  //this is for i18n
  var supportedLocales = ['en', 'es', 'de'];
  var defaultLocale = 'en';
  var matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
  //check if the requested url has a correct format '/locale' and matches any of the supportedLocales
  var locale =
    matches && supportedLocales.indexOf(matches[1]) !== -1
      ? matches[1]
      : defaultLocale;

  //res.render(`${ locale }/index`, { req });
  response.sendFile(path.join(__dirname, '/../dist/' + locale, 'index.html'));
});

// Fire up the server and log it
app.listen(app.get('port'), function() {
  console.log('Find the server at: http://localhost:' + app.get('port')); // eslint-disable-line no-console
});
