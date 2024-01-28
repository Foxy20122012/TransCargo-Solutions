const config = require('config')
const constants = config.get('constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: '/mantenimientos',
        destination: constants.publicPath,
        permanent: false
      },
    ];
  },
  env: {
    ...constants,
    dbHost: constants.dbHost,
    dbPort: constants.dbPort,
    dbUser: constants.dbUser,
    dbPassword: constants.dbPassword,
    dbDatabase: constants.dbDatabase
  },
  images: {
    domains: ['www.via-asesores.com', 'gt.via-asesores.com', 'qa.via-asesores.com'],
    unoptimized: true, // solo para generar sitio estático
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
