// knexfile.ts
module.exports = {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '1234',
      database: 'desafionexdigital',
    },
    // A propriedade 'migrations' não é mais necessária aqui
  };


  
// const knex = require('knex')({
//     client: 'mysql2',
//     connection: {
//       host: '127.0.0.1',
//       port: 3306,
//       user: 'root',
//       password: '1234',
//       database: 'desafionexdigital',
// }});

// module.exports = knex
  