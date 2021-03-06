var db = require('./db/db')

function getAllZones(req, res) {
  db.listAllZones()
  .then(zoneTable => {
    res.render('waenga', {'zoneTable': zoneTable})
  })
}

function getZoneProfile(req, res){
  var zoneId = Number(req.params.id)
  db.listZoneProfile(zoneId)
    .then(function(zoneData) {
    res.render('zoneProfile', zoneData[0])
  })
}

function addNewZone(req, res) {
  var newZone = req.body
  db.addNewZoneData(newZone)
  .then(function(new_zone) {
    res.redirect('/')
  })
}

// function editProfile(req, res) {
//   var
// }

module.exports = {
  getAllZones: getAllZones,
  getZoneProfile:getZoneProfile,
  addNewZone:addNewZone
}
