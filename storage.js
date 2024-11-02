const axios = require('axios');

let cache = {};

let keyQueue = [];

const cacheSize = 50;

function cacheData(key, data) {
	cache[key] = data;
	keyQueue.push(key);
	if (keyQueue.length > cacheSize) {
		delete cache[keyQueue[0]];
		keyQueue.splice(0,1);
	}
}

function clearCache() {
	cache = {};
}

function checkHit(cacheKey) {
	return cache[cacheKey];
}

async function getAndCacheData(cacheKey, ORIGIN) {
	try {
		const response = await axios.get(`${ORIGIN}${cacheKey}`);
		cacheData(cacheKey, response.data)
		return response.data;
	} catch (error) {
		throw error;
	}
}



module.exports = { clearCache, checkHit, getAndCacheData };