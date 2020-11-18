/**
 * @fileoverview Storage Helpers
 */

var localStorage = localStorage || {
    _store: [],
    setItem: function (key, value) {
        this._store[key] = value;
    },
    getItem: function (key) {
        return this._store[key];
    },
    removeItem: function (key) {
        let i = this._store.indexOf(key);
        if (i > -1) {
            this._store.splice(i, 1);
        }
    },
    clear: function () {
        this._store = [];
    }
};


class Storage {

    constructor() { }

    /**
     * @description Set value to storage wth key
     * @param {string} key 
     * @param {*} value 
     */
    set = function (key, value) {
        localStorage.setItem(key, value);
    }

    /**
     * @description Get Value from storage with key
     * @param {string} key
     * @returns {string} value from key
     */
    get = function (key) {
        let value = localStorage.getItem(key);
        if (typeof value === 'undefined') {
            value = null;
        }
        return value;
    }

    /**
     * @description Delete value from storage with key
     * @param {any} key
     * @returns {boolean} 
     */
    delete = function (key) {
        let removed = false;
        localStorage.removeItem(key);
        if (!this.hasKey(key)) {
            removed = true;
        }
        return removed;
    }

    /**
     * @description Check if key exists in storage
     * @param {string} key 
     */
    hasKey = function (key) {
        let value = this.get(key);
        let has = (value !== null);
        console.log('Storage.hasKey {key:' + key + ', value:' + value + ', hasKey:' + has + '}');
        return has;
    }

    /**
     * @description remove contents of localstorage
     */
    clear = function () {
        localStorage.clear();
    }
};

module.exports = Storage;