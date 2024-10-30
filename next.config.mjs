/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import createNextIntlPlugin from 'next-intl/plugin';

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

const withNextIntl = createNextIntlPlugin('./libs/i18n.ts');

export default withNextIntl(nextConfig);
