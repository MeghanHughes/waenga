
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plantTable', function(t){
    t.integer('plant_id');
    t.string('plant_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plantTable')
};
