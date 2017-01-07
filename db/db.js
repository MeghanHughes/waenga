var environment = process.env.NODE_ENV  || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

// var development = require('./knexfile')['development']
// var knex = require('knex')(development)

function listAllZones(){
  return knex('zoneTable')
  .select('*')
}
function listProjectData(projectID){
  return knex('projects_ppe')
  .join('projects','proj_id','=','projects.project_id')
  .join('ppeGear','ppeGear_id','=','ppeGear.ppe_id')
  .select('*')
  .where('projects.project_id',projectID)
  .then(transformData)
}

function joinZoneImage(zone_id){
  return knex('zoneImage')
  .join('zoneTable', 'zone_id', '=', 'zoneTable.zone_id')
  .join('')

}

// function addNewZoneName(newZoneName){
//   var newZoneName = {
//   zone_name: newZoneName.name
//   return knex ('zoneTable')
//   .insert(newZoneName)
//   })
// }
//
// function addNewHazardData(newHazardData, projectID){
//     delete newHazardData.submit
//     return knex('hazards')
//     .insert(newHazardData)
//     .then(function(hazard_id){
//       return addIdsToProjHazTable(projectID,hazard_id)
// })

module.exports = {
  listAllZones: listAllZones,
  // addNewZone: addNewZone
}


// function add(data){
//   console.log('Adding data!')
//   return knex('waenga').insert({
//     section_name: data.section_name,
//     description: data.description,
//     img: data.img,
//     plantings: data.plantings,
//     activities: data.activites,
//     to_do: data.to_do,
//     alerts: data.alerts,
//     wishlist: data.wishlist,
//   })
// }
//
// function getAllZones(){
//   return knex('waenga')
//   .select('*')
// }
//
// function getSection(id){
//   return knex('waenga').where({
//     id:id
//   }).first()
// }



// module.exports = {
//   // add: add,
//   getSection: getSection
// }
