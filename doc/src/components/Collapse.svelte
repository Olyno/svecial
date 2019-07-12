<script>
	import * as transitions from 'svelte/transition'
	export let open = false;
	export let animation = 'slide';
	let _animation = transitions[animation]
	$: _animation = typeof animation === 'function' ? animation : transitions[animation]
	function toggle() {
		open = !open
	}
</script>

<div class="collapse">
	<div class="collapse-trigger" on:click={toggle}>
		<slot name="trigger" />
	</div>
	{#if open}
		<br>
		<div class="collapse-content" transition:_animation|local>
			<slot />
		</div>
	{/if}
</div>