const yargs = require('yargs');

const argv = yargs
	.option('port', {
		alias: 'p',
		description: 'Port to run the caching proxy server',
		type: 'number',
	})
	.option('origin', {
		alias: 'o',
		description: 'Origin server URL to forward requests',
		type: 'string',
	})
	.option('clear-cache', {
		description: 'Clear the cache',
		type: 'boolean',
	})
	.help()
	.argv;

module.exports = argv;