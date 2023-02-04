<script lang="ts">
	export let label = '';
	export let value = 0;
</script>

<span>{label}</span>
<input type="number" bind:value />
