<script lang="ts">
	import type { IExerciseRecord } from '@type/exercise';

	export let exercises: IExerciseRecord[];
</script>

<div class="w-90 flex h-24 items-center justify-center rounded-2xl border bg-white">
	{#each exercises as { exercise_name, weight, success } (exercise_name)}
		<div class=" flex h-full flex-1 flex-col items-center justify-center">
			<h2 class="text-xl">
				{exercise_name}
			</h2>
			<h3 class="text-lg {success ? 'text-success' : 'text-failure'}">
				{weight}
			</h3>
		</div>
	{/each}
</div>
