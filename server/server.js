var path = require('path');
var app = require('./index');
var fs = require('fs');
var brotli = require('brotli');

var brotliSettings = {
  extension: 'br',
  skipLarger: true,
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 6, // 0 - 11,
  lgwin: 12, // default
};

fs.readdirSync('../dist/en/').forEach(function(file) {
  if (
    file.endsWith('.js') ||
    file.endsWith('.ts') ||
    file.endsWith('.scss') ||
    file.endsWith('.html')
  ) {
    var result = brotli.compress(
      fs.readFileSync('../dist/en/' + file),
      brotliSettings
    );
    fs.writeFileSync('../dist/en/' + file + '.br', result);
  }
});

fs.readdirSync('../dist/es/').forEach(function(file) {
  if (
    file.endsWith('.js') ||
    file.endsWith('.ts') ||
    file.endsWith('.scss') ||
    file.endsWith('.html')
  ) {
    var result = brotli.compress(
      fs.readFileSync('../dist/es/' + file),
      brotliSettings
    );
    fs.writeFileSync('../dist/es/' + file + '.br', result);
  }
});

fs.readdirSync('../dist/de/').forEach(function(file) {
  if (
    file.endsWith('.js') ||
    file.endsWith('.ts') ||
    file.endsWith('.scss') ||
    file.endsWith('.html')
  ) {
    var result = brotli.compress(
      fs.readFileSync('../dist/de/' + file),
      brotliSettings
    );
    fs.writeFileSync('../dist/de/' + file + '.br', result);
  }
});

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
