const cors = require('cors');
const path = require('path');
const express = require('express');
// const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// const mail = require('./emailSenders');

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 8080);

app.get('/api', (req, res) => {});
app.post('/api/sendEmail', (req, res) => {});

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${ app.get('port') }`); // eslint-disable-line no-console
});