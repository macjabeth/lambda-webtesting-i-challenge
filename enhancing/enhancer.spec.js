const enhancer = require('./enhancer.js');

describe('item repair', () => {
  const item = { name: 'repair', durability: 10, enhancement: 5 };

  it('restores durability to 100', () => {
    expect(enhancer.repair(item)).toHaveProperty('durability', 100);
  });
});

describe('item success', () => {
  const item = { name: 'success', durability: 5, enhancement: 10 };

  it('increments enhancement by 1', () => {
    expect(enhancer.succeed(item)).toHaveProperty('enhancement', 11);
  });

  it('does not change if current enhancement is 20', () => {
    item.enhancement = 20;
    expect(enhancer.succeed(item)).toEqual(item);
  });
});
