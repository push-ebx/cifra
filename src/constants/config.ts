const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL!,
    mocks: process.env.NEXT_PUBLIC_API_MOCKING === 'enabled',
  },
} as const;

export default config;
