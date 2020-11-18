'use strict';

const Storage = require('../src/Storage');

describe('Storage-js Library', function () {
    let storage;

    const TEST_KEY = 'foo';
    const TEST_VALUE = 'bar';

    beforeAll(function () {
        storage = new Storage();
        //console.log('Starting tests');
    });

    afterAll(function () {
        //console.log('done');
    });

    beforeEach(function () {
        //console.log('starting new test');
    });

    afterEach(function () {
        //console.log('test finished.');
        storage.delete(TEST_KEY);
    });

    //set
    describe('set', function () {
        it('success', function () {
            storage.set(TEST_KEY, TEST_VALUE);
            expect(storage.hasKey(TEST_KEY)).is(true);
        });
    })

    //get
    describe('get', function () {
        it('success', function () {
            storage.set(TEST_KEY, TEST_VALUE);

            let value = storage.get(TEST_KEY);
            expect(value).toEqual(TEST_VALUE);
        });
    })

    //haskey
    describe('hasKey', function () {
        it('success', function () {
            storage.set(TEST_KEY, TEST_VALUE);

            let hasKey = storage.hasKey(TEST_KEY);
            expect(hasKey).is(true);
        });
    })
});
