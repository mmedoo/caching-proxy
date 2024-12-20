const argv = require('./args');
const { clearCache } = require('./storage');

if (argv.clearCache) {
	clearCache();
	console.log('Cache cleared.');
	return;
}

const { port, origin } = argv;

if (!port || !origin) {
	console.error('Please provide both --port and --origin arguments.');
	return;
}

const express = require('express');
const handleRequest = require('./handleRequest');

const app = express();

app.use(handleRequest);

app.listen(port, () => {
	console.log(`Caching proxy server running on http://localhost:${port}`);
	console.log(`Forwarding requests to: ${origin}`);
});
