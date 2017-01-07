var db = require('./db/db')

function getAllZones(req, res){
  db.listAllZones()
  .then(zoneTable => {
    res.render('waenga', {'zoneTable': zoneTable})
  })
}

getAllZones
module.exports = {
  getAllZones: getAllZones
}
