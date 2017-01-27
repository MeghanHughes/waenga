
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('imagesTable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('imagesTable').insert({image_id: 1, url: 'https://photos.google.com/photo/AF1QipN608c40KfkYtol930_CyKhMyFB90d6atO1uF8y', date: 7/01/17, annotation: 'freshly blasted!'}),
        knex('imagesTable').insert({image_id: 2, url: 'https://photos.google.com/photo/AF1QipOuL_NFYYs0fsJQNy0opH5rDB_iRHbt8axi3vwE', date: 7/01/17, annotation: 'untouched for a year'}),
        knex('imagesTable').insert({image_id: 3, url: 'https://photos.google.com/photo/AF1QipPAtKc27LDwv6cJYoJo1qJBn2492y0SupGF', date: 7/01/17, annotation: 'ready for paving stones'})
      ]);
    });
};
