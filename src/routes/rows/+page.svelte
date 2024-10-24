<!-- src/routes/rows/+page.svelte -->
<script lang="ts">
	export let data: { rows: Array<{ id: number; views: number }> };
</script>

<h1>Page Insights</h1>

{#if data.rows.length > 0}
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>Views</th>
			</tr>
		</thead>
		<tbody>
			{#each data.rows as row}
				<tr>
					<td>{row.id}</td>
					<td>{row.views}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>No data available.</p>
{/if}
