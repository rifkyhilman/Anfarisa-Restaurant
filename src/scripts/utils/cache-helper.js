import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames.filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches
        .delete(filteredName));
  },
  async revalidateCache(request) {
    const cache = await this._openCache();
    const response = await cache.match(request);
    if (response) {
      return response;
    }
    const networkResponse = await this._fetchRequest(request);
    await cache.put(request, networkResponse.clone());
    return networkResponse;
  },
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },
  async _fetchRequest(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    await this._addCache(request, response.clone());
    return response;
  },
  async _addCache(request, response) {
    const cache = await this._openCache();
    await cache.put(request, response);
  },
};
export default CacheHelper;
