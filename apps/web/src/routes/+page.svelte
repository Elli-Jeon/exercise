<script lang="ts">
	let exercises = [
		{ exercise: '스쿼트', weight: 0 },
		{ exercise: '벤치프레스', weight: 0 },
		{ exercise: '데드리프트', weight: 0 }
	];
</script>

{#each exercises as { exercise, weight } (exercise)}
	<label>
		{exercise}
		<input type="number" name={exercise} bind:value={weight} />
	</label>
{/each}

{#each exercises as { exercise, weight } (exercise)}
	<div>{exercise} : {weight}</div>
{/each}
