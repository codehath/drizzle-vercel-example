import { db } from "$lib/server/db";
import { pageInsights } from "$lib/server/db/schema";
import { eq, max } from "drizzle-orm";

export async function load() {
	const row = await db
		.select({ value: max(pageInsights.id) })
		.from(pageInsights);
	console.log(row[0].value);

	const max_row = row[0].value;

	const result = await db
		.select()
		.from(pageInsights)
		.where(eq(pageInsights.id, max_row));
	const views = result[0]?.views || 0;

	await db
		.insert(pageInsights)
		.values({ views: views + 1 })
		.onConflictDoUpdate({
			target: pageInsights.id,
			set: { views: views + 1 },
		});

	return { views: views + 1 };
}
