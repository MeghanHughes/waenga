

var express = require ('express')
var expresshbs = require ('express-handlebars')
var path = require ('path')
var bodyParser = require ('body-parser')
var db = require('./db/db')

var app = express()

app.engine('handlebars', expresshbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static (path.join(__dirname, 'public')))

app.get('/', function(req, res){
  res.redirect('/waenga')
})

app.get('/waenga', function(req, res){
  res.render('waenga')
})

app.get('/waenga/hui_katoa', function(req, res){
  res.render('huiKatoa')
})

app.get('/waenga/:id', function(req, res){
  var sectionId = Number(req.params.id)
  db.getSection(sectionId)
  .then(sectionData => {
    res.render('sectionProfile', sectionData)
  })
})


module.exports = app;
