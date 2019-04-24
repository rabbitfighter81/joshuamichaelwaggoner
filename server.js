const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 8000;
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(port);


server.listen(port, function() {
    console.log("App running on port " + port);
})

// PathLocationStrategy
app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist', 'index.html'));
});