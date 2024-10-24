// import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

// export const user = pgTable('user', {
//     id: serial('id').primaryKey(),
//     age: integer('age'),
// });

import { pgTable, serial, integer } from "drizzle-orm/pg-core";

export const pageInsights = pgTable("page_insights", {
	id: serial("id").primaryKey(),
	views: integer("views").notNull(),
});
