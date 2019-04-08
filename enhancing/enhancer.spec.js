const enhancer = require('./enhancer.js');

test('repair restores the durability to 100', () => {
  const expected = 100;
  const repair = enhancer.repair({
    name: 'durability test',
    durability: 10,
    enhancement: 5
  });

  expect(repair.durability).toBe(expected);
});
