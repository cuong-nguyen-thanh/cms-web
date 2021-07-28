module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '107.120.70.222'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'quvia-api'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '123456'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
