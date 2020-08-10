import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(
      __dirname,
      process.env.DB_FILENAME || 'database.sqlite'
    ),
  },
  useNullAsDefault: true,
});

export default db;
