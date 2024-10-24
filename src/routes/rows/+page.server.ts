// src/routes/rows/+page.server.ts
import { db } from "$lib/server/db";
import { pageInsights } from "$lib/server/db/schema";

export async function load() {
	try {
		// Fetch all rows from the pageInsights table
		const rows = await db.select().from(pageInsights);
		return { rows };
	} catch (error) {
		console.error("Error fetching rows:", error);
		return { rows: [] }; // Return an empty array in case of an error
	}
}
