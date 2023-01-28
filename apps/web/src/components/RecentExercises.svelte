<script lang="ts">
	import type { IRecentExercise } from '@type/exercise';

	export let exercises: IRecentExercise[];
</script>

<div class="w-90 flex h-24 items-center justify-center rounded-2xl border bg-white">
	{#each exercises as { exercise, weight, success } (exercise)}
		<div class=" flex h-full flex-1 flex-col items-center justify-center">
			<h2 class="text-xl">
				{exercise}
			</h2>
			<h3 class="text-lg {success ? 'text-success' : 'text-failure'}">
				{weight}
			</h3>
		</div>
	{/each}
</div>
