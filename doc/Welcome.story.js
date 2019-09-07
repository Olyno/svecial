import { storiesOf } from '@storybook/svelte';
import Index from '../src/pages/Index.svelte';

const Component = Index;

storiesOf('Welcome', module)
	.add('Welcome', () => ({
		Component
	}))