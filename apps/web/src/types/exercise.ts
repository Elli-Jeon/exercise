export interface IExercise {
	exercise: string;
	part: string;
	weight: number;
	success: boolean;
	date: string;
}

export interface IExerciseRecord {
	id: number;
	exercise_name: string;
	weight: number;
	success: boolean;
	created_at: string;
	user_name: string;
}
