var express = require('express');
var engine = require('ejs-locals');
var path = require('path');


var routing = require('./routing/routing');

var app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.cookieParser())
.use(express.session({secret: 'secreteRecrut'}))
.use(express.bodyParser())
.use(express.favicon())
.use(express.static(__dirname, 'public'))
.use(express.logger('dev'));

routing.setup(app);

app.listen(8080);
console.log("192.168.1.151:8080");