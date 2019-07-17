<script>

	// Documentation available here: https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/
	
	import { onMount } from 'svelte';
	import GithubAuth from '../dist/oauth2/auth/GithubAuth';

	export let appId;
	export let secret;
	export let scopes = '';
	export let redirect = 'http://localhost:3000';
	export let color = 'dark';
	export let allow_signup = false;
	export let onLoginFailure = () => {console.log('Logged to github with failure!')};
	export let onLoginSuccess = () => {console.log('Logged to github with success!')};

	const clazz = `github-signin-button button is-${color}`;
	scopes = scopes.toLocaleLowerCase().replace(/\s/gmui, '');
	allow_signup = `${allow_signup}`;

	onMount(async () => {
		const auth = new GithubAuth('github-signin-button', {
			client_id: appId,
			client_secret: secret,
			scopes: scopes.split(','),
			redirect_uri: redirect
		})
		auth.init()
			.then(user => onLoginSuccess(user))
			.catch(error => onLoginFailure(error))
	})
	
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
</style>

<a href="#!" class={clazz}>
	<span class='icon'>
		<i class="fab fa-github"></i>
    </span>
    <span>Connexion</span>
</a>