import { pgTable, serial, integer } from "drizzle-orm/pg-core";

export const pageInsights = pgTable("page_insights", {
	id: serial("id").primaryKey(),
	views: integer("views").notNull(),
});
