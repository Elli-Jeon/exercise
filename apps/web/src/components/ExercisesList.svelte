<script lang="ts">
	import type { IExerciseRecord } from '@type/exercise';

	export let exercises: IExerciseRecord[];
</script>

<div class="md:w-90 flex w-full flex-col divide-y-2 rounded-2xl border bg-white">
	{#each exercises as { exercise_name, weight, success, created_at } (exercise_name)}
		<div class="flex h-20 w-full items-center justify-center space-x-2 p-4">
			<div class=" h-10 w-10 rounded-full border bg-gray-100" />
			<h2 class="flex-1 text-lg">{exercise_name}</h2>
			<h3 class="text-base {success ? 'text-success' : 'text-failure'}">{weight}kg</h3>
			<h3 class="text-base">{created_at}</h3>
		</div>
	{/each}
</div>
