
exports.up = function(knex, Promise) {
  return knex.schema.createTable('zoneTable', function(t){
    t.integer('zone_id');
    t.string('zone_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('zoneTable')
};
