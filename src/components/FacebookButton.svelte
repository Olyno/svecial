<script>

	// Documentation available here: https://developers.facebook.com/docs/javascript/reference/v3.3

	import { onMount } from 'svelte';

	export let appId;
	export let type = "login_with"; // or "continue_with"
	export let size = "large"; // or "medium", "small"
	export let scopes = "public_profile"; // Seperated with a comma
	export let audience = "friends"; // or "only_me", "everyone"
	export let debug = false;
	export let language = "en_US";
	export let useContinueAs = false;
	export let autoLogoutButton = true;
	export let onLoginSuccess = () => {console.log("Logged to facebook with success!")};
	export let onLoginFailure = () => {console.log("Logged to facebook with failure!")};
	export let onStatusChange = () => {console.log("Facebook status changed!")};

	function statusChangeCallback(response) {
		if (response.status === 'connected') {
			onLoginSuccess(response);
		} else {
			onLoginFailure(response);
		}
	}

	onMount(async () => {
		const script = document.createElement("script");
		script.src = `https://connect.facebook.net/${language}/sdk.js`;
		if (debug) script.src += "/debug.js";
		script.onload = () => {
			window.fbAsyncInit = () => {
				FB.init({
					appId,
					cookie: true,
					xfbml: true,
					version: 'v3.3'
				});
			}
		};

		document.getElementsByTagName('head')[0].appendChild(script);

	});
	
</script>

<div
    class="fb-login-button"
	data-size={size}
	data-onlogin={onLoginSuccess}
	data-auto-logout-link={autoLogoutButton}
	data-default-audience={audience}
	data-use-continue-as={useContinueAs}
	data-button-type={type}
	data-scope={scopes.replace(/\s/gmui, '')}
></div>