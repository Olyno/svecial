<script>
	import GoogleButton from '../../../src/components/GoogleButton.svelte'
	import DiscordButton from '../../../src/components/DiscordButton.svelte'
	import FacebookButton from '../../../src/components/FacebookButton.svelte'

	import Collapse from '../components/Collapse.svelte'
	import Navbar from '../components/Navbar.svelte'
	import Hero from '../components/Hero.svelte'
</script>

<style>
	h1 {color: #fff}
</style>

<section>

	<Hero>
	
		<div slot="hero-head">
			<Navbar />
		</div>

		<div class="container">
			<div class="has-text-centered">
				<h1 class="title">Svecial</h1>
				<h1 class="subtitle">Be connected everywhere</h1>
				<code>npm i svecial</code>
				<br><br>
				<article class="message is-dark">
					<div class="message-header">
						<p>What's Svecial?</p>
					</div>
					<div class="message-body">
						<p>Svecial is a Svelte librairy with social media buttons and OAuth2 buttons. Simple to use, just put the component in your code, customize it and use it!</p>
					</div>
				</article>
				<br>
				<article class="message is-dark">
					<div class="message-header">
						<p>Svecial do all the OAuth 2 support?</p>
					</div>
					<div class="message-body">
						<p>No, Svecial do only the render of the target button and give you a response depend of which button you use</p>
					</div>
				</article>
			</div>
		</div>

	</Hero>

</section>

