<script>
	import '../app.css'; // tailwind
	import Icon from '@components/Icon.svelte';

	let tabs = [
		{ name: 'home', icon: 'home' },
		{ name: 'calendar', icon: 'calendar' },
		{ name: 'exercise', icon: 'exercise' },
		{ name: 'graph', icon: 'graph' },
		{ name: 'social', icon: 'social' }
	];
</script>

<div id="background" class="flex h-screen w-screen items-center justify-center bg-slate-50">
	<div
		id="layout-container"
		class="max-h-160 relative flex h-screen w-full max-w-sm flex-col border bg-slate-100"
	>
		<slot />
		<div
			id="navigation-background"
			class="bottom-0 flex h-20 w-full justify-center bg-gray-100 pb-2 pt-1"
		>
			<div
				id="navigation-container"
				class="flex h-14 w-full max-w-xs items-center justify-center rounded-lg bg-white drop-shadow-md"
			>
				{#each tabs as tab (tab.name)}
					<div
						class={`flex h-full w-full flex-1 items-center justify-center rounded-lg hover:cursor-pointer ${
							tab.name === 'exercise'
								? 'bg-primary hover:bg-primary-dark'
								: 'bg-white hover:bg-gray-50'
						}`}
					>
						<Icon icon={tab.icon} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
