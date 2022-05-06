module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DB_HOST', '127.0.0.1'),
      port: env.int('DB_PORT', 5432),
      database: env('DB_NAME', 'invoice-db'),
      user: env('DB_USERNAME', 'invoice'),
      password: env('DB_PASSWORD', 'invoice'),
      ssl: env.bool(false),
    },
  },
});
