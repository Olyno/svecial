import { configure, addParameters } from '@storybook/svelte';
import { themes } from '@storybook/theming';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

function loadStories() {
	requireAll(require.context('../doc', true, /\.story\.js?$/));
}

addParameters({
	options: {
		theme: themes.dark,
	}
})

configure(loadStories, module);