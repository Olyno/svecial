import { storiesOf } from '@storybook/svelte';
import GithubButton from '../../src/components/GithubButton.svelte';

const config = require('../../src/config');
const stories = storiesOf('GithubButton', module);

stories.add('With default background', () => ({
	Component: GithubButton
}))

for (let color of config.colors) {
	stories.add(`With ${color} background`, () => ({
		Component: GithubButton,
		props: {
			color
		}
	}))	
}