var environment = process.env.NODE_ENV  || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

// var development = require('./knexfile')['development']
// var knex = require('knex')(development)

function listAllZones(){
  return knex('zoneTable')
  .select('*')
}

function listZoneProfile(zoneId){
  return knex('zoneTable')
    .where('zoneTable.zone_id', zoneId)

}


module.exports = {
  listAllZones: listAllZones,
  listZoneProfile: listZoneProfile
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
