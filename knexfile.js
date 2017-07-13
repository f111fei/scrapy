module.exports = {
  development: {
    client: 'mssql',
    connection: {
      host: '127.0.0.1',
      user: 'dev',
      password: 'dev',
      database: 'Scrapy',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'KnexMigrations'
    }
  },

  staging: {
    client: 'mssql',
    connection: {
      host: '127.0.0.1',
      user: 'dev',
      password: 'dev',
      database: 'Scrapy',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'KnexMigrations'
    }
  },

  production: {
    client: 'mssql',
    connection: {
      host: '127.0.0.1',
      user: 'dev',
      password: 'dev',
      database: 'Scrapy',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'KnexMigrations'
    }
  }
}
