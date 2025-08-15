const requiredEnv = [{ key: 'NEXT_PUBLIC_API_URL' }];

export const validateEnv = () => {
  const missingEnvs = requiredEnv.filter(({ key }) => !process.env[key]);

  if (missingEnvs.length === 0) return;
  console.error('\nError: Missing required environment variables');

  missingEnvs.forEach((env) => {
    console.error(`• ${env.key}`);
  });

  process.exit(1);
};
