import svelte from 'rollup-plugin-svelte';
import common from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'dist/compiled.js'
	},
	plugins: [
		svelte(),
		common(),
		resolve()
	]
};
