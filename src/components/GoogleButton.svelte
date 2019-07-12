<script>

	// Documentation available here: https://developers.google.com/identity/sign-in/web/reference
	
	import { onMount } from 'svelte';

	export let appId;
	export let scopes = 'profile'; // Seperated with a comma
	export let width = 140;
	export let height = 40;
	export let longTitle = false;
	export let theme = 'light';
	export let isFlex = false;
	export let onLoginFailure = () => {console.log('Logged to google with failure!')};
	export let onLoginSuccess = () => {console.log('Logged to google with success!')};

	scopes = scopes.toLocaleLowerCase().replace(/\s/gmui, '');

	async function update(element, style, value) {
		element.style[style] = value;
	}

	onMount(async () => {
		const script = document.createElement("script");
		script.src = "https://apis.google.com/js/platform.js";
		script.onload = () => {
			gapi.load('auth2', () => {
				const GoogleAuth = gapi.auth2.init({
					client_id: `${appId}.apps.googleusercontent.com`,
					scope: scopes,
					fetch_basic_profile: true
				})
				const googleButtons = document.getElementsByClassName('google-signin-button');
				for (let i = 0; i < googleButtons.length; i ++) {
					googleButtons[i].id = `google-signin-button${i}`;
					gapi.signin2.render(`google-signin-button${i}`, {
						scope: scopes,
						width,
						height,
						longtitle: longTitle,
						theme,
						onsuccess: onLoginSuccess,
						onfailure: onLoginFailure
					})
					if (isFlex) {
						update(googleButtons[i], 'display', 'flex');
						update(googleButtons[i], 'alignItems', 'center');
						update(googleButtons[i], 'justifyContent', 'center');
					}
				}
			})
		}

		document.getElementsByTagName('head')[0].appendChild(script);

	})
	
</script>

<div class='google-signin-button'></div>