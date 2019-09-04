import FacebookButton from '../../src/components/FacebookButton.svelte';

describe('Facebook Button', () => {
	it('should show the facebook button', () => {
		const target = document.createElement('div');
		new FacebookButton({ target });
		expect(target.querySelector('.fb-login-button').classList.toString().split(' ').includes('fb-login-button')).toBe(true);
	})
})