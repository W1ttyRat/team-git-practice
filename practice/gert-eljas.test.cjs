const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidMinutes } = require('./gert-eljas.cjs');

test('accepts a normal number of minutes', () => {
  assert.equal(isValidMinutes(60), true);
});

test('rejects an invalid value', () => {
  assert.equal(isValidMinutes(0), false);
});

test('accepts the maximum allowed value', () => {
  assert.equal(isValidMinutes(180), true);
});