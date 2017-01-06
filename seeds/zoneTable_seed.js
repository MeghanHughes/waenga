
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zoneTable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('zoneTable').insert({zone_id: 1, zone_name: 'front of house(deck)'}),
        knex('zoneTable').insert({zone_id: 2, zone_name: 'side of house(entrance)'}),
        knex('zoneTable').insert({zone_id: 3, zone_name: 'around house'})
      ]);
    });
};
