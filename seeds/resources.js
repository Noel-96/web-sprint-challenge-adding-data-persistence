exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Lambda School Canvas', resource_description: "Instructions on how to complete project"},
        {id: 2, resource_name: 'Slack', resource_description: "App to network with TA's if you need assistance"},
        {id: 3, resource_name: 'Test Resource Data', resource_description: "Test Resource Data"}
      ]);
    });
};