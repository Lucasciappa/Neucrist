/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: "Neucrist",
    API_DEVELOPMENT: "http://localhost:8000/api",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: 'https://neucrist.com'
},
  webpack5: false,
}

module.exports = nextConfig


// module.exports = {
//   reactStrictMode: true,
// },
// {
//   publicRuntimeConfig: {
//       APP_NAME: "Neucrist",
//       API_DEVELOPMENT: "http://localhost:8000/api",
//       PRODUCTION: false,
//       DOMAIN_DEVELOPMENT: 'http://localhost:3000',
//       DOMAIN_PRODUCTION: 'https://neucrist.com'
//   },
//   webpack5: false,
// }
