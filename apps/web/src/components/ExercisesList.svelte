<script lang="ts">
	import type { IExercise } from '@type/exercise';

	export let exercises: IExercise[];
</script>

<div class="flex w-90 flex-col divide-y-2 rounded-2xl border">
	{#each exercises as { exercise, weight, success, date } (exercise)}
		<div class="flex h-20 w-full items-center justify-center space-x-2 p-4">
			<div class=" h-10 w-10 rounded-full border bg-gray-200" />
			<h2 class="flex-1 text-lg">{exercise}</h2>
			<h3 class="text-base {success ? 'text-success' : 'text-failure'}">{weight}kg</h3>
			<h3 class="text-base">{date}</h3>
		</div>
	{/each}
</div>
