exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, firstname: 'Alice', lastname: 'Smith', email: 'alicesmith@'}),
        knex('users').insert({id: 2, firstname: 'Bob', lastname: 'Smith'}),
        knex('users').insert({id: 3, firstname: 'Charlie', lastname: 'Smith'})
      ]);
    });
};
