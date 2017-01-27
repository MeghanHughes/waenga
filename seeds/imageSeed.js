
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('image').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('image').insert({image_id: 1, url: 'https://photos.google.com/photo/AF1QipOuL_NFYYs0fsJQNy0opH5rDB_iRHbt8axi3vwE'}),
        knex('image').insert({image_id: 2, url: 'https://photos.google.com/photo/AF1QipPAtKc27LDwv6cJYoJo1qJBn2492y0SupGFaroj'}),
        knex('image').insert({image_id: 3, url: 'https://photos.google.com/photo/AF1QipN608c40KfkYtol930_CyKhMyFB90d6atO1uF8y'})
      ]);
    });
};
