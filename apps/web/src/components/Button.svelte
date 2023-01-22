<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click', {
			text: 'hello'
		});
	};
</script>

<button on:click={handleClick}>
	<slot />
</button>
