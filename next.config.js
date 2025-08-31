/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
  extends: [
        'plugin:@next/next/recommended',
    ],
}

module.exports = nextConfig
