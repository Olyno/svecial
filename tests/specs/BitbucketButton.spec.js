import BitbucketButton from '../../src/components/BitbucketButton.svelte';

describe('Bitbucket Button', () => {

	it('should show the bitbucket button', () => {
		const target = document.createElement('div');
		new BitbucketButton({ target });
		expect(target.getElementsByTagName('span')[1].innerHTML.replace(/\s/gmui, '')).toBe('Connexion');
	})


	it('should have a blue background', () => {
		const target = document.createElement('div');
		new BitbucketButton({ target });
		expect(target.getElementsByTagName('a')[0].classList.toString().split(' ').includes('is-blue')).toBe(true);
	})

})