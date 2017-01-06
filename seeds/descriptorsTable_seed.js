
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('descriptorsTable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('descriptorsTable').insert({
          desc_id: 1,
          aspect: 'Nth facing',
          soil_cond: 'poor, clay',
          landscape: 'steep slope',
          exposure: 'sheltered',
          access: 'difficult',
          weed_control: 'out of control'
        }),
        knex('descriptorsTable').insert({
          desc_id: 2,
          aspect: 'West facing',
          soil_cond: 'poor',
          landscape: 'flat',
          exposure: 'sheltered',
          access: 'easy',
          weed_control: 'under control'
        }),
        knex('descriptorsTable').insert({
          desc_id: 3,
          aspect: 'South to East facing',
          soil_cond: 'fair',
          landscape: 'flat',
          exposure: 'sheltered',
          access: 'easy',
          weed_control: 'under control'
        })
      ]);
    });
};
