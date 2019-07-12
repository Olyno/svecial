<script>
	export let name;
</script>

<div class="modal" modal={name}>
	<div class="modal-background"></div>
	<div class="modal-card">
		<header class="modal-card-head">
			<slot name="header" />
		</header>
		<section class="modal-card-body">
			<slot name="body" />
		</section>
		<footer class="modal-card-foot">
			<slot name="footer" />
		</footer>
	</div>
</div>