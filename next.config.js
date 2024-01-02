// next.config.js

const path = require('path');
const config = require('config');

// Asegurarse de que se esté obteniendo el valor correcto de 'constants' desde el archivo de configuración
const constants = config.has('constants') ? config.get('constants') : {};

/** @type {import('next').NextConfig} */

const combinedConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    return config;
  },
  env: {
    ...constants
  },
  images: {
    domains: ['www.via-asesores.com', 'gt.via-asesores.com', 'qa.via-asesores.com'],
    unoptimized: true, // solo para generar sitio estático
  },
  assetPrefix: constants.publicPath || '', // Si 'publicPath' no está definido, se establece como cadena vacía
  basePath: constants.publicPath || '', // Si 'publicPath' no está definido, se establece como cadena vacía
  compiler: {
    styledComponents: true,
  },
  rewrites: async () => [
    {
      source: '/orbisapi/:path*',
      destination: 'http://localhost:9000/:path*' // Proxy to Backend
    }
  ],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = combinedConfig;
