// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "express_gallery_user",
      password: "password",
      database: "express_gallery_db",
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "express_gallery_db",
      user: "express_gallery_user",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "express_gallery_db",
      user: "express_gallery_user",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
