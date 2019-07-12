<style>
    .hero {
		background-color: #3f51b5 !important;
    }
    .hero-body {
		font-family: "Arial Black", Gadget, sans-serif;
    }
</style>

<div class="hero is-fullheight">
	<div class="hero-head">
		<slot name="hero-head" />
	</div>
    <div class="hero-body">
        <slot />
    </div>
    <div class="hero-foot">
		<slot name="hero-foot" />
	</div>
</div>