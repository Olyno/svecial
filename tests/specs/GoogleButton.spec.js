import GoogleButton from '../../src/components/GoogleButton.svelte';

describe('Google Button', () => {

	it('should show the google button', () => {
		const target = document.createElement('div');
		new GoogleButton({ target });
		expect(target.querySelector('.google-signin-button').classList.toString().split(' ').includes('google-signin-button')).toBe(true);
	})

})