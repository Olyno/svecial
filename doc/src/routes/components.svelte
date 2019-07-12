<script>
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Button from '../components/Button.svelte'
	import GoogleButton from '../../../src/components/GoogleButton.svelte'
	import DiscordButton from '../../../src/components/DiscordButton.svelte'
	import FacebookButton from '../../../src/components/FacebookButton.svelte'

	import { onMount } from 'svelte'
	import { GoogleButtonInfos, FacebookButtonInfos, DiscordButtonInfos } from './_buttonsInfos';

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
			
			<div class="columns is-centered">
				<div class="column">
					<button class="button is-warning" open-modal="Google Button">Google Button</button>
					<Button name="Google Button" props={GoogleButtonInfos}>
						<pre slot="pattern" class="pattern">&lt;GoogleButton appId="my app id" theme="dark" /></pre>
						<GoogleButton theme='dark' isFlex=true />
					</Button>
				</div>
				<div class="column">
					<button class="button is-warning" open-modal="Facebook Button">Facebook Button</button>
					<Button name="Facebook Button" props={FacebookButtonInfos}>
						<pre slot="pattern" class="pattern">&lt;FacebookButton appId="my app id" /></pre>
						<FacebookButton appId="1000227316855149" />
					</Button>
				</div>
				<div class="column">
					<button class="button is-warning" open-modal="Discord Button">Discord Button</button>
					<Button name="Discord Button" props={DiscordButtonInfos}>
						<pre slot="pattern" class="pattern">&lt;DiscordButton appId="my app id" /></pre>
						<DiscordButton />
					</Button>
				</div>
			</div>
			
		</div>

	</Hero>

</section>

