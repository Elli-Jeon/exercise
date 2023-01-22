export interface IExercise {
	exercise: string;
	part: string;
	weight: number;
	success: boolean;
	date: string;
}

export type IRecentExercise = Pick<IExercise, 'exercise' | 'weight' | 'success'>;
