import type { Load } from '@sveltejs/kit';
import supabase from '@lib/api/supabaseClient';
import type { IExerciseRecord } from '@type/exercise';

export const load: Load = async ({ params }) => {
	// Recent Exercise
	let recent: IExerciseRecord[] | null = [];

	const { data: recentData } = await supabase
		.from('Record')
		.select('created_at')
		.order('created_at', { ascending: false })
		.limit(1);

	if (recentData) {
		const recentDate = recentData[0]?.created_at;
		const { data } = await supabase.from('Record').select('*').eq('created_at', recentDate);
		recent = data;
	}

	// Latest Exercise
	// squat, bench-press, deadlift, barbell-row
	let latest: IExerciseRecord[] | null = [];

	const { data: exerciseList } = await supabase.from('Exercise').select('exercise_name');

	const list = exerciseList?.map((ex) => ex.exercise_name) ?? ['squat'];

	for await (const exercise of list) {
		const { data } = await supabase
			.from('Record')
			.select('*')
			.eq('exercise_name', exercise)
			.order('created_at', { ascending: false })
			.limit(1);

		if (data) {
			latest = [...latest, data[0]];
		}
	}

	return {
		recent: recent ?? [], // 어제의 운동
		latest: latest ?? [] // 운동별 최신 데이터
	};
};
