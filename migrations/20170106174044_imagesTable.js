
exports.up = function(knex, Promise) {
  return knex.schema.createTable('imagesTable', function (t){
    t.integer('image_id');
    t.string('url');
    t.date('date');
    t.string('annotation')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('imagesTable')
};
