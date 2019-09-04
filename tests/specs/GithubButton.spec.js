import GithubButton from '../../src/components/GithubButton.svelte';

describe('Github Button', () => {

	it('should show the github button', () => {
		const target = document.createElement('div');
		new GithubButton({ target });
		expect(target.getElementsByTagName('span')[1].innerHTML.replace(/\s/gmui, '')).toBe('Connexion');
	})

	it('should have a dark background', () => {
		const target = document.createElement('div');
		new GithubButton({ target });
		expect(target.getElementsByTagName('a')[0].classList.toString().split(' ').includes('is-dark')).toBe(true);
	})

})