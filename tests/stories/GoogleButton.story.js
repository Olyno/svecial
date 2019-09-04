import { storiesOf } from '@storybook/svelte';
import GoogleButton from '../../src/components/GoogleButton.svelte';

const Component = GoogleButton;

storiesOf('GoogleButton', module)
	.add('With default background', () => ({
		Component
	}))