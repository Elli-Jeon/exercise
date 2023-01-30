<script lang="ts">
	import ExercisesList from '@components/ExercisesList.svelte';
	import RecentExercises from '@components/RecentExercises.svelte';

	export let data: any;

	let { recent, latest } = data;
	$: ({ recent, latest } = data);
</script>

<div id="home-page-container" class="relative flex h-full w-full flex-col">
	<div class="bg-primary h-1/3 p-3">
		<h1 class="text-3xl">어제의 운동</h1>
		<div class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
			<RecentExercises exercises={recent} />
		</div>
	</div>
	<div
		class="scrollbar-hide flex flex-1 flex-col items-start justify-center overflow-y-auto bg-gray-100 px-3 pt-16"
	>
		<h2 class="pb-1 text-xl">운동 별 최근기록</h2>
		<ExercisesList exercises={latest} />
	</div>
</div>
