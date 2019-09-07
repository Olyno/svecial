import { storiesOf } from '@storybook/svelte';
import DiscordButton from '../../src/components/DiscordButton.svelte';

const config = require('../../src/config');
const stories = storiesOf('DiscordButton', module);

stories.add('With default background', () => ({
	Component: DiscordButton
}))

for (let color of config.colors) {
	stories.add(`With ${color} background`, () => ({
		Component: DiscordButton,
		props: {
			color
		}
	}))	
}