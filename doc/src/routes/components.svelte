<script>
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Button from '../components/Button.svelte'

	import { onMount } from 'svelte'
	import { GoogleButton, DiscordButton, FacebookButton, GithubButton } from 'svecial'
	import { GoogleButtonInfos, FacebookButtonInfos, DiscordButtonInfos, GithubButtonInfos } from './_buttonsInfos';

	let elements;
	let openModal;
	let closeModal;
	let modals;

	async function putColor() {
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			let replacement = element.innerHTML;
			const buttonName = replacement.match(/&lt;\w+\s+/gmui)[0];
			const matches = replacement.match(/\w+=/gmui);
			replacement = replacement.replace(buttonName, `<span style="color: #62b8f5">${buttonName}</span>`);
			matches.forEach(async match => {
				replacement = replacement.replace(match, `<span style="color: #ffd53d">${match}</span>`);
			}) 
			
			element.innerHTML = replacement;
		}
	}

	async function putListeners() {
		for (let i = 0; i < openModal.length; i++) {
			openModal[i].addEventListener('click', () => {
				for (let i2 = 0; i2 < modals.length; i2++) {
					if (modals[i2].getAttribute('modal') === openModal[i].getAttribute('open-modal')) {
						modals[i2].classList.remove('is-active');
						modals[i2].classList.add('is-active');
					}
				}
			})
		}

		for (let i = 0; i < closeModal.length; i++) {
			closeModal[i].addEventListener('click', () => {
				for (let i2 = 0; i2 < modals.length; i2++) {
					if (modals[i2].getAttribute('modal') === closeModal[i].getAttribute('close-modal')) {
						modals[i2].classList.remove('is-active');
					}
				}
			})
		}
	}

	onMount(async () => {
		elements = document.getElementsByClassName('pattern');
		openModal = document.querySelectorAll('[open-modal]');
		closeModal = document.querySelectorAll('[close-modal]');
		modals = document.querySelectorAll('[modal]');
		putColor();
		putListeners();
	})

</script>

<style>
	h1 {color: #fff}
	.pattern {
		background-color: #39393a;
		color: #fff;
	}
</style>

<section>
	<Hero>
	
		<div slot="hero-head">
			<Navbar />
		</div>

		<div class="container has-text-centered">

			<h1 class="title">Components</h1>
			<br><br>
			<h1 class="title">Any button doesn't load? Check your cookies and accept them!</h1>
			<br><br>
			
			<div class="columns is-centered">
				<div class="column">
					<button class="button is-warning" open-modal="Google Button">Google Button</button>
					<Button name="Google Button" props={GoogleButtonInfos} clazz="google-signin-button">
						<pre slot="pattern" class="pattern">&lt;GoogleButton appId="my app id" theme="dark" /></pre>
						<GoogleButton theme='dark' isFlex=true />
					</Button>
				</div>
				<div class="column">
					<button class="button is-warning" open-modal="Facebook Button">Facebook Button</button>
					<Button name="Facebook Button" props={FacebookButtonInfos} clazz="fb-login-button">
						<pre slot="pattern" class="pattern">&lt;FacebookButton appId="my app id" /></pre>
						<FacebookButton appId="1000227316855149" />
					</Button>
				</div>
				<div class="column">
					<button class="button is-warning" open-modal="Discord Button">Discord Button</button>
					<Button name="Discord Button" props={DiscordButtonInfos} clazz="discord-signin-button button">
						<pre slot="pattern" class="pattern">&lt;DiscordButton appId="my app id" secret="my secret" /></pre>
						<DiscordButton appId="598678534596198410" secret="WhTsZmD2hRWZ1LOSlq7MJ-XS8bKv9Kmk" redirect="http://localhost:3000/svecial/components" />
					</Button>
				</div>
			</div>

			<div class="columns is-centered">
				<div class="column">
					<button class="button is-warning" open-modal="Github Button">Github Button</button>
					<Button name="Github Button" props={GithubButtonInfos} clazz="github-signin-button button">
						<pre slot="pattern" class="pattern">&lt;Github appId="my app id" secret="my secret" /></pre>
						<GithubButton appId="Iv1.89655f6cc09d9835" secret="7d2f500284dc57b5ba9d161916eb04f97a137ee4" redirect="https://olyno.github.io/svecial/components/"
						
							onLoginFailure={(error) => {
								console.log(error)
							} }

						 />
					</Button>
				</div>
			</div>
			
		</div>

	</Hero>

</section>

