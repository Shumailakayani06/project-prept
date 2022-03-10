module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fcee3481a45791926f23ad1d25ecb761'),
  },
});
