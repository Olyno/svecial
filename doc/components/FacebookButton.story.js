import { storiesOf } from '@storybook/svelte';
import FacebookButton from '../../src/components/FacebookButton.svelte';

const Component = FacebookButton;

storiesOf('FacebookButton', module)
	.add('With default background', () => ({
		Component,
		props: {
			appId: '1000227316855149'
		}
	}))