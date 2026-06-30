import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve HTML estático da pasta public diretamente
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/concorrente',
          destination: '/concorrente.html',
        },
      ],
    };
  },
};

export default nextConfig;
