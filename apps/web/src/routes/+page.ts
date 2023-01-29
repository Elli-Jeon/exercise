import type { Load } from '@sveltejs/kit';
import supabase from '@lib/api/supabaseClient';
import type { IExerciseRecord } from '@type/exercise';

export const load: Load = async ({ params }) => {
	// Recent Exercise
	let recent: IExerciseRecord[] | null = [];

	const { data: latest } = await supabase
		.from('Record')
		.select('created_at')
		.order('created_at', { ascending: false })
		.limit(1);

	if (latest) {
		const latestDate = latest[0]?.created_at;
		const { data } = await supabase.from('Record').select('*').eq('created_at', latestDate);
		recent = data;
	}

	// Latest Exercise

	return {
		recent: recent ?? []
	};
};
