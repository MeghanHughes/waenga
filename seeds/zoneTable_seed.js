
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zoneTable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('zoneTable').insert({
          zone_id: 1,
          zone_name: 'Front of house (deck)',
          aspect: 'North',
          soil_cond: 'poor',
          landscape: 'steep slope',
          exposure: 'sheltered',
          access: 'difficult',
          weed_control: 'out of control',
          seasonable: 'all year'
        }),
        knex('zoneTable').insert({
          zone_id: 2,
          zone_name: 'Side of house (bathroom)',
          aspect: 'West',
          soil_cond: 'poor',
          landscape: 'flat',
          exposure: 'sheltered',
          access: 'easy',
          weed_control: 'under control',
          seasonable: 'Summer'
        }),
        knex('zoneTable').insert({
          zone_id: 3,
          zone_name: 'Patio',
          aspect: 'East',
          soil_cond: 'fair',
          landscape: 'flat',
          exposure: 'sheltered',
          access: 'easy',
          weed_control: 'under control',
          seasonable: 'Summer'
        })
      ]);
    });
};
