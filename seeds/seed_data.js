var data = require('../data')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('waenga').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('waenga').insert(data[0]),
        knex('waenga').insert(data[1]),
        knex('waenga').insert(data[2])
      ]);
    });
};
