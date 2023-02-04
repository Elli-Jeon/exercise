<script>
	import supabase from '@lib/api/supabaseClient';
	import Input from './Input.svelte';

	let squat = 0;
	let benchPress = 0;
	let deadlift = 0;

	const handleUpload = async () => {
		let arr = [];

		try {
			const { data, error } = await supabase.from('Record').insert([
				{
					user_name: 'elli',
					exercise_name: 'squat',
					weight: squat,
					success: true
				}
			]);
			console.log(data);
		} catch (err) {
			console.error(err);
			alert('에러');
		}
	};
</script>

<Input label="스쿼트" bind:value={squat} />
<Input label="벤치프레스" bind:value={benchPress} />
<Input label="데드리프트" bind:value={deadlift} />
<button on:click={handleUpload}>upload</button>
