import { storiesOf } from '@storybook/svelte';
import BitbucketButton from '../../src/components/BitbucketButton.svelte';

const config = require('../../src/config');
const stories = storiesOf('BitbucketButton', module);

stories.add('With default background', () => ({
	Component: BitbucketButton
}))

for (let color of config.colors) {
	stories.add(`With ${color} background`, () => ({
		Component: BitbucketButton,
		props: {
			color
		}
	}))	
}