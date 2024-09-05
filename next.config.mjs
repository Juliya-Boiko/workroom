/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
    prependData: `
      @import "${join(__dirname, 'styles', '_variables.scss')}";
      @import "${join(__dirname, 'styles', '_mixins.scss')}";
      @import "${join(__dirname, 'styles', '_placeholders.scss')}";
      @import "${join(__dirname, 'styles', '_typografy.scss')}";
    `,
  },
};

export default nextConfig;
