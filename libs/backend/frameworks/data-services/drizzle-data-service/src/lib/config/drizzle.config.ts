import { Config, defineConfig } from 'drizzle-kit';
import path = require('path');


export default defineConfig({
    // TODO: Pass only string
    // TODO: Fix (can't locate schema even if it exists)
  schema: path.join(__dirname, '..', 'schema', 'url.schema.ts'),
  out: path.join(__dirname, '..', 'migrations'),
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env['DATABASE_URL'] ?? '',
  },
}) satisfies Config;