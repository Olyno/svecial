import { storiesOf } from '@storybook/svelte';
import BitbucketButton from '../../src/components/BitbucketButton.svelte';

const Component = BitbucketButton;

storiesOf('BitbucketButton', module)
	.add('With default background', () => ({
		Component
	}))
	.add('With dark background', () => ({
		Component,
		props: {
			color: 'dark'
		}
	}))
	.add('With red background', () => ({
		Component,
		props: {
			color: 'red'
		}
	}))
	.add('With blue background', () => ({
		Component,
		props: {
			color: 'blue'
		}
	}))
	.add('With brown background', () => ({
		Component,
		props: {
			color: 'brown'
		}
	}))
	.add('With yellow background', () => ({
		Component,
		props: {
			color: 'yellow'
		}
	}))
	.add('With green background', () => ({
		Component,
		props: {
			color: 'green'
		}
	}))
	.add('With pink background', () => ({
		Component,
		props: {
			color: 'pink'
		}
	}))
	.add('With aqua background', () => ({
		Component,
		props: {
			color: 'aqua'
		}
	}))
	.add('With lightblue background', () => ({
		Component,
		props: {
			color: 'lightblue'
		}
	}))
	.add('With lightgreen background', () => ({
		Component,
		props: {
			color: 'lightgreen'
		}
	}))
	.add('With gray background', () => ({
		Component,
		props: {
			color: 'gray'
		}
	}))