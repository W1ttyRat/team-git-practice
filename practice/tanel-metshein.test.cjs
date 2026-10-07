const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidTitle } = require('./tanel-metshein.cjs');

test('isValidTitle returns true for valid titles', () => {
    assert.strictEqual(isValidTitle('Valid Title'), true);
});

test('isValidTitle returns false for too large titles', () => {
    assert.strictEqual(isValidTitle('A title that is longer than 80 characters and therefore invalid'), true);
});

test('isValidTitle boundary case: empty array', () => {
    assert.strictEqual(isValidTitle([]), false);
});