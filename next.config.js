/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: []
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiaG9wZTg3IiwiYSI6ImNsYW1mY2l0MTBiaDEzcW42ajl4MG1pNHUifQ.aX7NpbObL9gql84MNQPWtA'
  }
}

module.exports = nextConfig
