const esbuild = require('esbuild');
const esbuildVue = require('esbuild-vue');
const globby = require('globby');
const chalk = require('chalk');
const _ = console.log;

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/bundle.vue.js',
			eleventyExcludeFromCollections: true,
		};
	}

	async render() {
		_(chalk.blue(`🙂 Bundling Vue components`));

		let output = [];

		let result = await esbuild.build({
			bundle: true,
			minify: true,
			entryPoints: ['./assets/js/vue/main.js'],
			write: false,
			plugins: [esbuildVue()],
			outdir: '<stdout>',
			define: {
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			},
		});

		for (let out of result.outputFiles) {
			output.push(new TextDecoder('utf-8').decode(out.contents));
		}

		return output.join('\n');
	}
};
