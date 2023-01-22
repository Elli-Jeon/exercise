export interface IExercise {
	exercise: string;
	weight: number;
	success: boolean;
	date: string;
}

export type IRecentExercise = Omit<IExercise, 'date'>;
