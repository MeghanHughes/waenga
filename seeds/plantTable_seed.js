
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plantTable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('plantTable').insert({
          plant_id: 1,
          plant_name: 'feijoa'}),
        knex('plantTable').insert({
          plant_id: 2,
          plant_name: 'lemon'}),
        knex('plantTable').insert({
          plant_id: 3,
          plant_name: 'lime'})
      ]);
    });
};
