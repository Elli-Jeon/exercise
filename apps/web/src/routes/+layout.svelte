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
	<div id="layout-container" class="max-h-240 relative h-screen max-w-xl border bg-slate-100">
		<slot />
		<div id="navigation-background" class="absolute bottom-0 flex h-20 w-full justify-center pb-3">
			<div
				id="navigation-container"
				class="flex h-16 w-full max-w-sm items-center justify-center rounded-lg bg-white"
			>
				{#each tabs as tab (tab.name)}
					<div
						class={`flex h-full w-full flex-1 items-center justify-center rounded-lg hover:cursor-pointer ${
							tab.name === 'exercise'
								? 'bg-blue-600 hover:bg-blue-700'
								: 'bg-white hover:bg-slate-50'
						}`}
					>
						<Icon icon={tab.icon} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
