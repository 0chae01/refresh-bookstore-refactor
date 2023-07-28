/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination:
          "https://port-0-refresh-bookstore-20zynm2mlk1daxmm.sel4.cloudtype.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
