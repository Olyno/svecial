import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import Index from '../src/pages/Index.svelte';

const Component = Index;

storiesOf('Welcome', module)
	.add('Welcome', () => ({
		Component
	}))