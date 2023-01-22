<script lang="ts">
	import ExercisesList from '@components/ExercisesList.svelte';
	import RecentExercises from '@components/RecentExercises.svelte';
	import type { IExercise, IRecentExercise } from '@type/exercise';

	let recentExericses: IRecentExercise[] = [
		{
			exercise: 'squat',
			weight: 55,
			success: true
		},
		{
			exercise: 'barbell-row',
			weight: 35,
			success: false
		},
		{
			exercise: 'deadlift',
			weight: 50,
			success: true
		}
	];

	let exercisesList: IExercise[] = [
		{
			exercise: 'squat',
			weight: 55,
			success: true,
			date: '0122'
		},
		{
			exercise: 'barbell-row',
			weight: 35,
			success: false,
			date: '0122'
		},
		{
			exercise: 'deadlift',
			weight: 50,
			success: true,
			date: '0122'
		}
	];
</script>

<RecentExercises exercises={recentExericses} />
<ExercisesList exercises={exercisesList} />
