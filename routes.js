var db = require('./db/db')

function getAllZones(req, res){
  db.listAllZones()
  .then(zoneTable => {
    res.render('waenga', {'zoneTable': zoneTable})
  })
}
//
// function addNewZone(req,res){
//   var newZoneName = req.body
//   db.addNewZone(newZoneName)
//   .then(function(){
//     res.redirect('/')
//   })
// }

module.exports = {
  getAllZones: getAllZones,
  // addNewZone: addNewZone
}
