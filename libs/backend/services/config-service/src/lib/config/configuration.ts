export const configuration = async () => {
  return {
    NODE_ENV: process.env['NODE_ENV'],
    PORT: process.env['PORT'],
    DATABASE_URL: process.env['DATABASE_URL'],
    JWT_SECRET: process.env['JWT_SECRET'],
    JWT_EXPIRY: process.env['JWT_EXPIRY'],
  };
};
