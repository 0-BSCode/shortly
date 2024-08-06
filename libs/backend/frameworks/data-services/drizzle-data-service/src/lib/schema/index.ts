import { InferSelectModel } from 'drizzle-orm';
import { urlsTable } from './url.schema';

export const schema = {
  urlsTable,
};

export type UrlDrizzleDataType = InferSelectModel<typeof urlsTable>;
