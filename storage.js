const axios = require('axios');

let cache = {};

function clearCache() {
	cache = {};
	console.log('Cache cleared.');
}

function checkHit(cacheKey) {
	if (cache[cacheKey]) {
		console.log(`Cache hit for: ${cacheKey}`);
		return cache[cacheKey];
	}
	return null;
}

async function getAndCacheData(cacheKey, ORIGIN) {
	try {
		const response = await axios.get(`${ORIGIN}${cacheKey}`);
		cache[cacheKey] = response.data; // Cache the response
		return response.data;
	} catch (error) {
		throw error;
	}
}

module.exports = { clearCache, checkHit, getAndCacheData };