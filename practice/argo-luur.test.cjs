const test = require('node:test');
const assert = require('node:assert/strict');
const { getTotalQuantity } = require('./argo-luur.cjs');

test('sums numeric quantities from items', () => {
  const items = [
    { quantity: 2 },
    { quantity: 3.5 },
    { quantity: 4 },
  ];

  assert.equal(getTotalQuantity(items), 9.5);
});

test('ignores items with invalid quantity values', () => {
  const items = [
    { quantity: 2 },
    { quantity: '4' },
    {},
  ];

  assert.equal(getTotalQuantity(items), 2);
});

test('returns zero for an empty array', () => {
  assert.equal(getTotalQuantity([]), 0);
});