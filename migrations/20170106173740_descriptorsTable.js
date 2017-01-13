
exports.up = function(knex, Promise) {
  return knex.schema.createTable('descriptorsTable', function(t){
    t.increments('id');
    t.string('aspect');
    t.string('soil_cond');
    t.string('landscape');
    t.string('exposure');
    t.string('access');
    t.string('weed_control')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('descriptorsTable')
};
