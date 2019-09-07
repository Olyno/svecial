<script>

	import { onMount } from 'svelte';
	import { BitbucketAuth } from 'oaun';

	export let appId;
	export let secret;
	export let scopes = 'account';
	export let redirect = 'http://localhost:3000';
	export let color = 'blue';
	export let label = 'Connexion';
	export let onLoginFailure = () => {console.log('Logged to bitbucket with failure!')};
	export let onLoginSuccess = () => {console.log('Logged to bitbucket with success!')};

	let auth;
	const clazz = `bitbucket-signin-button button is-${color}`;
	scopes = scopes.toLocaleLowerCase().replace(/\s/gmui, '');

	onMount(async () => {
		auth = new BitbucketAuth('bitbucket-signin-button', {
			client_id: appId,
			client_secret: secret,
			scopes: scopes.split(','),
			redirect_uri: redirect
		})
	})

	async function login(e) {
		e.preventDefault();
		auth.login()
			.then(user => onLoginSuccess(user))
			.catch(error => onLoginFailure(error))
	}
	
</script>

<style>
	.is-black { background-color: black; color: white; }
	.is-light { background-color: white }
	.is-pink { background-color: pink }
	.is-yellow { background-color: yellow }
	.is-aqua { background-color: aqua }
	.is-lightblue { background-color: lightblue }
	.is-lightgreen { background-color: lightgreen }
	.is-brown { background-color: brown; color: white; }
	.is-blue { background-color: blue; color: white; }
	.is-gray { background-color: gray; color: white; }
	.is-green { background-color: green; color: white; }
	.is-purple { background-color: purple; color: white; }
	.is-red { background-color: red; color: white; }
</style>

<a href="#!" class={clazz} on:click={login}>
	<span class='icon'>
		<i class="fab fa-bitbucket"></i>
    </span>
    <span>{label}</span>
</a>