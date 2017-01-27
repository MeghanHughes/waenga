
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wishlistTable', function(t){
    t.string('wishlist_desc');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wishlistTable')
};
