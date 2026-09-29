/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.39.216', '192.168.0.38'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
