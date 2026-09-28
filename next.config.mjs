/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.10.5'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
