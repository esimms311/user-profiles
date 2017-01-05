var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var corsOptions = {
  origin: 'http://localhost:3000'
};

// console.log(__dirname);
app.use(cors(corsOptions));
var config = require('./config.js');

app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}));

var profile = require('./controllers/profileCtrl');
var user = require('./controllers/userCtrl')

app.get('/api/profile', profile.getFriends)
app.post('/api/login', user.login)

var port = 3000;
app.listen(port, function(){
  console.log('Good to Go!');
});
