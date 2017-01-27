
exports.up = function(knex, Promise) {
  return knex.schema.createTable('image', function(t){
    t.increments('image_id');
    t.string('url');
  })
};

  exports.down = function(knex, Promise) {
  return knex.schema.dropTable('image')
  };
