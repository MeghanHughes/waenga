
exports.up = function(knex, Promise) {
  return knex.schema.createTable('waenga', function(table){
    table.increments();
    table.string('section_name');
    table.string('description');
    table.string('img');
    table.string('plantings');
    table.string('activities');
    table.string('to_do');
    table.string('alerts');
    table.string('wishlist');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('waenga')
};
