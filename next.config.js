/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'links.papareact.com',
      'jsonkeeper.com',
    ]
  },
  env: {
    NEXT_PUBLIC_MAPBOX_ACCESS_ID: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_ID
  },
  reactStrictMode: true,
}

module.exports = nextConfig
