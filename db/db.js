var environment = process.env.NODE_ENV  || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

function add(data){
  console.log('Adding data!')
  return knex('waenga').insert({
    section_name: data.section_name,
    description: data.description,
    img: data.img,
    plantings: data.plantings,
    activities: data.activites,
    to_do: data.to_do,
    alerts: data.alerts,
    wishlist: data.wishlist,
  })
}

function getSection(id){
  return knex('waenga').where({
    id:id
  }).first()
}

module.exports = {
  add: add,
  getSection: getSection
}