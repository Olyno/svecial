<script>
    import Modal from './Modal.svelte'

	export let name;
	export let props;
    
</script>

<style>
	.parameter {
		color: deepskyblue
	}
</style>

<Modal {name}>
	<div slot="header">
		<p class="modal-card-title">{name}</p>
	</div>
	<div slot="body">
		<div class="columns">
			<div class="column">
				<slot />
			</div>
			<div class="column">
				<slot name="pattern" />
			</div>
		</div>
        <br>
        <h1 class="title">API</h1>
        <br>
		<table class="table is-striped is-fullwidth is-hoverable">
			<thead>
				<tr>
					<th>Props</th>
					<th>Description</th>
					<th>Type</th>
					<th>Values</th>
					<th>Default Value</th>
				</tr>
			</thead>
			<tbody>
				{#each props as p}
					<tr>
						<td class="parameter">{p.props}</td>
						<td>{p.description}</td>
						<td>{p.type}</td>
						<td><code>{p.values.join(', ')}</code></td>
						<td><code>{p.default}</code></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div slot="footer">
		<button class="button is-info" close-modal={name}>Close</button>
	</div>
</Modal>