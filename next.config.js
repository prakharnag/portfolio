/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  basePath: process.env.NEXT_PUBLIC_ENV === 'production' ? '/prakharnag.github.io' : '',
}

module.exports = nextConfig 