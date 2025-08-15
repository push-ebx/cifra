import type { NextConfig } from 'next';

import bundleAnalyzer from '@next/bundle-analyzer';
import classnamesMinifier from '@nimpl/classnames-minifier';

import { validateEnv } from './validate-env';

validateEnv();

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withClassnamesMinifier = classnamesMinifier({
  prefix: 'ca_',
  disabled: process.env.NODE_ENV === 'development',
  distDeletionPolicy: 'auto',
});

const nextConfig: NextConfig = {
  // output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default withBundleAnalyzer(withClassnamesMinifier(nextConfig));
