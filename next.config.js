/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    dirs: ['pages', 'utils'], 
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
        ]  
      }
    ]
  },
}

module.exports = nextConfig