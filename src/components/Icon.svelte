<script>
	import HomeIcon from '@assets/home.svelte';
	import CalendarIcon from '@assets/calendar.svelte';
	import ExerciseIcon from '@assets/exercise.svelte';
	import GraphIcon from '@assets/graph.svelte';
	import SocialIcon from '@assets/social.svelte';

	export let icon = 'home';
</script>

{#if icon === 'home'}
	<HomeIcon />
{:else if icon === 'calendar'}
	<CalendarIcon />
{:else if icon === 'exercise'}
	<ExerciseIcon />
{:else if icon === 'graph'}
	<GraphIcon />
{:else if icon === 'social'}
	<SocialIcon />
{/if}
