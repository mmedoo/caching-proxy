# Intro

### Caching Proxy CLI that uses LRU eviction.

# Usage:

- **Run the following command with the following arguments to start listening:**
	```bash
	node index.js --port 3000 --origin https://dummyjson.com
	```
	**where `origin` is where missed requests will be forwarded.**

- **Run the following command to clear cache:**
	```bash
	node index.js --clear-cache
	```


- **Replace methods in `storage.js` file with your cache server configurations.**

# Reference
https://roadmap.sh/projects/caching-server
