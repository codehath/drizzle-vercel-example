<script lang="ts">
	let { data } = $props();

	import { enhance } from "$app/forms";

	let seedingStatus = "";

	async function handleSeed() {
		seedingStatus = "Seeding...";
		try {
			const response = await fetch("/api/seed", { method: "POST" });
			const result = await response.json();
			seedingStatus = result.message || "Seeding completed";
		} catch (error) {
			console.error("Error seeding database:", error);
			seedingStatus = "Failed to seed database";
		}
	}
</script>

<p>
	This page has been viewed {data.views} times.
</p>

<button on:click={handleSeed}>Seed Database</button>
{#if seedingStatus}
	<p>{seedingStatus}</p>
{/if}
