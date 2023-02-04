<script lang="ts">
	import ExercisesList from '@components/ExercisesList.svelte';
	import RecentExercises from '@components/RecentExercises.svelte';

	export let data: any;

	let { recent, latest } = data;
	$: ({ recent, latest } = data);
</script>

<div id="home-page-container" class="relative flex h-full w-full flex-col">
	<div class="relative h-1/3 bg-gray-100">
		<div class="bg-primary absolute top-0 h-4/5 w-full">
			<h1 class="m-3 text-3xl text-white">어제의 운동</h1>
			<div class="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
				<RecentExercises exercises={recent} />
			</div>
		</div>
	</div>
	<div
		class="scrollbar-hide flex flex-1 flex-col items-start justify-start overflow-y-auto bg-gray-100 px-3 pt-12"
	>
		<h2 class="pb-1 text-xl">운동 별 최근기록</h2>
		<ExercisesList exercises={latest} />
	</div>
</div>
