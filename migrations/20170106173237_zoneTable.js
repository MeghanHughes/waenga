
exports.up = function(knex, Promise) {
  return knex.schema.createTable('zoneTable', function(t){
    t.integer('zone_id');
    t.string('zone_name');
    t.string('aspect');
    t.string('soil_cond');
    t.string('landscape');
    t.string('exposure');
    t.string('access');
    t.string('weed_control')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('zoneTable')
};
