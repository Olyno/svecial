import DiscordButton from '../../src/components/DiscordButton.svelte';

describe('Discord Button', () => {

	it('should show the discord button', () => {
		const target = document.createElement('div');
		new DiscordButton({ target });
		expect(target.getElementsByTagName('span')[1].innerHTML.replace(/\s/gmui, '')).toBe('Connexion');
	})

	it('should have a dark background', () => {
		const target = document.createElement('div');
		new DiscordButton({ target });
		expect(target.getElementsByTagName('a')[0].classList.toString().split(' ').includes('is-dark')).toBe(true);
	})

})