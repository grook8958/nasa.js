function createEnum(keys) {
    const obj = {};
    for (const [index, key] of keys.entries()) {
      if (key === null) continue;
      obj[key] = index;
      obj[index] = key;
    }
    return obj;
}

/**
 * @typedef {Object} Constants Constants that can be used in an enum or object-like way
 * @property {apiKey} apiKey A key to get an advance access to the API, by default it will use the DEMO_KEY. 
 * Get your own key at https://api.nasa.gov/index.html#signUp
 */


/**
 * @typedef {String} apiKey A key to get an advance access to the API, by default it will use the DEMO_KEY. 
 * Get your own key at https://api.nasa.gov/index.html#signUp
 */