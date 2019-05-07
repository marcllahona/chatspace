/**
 * Object to provide flags for Apollo Cache Policy. Defaults to CACHE_FIRST
 */
export const FETCH_POLICY = {
  CACHE_FIRST: 'cache-first',
  CACHE_AND_NETWORK: 'cache-and-network',
  CACHE_ONLY: 'cache-only',
  // Saves the response to the cache for later use, bypassing the reading and forcing a network request.
  NETWORK_ONLY: 'network-only',
  // Does not read, nor does it write to the cache with the response.
  NO_CACHE: 'no-cache'
};
