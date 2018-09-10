module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cohorts'
    },
        migrations: {
          tableName: 'knex_migrations',
          directory: "./db/migrations"
        
  },
    seeds: {
      directory: "./db/seeds"
    }
  }}


