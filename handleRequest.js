const { getAndCacheData, checkHit } = require('./storage');
const { origin } = require('./args');

async function handleRequest(req, res) {
			
	const cacheKey = req.originalUrl;

	// Check if the response is cached
	const dataCached = checkHit(cacheKey);
	
	if (dataCached) {
		console.log(`Cache hit for: ${cacheKey}`);
		res.set('X-Cache', 'HIT');
		return res.send(dataCached);
	}

	try {
		
		console.log(`Cache miss for: ${cacheKey}`);
		
		const data = await getAndCacheData(cacheKey, origin);
		
		res.set('X-Cache', 'MISS');
		res.send(data); // Send the response to the client
		
	} catch (error) {
		console.log(error);
		res.status(500).send('Error forwarding request to origin server.');
	}
}

module.exports = handleRequest;