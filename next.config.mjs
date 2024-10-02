/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/share/Muhammad-CV.pdf',
        permanent: true, // Set to true for a permanent redirect
      },
    ];
  },
};

export default nextConfig;
