const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'project',
    user: 'root',
    password: 'Avi123Nash@#',
    database: 'task_manager_app'
  }
});
module.exports = knex;
