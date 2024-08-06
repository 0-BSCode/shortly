import { date, integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const urlsTable = pgTable('Urls', {
  id: serial('id').primaryKey(),
  originalUrl: varchar('originalUrl', { length: 2048 }).notNull(),
  shortenedUrl: varchar('shortenedUrl', { length: 2048 }).notNull(),
  createdAt: date('createdAt').notNull().defaultNow(),
  clicks: integer('clicks').notNull().default(0),
});
