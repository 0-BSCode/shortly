import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: ['../schema/url.schema.ts'],
  out: '../migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env['DATABASE_URL'] ?? '',
  },
});