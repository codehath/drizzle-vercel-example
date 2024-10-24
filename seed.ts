// seed.ts
import { db } from "./src/lib/server/db";
import { pageInsights } from "./src/lib/server/db/schema";
import { sql } from "@vercel/postgres";

export async function seed() {
	try {
		// Clear existing data
		await db.delete(pageInsights);

		// Insert seed data
		await db
			.insert(pageInsights)
			.values([{ views: 100 }, { views: 200 }, { views: 300 }]);

		console.log("Seed data inserted successfully");

		// Optionally, verify the inserted data
		const result = await db.select().from(pageInsights);
		console.log("Current data in pageInsights table:", result);
	} catch (error) {
		console.error("Error seeding data:", error);
	} finally {
		// Close the database connection
		await sql.end();
	}
}

// seed();
