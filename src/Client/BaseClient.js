const { EventEmitter } = require('events');
const { apiKey } = require('../Utils/Constants');

/**
 * The Base of the Client to interact with the NASA APIs
 * @extends EventEmitter
 */
class BaseClient extends EventEmitter {

    /**
     * The constructor of this BaseClient
     * @param {apiKey} apiKey A key to get an advance access to the API, by default it will use the DEMO_KEY. 
     * Get your own key at https://api.nasa.gov/index.html#signUp
     */
    constructor(apiKey) {
        super();

        /**
         * The API key to use by the API
         * @type {apiKey}
         * @default DEMO_KEY
         */
        this.apiKey = apiKey ?? 'DEMO_KEY';
    }

};

//Export the class
module.exports = BaseClient;