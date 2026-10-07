function getTotalQuantity(items) {
  return items.reduce((total, item) => {
    const quantity = item?.quantity;
    return total + (typeof quantity === 'number' && Number.isFinite(quantity) ? quantity : 0);
  }, 0);
}

module.exports = { getTotalQuantity };
