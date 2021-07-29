module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        // host: env('DATABASE_HOST', '107.120.70.222'),
        // host: env('DATABASE_HOST', '127.0.0.1'),
        host: env('DATABASE_HOST', 'pgm-gs5204ghj2439f1s153650.pgsql.singapore.rds.aliyuncs.com'),
        // port: env.int('DATABASE_PORT', 5432),
        port: env.int('DATABASE_PORT', 1921),
        // database: env('DATABASE_NAME', 'quvia-api'),
        // database: env('DATABASE_NAME', 'republik_0728'),
        database: env('DATABASE_NAME', 'republik'),
        // username: env('DATABASE_USERNAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'republik'),
        // password: env('DATABASE_PASSWORD', '123456'),
        password: env('DATABASE_PASSWORD', 'republik@123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
