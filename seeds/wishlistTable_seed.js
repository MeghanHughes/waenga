
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishlistTable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('wishlistTable').insert({wishlist_desc: 'improve access'}),
        knex('wishlistTable').insert({wishlist_desc: 'lay paving'})
      ]);
    });
};
