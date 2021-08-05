module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a949542c25a22ad2d82d6712a45fcc0a'),
    },
    // url: env('PUBLIC_ADMIN_URL', '/plugins/content-manager/collectionType/application::emails.emails'),
  },
});
