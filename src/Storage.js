/**
 * @fileoverview Storage Helpers
 */

class Storage {

    /**
     * @description Set value to storage wth key
     * @param {string} key 
     * @param {*} value 
     */
    set = function (key, value) {
        localStorage.setItem(key, value);
    },
    /**
     * @description Get Value from storage with key
     * @param {string} key 
     */
    get = function (key) {
        return localStorage.getItem(key);
    },
    /**
     * @description Check if key exists in storage
     * @param {string} key 
     */
    hasKey = function (key) {
        return (this.get(key) !== null);
    }
};

module.exports = { Storage };