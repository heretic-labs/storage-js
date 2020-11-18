'use strict';

const Storage = require('../src/Storage');

describe('Storage-js Library', function () {
    // let storage = new Storage();

    const TEST_KEY = 'foo';
    const TEST_KEY2 = 'foo2';
    const TEST_VALUE = 'bar';

    var storage;

    beforeAll(function () {
        //console.log('Starting tests');
        storage = new Storage();
    });

    afterAll(function () {
        //console.log('done');
    });

    beforeEach(function () {
        //console.log('starting new test');
    });

    afterEach(function () {
        //console.log('test finished.');
    });

    //set
    describe('set', function () {
        it('success', function () {
            //storage = new Storage();
            storage.set(TEST_KEY, TEST_VALUE);
            let isSet = storage.hasKey(TEST_KEY);
            expect(isSet).toBe(true);
        });
    })

    //get
    describe('get', function () {
        it('success', function () {
            //storage = new Storage();
            storage.set(TEST_KEY, TEST_VALUE);
            let value = storage.get(TEST_KEY);
            expect(TEST_VALUE).toEqual(value);
        });
    })

    //haskey
    describe('haskey', function () {
        it('success', function () {
            //storage = new Storage();
            storage.set(TEST_KEY, TEST_VALUE);
            let isSet = storage.hasKey(TEST_KEY);
            expect(isSet).toBe(true);
        });

        it('fail-not set', function () {
            //storage = new Storage();
            let isSet = storage.hasKey(TEST_KEY);
            expect(isSet).toBe(false);
        });

        it('fail-wrong key', function () {
            //storage = new Storage();
            storage.set(TEST_KEY, TEST_VALUE);
            let isSet = storage.hasKey(TEST_KEY2);
            expect(isSet).toBe(false);
        });
    })
});
