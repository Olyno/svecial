import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";
import json from "rollup-plugin-json";
import config from "sapper/config/rollup.js";
import includePaths from "rollup-plugin-includepaths";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode)
			}),
			string({
				include: "**/*.txt"
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true
			}),
			resolve(),
			commonjs(),
			includePaths({ paths: ["./src", "./", "./node_modules/smelte/src/"] }),

			!legacy &&
				babel({
					extensions: [".js", ".mjs", ".html", ".svelte"],
					exclude: ["node_modules/@babel/**"],
					plugins: [
						"@babel/plugin-syntax-dynamic-import",
						"@babel/plugin-proposal-object-rest-spread"
					]
				}),

			legacy &&
				babel({
					extensions: [".js", ".mjs", ".html", ".svelte"],
					runtimeHelpers: true,
					exclude: ["node_modules/@babel/**"],
					presets: [
						[
							"@babel/preset-env",
							{
								targets: "> 0.25%, ie >= 11, not dead"
							}
						]
					],
					plugins: [
						"@babel/plugin-syntax-dynamic-import",
						[
							"@babel/plugin-transform-runtime",
							{
								useESModules: true
							}
						]
					]
				}),

			!dev &&
				terser({
					module: true
				})
		]
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				"process.browser": false,
				"process.env.NODE_ENV": JSON.stringify(mode)
			}),
			json(),
			svelte({
				generate: "ssr",
				dev
			}),
			string({
				include: "**/*.txt"
			}),
			resolve(),
			includePaths({ paths: ["./src", "./", "./node_modules/smelte/src/"] }),
			commonjs()
		],
		external: [].concat(
			require("module").builtinModules ||
				Object.keys(process.binding("natives"))
		)
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		]
	}
};