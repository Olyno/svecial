<script>
	let isActive = false;

	async function update() {
		isActive = !isActive;
	}
</script>

<style>
	.is-blue {background-color: #3f51b5 !important}
	a.navbar-item:hover {background-color: rgb(51, 49, 49) !important}
	/*a.navbar-item {color: #fff !important;}
	.navbar-dropdown {background-color: #3f51b5 !important}*/
</style>

<nav class="navbar is-blue is-dark">
	<div class="navbar-brand">
		<a href="#!" on:click={update} class={isActive ? "navbar-burger burger is-active" : "navbar-burger burger"}>
			<span></span>
			<span></span>
			<span></span>
		</a>
	</div>
	<div class={isActive ? "navbar-menu is-active" : "navbar-menu"} id="navbar">
		<div class="navbar-start">
			<a href="/" class="navbar-item">Home</a>
			<a href="/components" class="navbar-item">Components</a>
		</div>
		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a href="https://github.com/Olyno/svecial" target="_blank" rel="noopener noreferrer" class="button">
						<span><i class="fab fa-github"></i></span>
						<span style="margin-left: 5px;">Github</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>