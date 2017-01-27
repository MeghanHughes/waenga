var express = require ('express')
var expresshbs = require ('express-handlebars')
var path = require ('path')
var bodyParser = require ('body-parser')
var routes = require('./routes')
var fs = require ('fs')
var app = express()

app.engine('handlebars', expresshbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static (path.join(__dirname, 'public')))


app.get('/',routes.getAllZones);
app.get('/waenga', routes.getAllZones);
app.get('/waenga/new_zone', function(req, res) {
 res.render('new_zone');});
app.post('/new_zone', routes.addNewZone);
app.get('/waenga/:id', routes.getZoneProfile);


module.exports = app;
