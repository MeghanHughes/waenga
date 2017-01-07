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

// function getNewProjectForm(req, res){
//   db.getPpeGearData()
//   .then(function(ppeData){
//     res.render('newProject',{'ppeData':ppeData})
//   })
// }
//
// function addNewProjectData(req, res){
//   var newProjectData = req.body
//   db.addNewProjectData(newProjectData)
//   .then(function(){
//     res.redirect('/')
//   })
// }

module.exports = {
  getAllZones: getAllZones,
  // addNewZone: addNewZone
}
