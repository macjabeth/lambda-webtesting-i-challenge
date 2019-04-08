const enhancer = require('./enhancer.js');

describe('item repair', () => {
  it('restores durability to 100', () => {
    expect(enhancer.repair({ durability: 50 })).toHaveProperty(
      'durability',
      100
    );
  });
});

describe('item success', () => {
  it('increments enhancement by 1', () => {
    expect(enhancer.succeed({ enhancement: 10 })).toHaveProperty(
      'enhancement',
      11
    );
  });

  it('does not change if current enhancement is 20', () => {
    expect(enhancer.succeed({ enhancement: 20 })).toHaveProperty(
      'enhancement',
      20
    );
  });
});

describe('item failure', () => {
  it('decreases durability by 5 if enhancement is less than 15', () => {
    expect(enhancer.fail({ durability: 50, enhancement: 10 })).toHaveProperty(
      'durability',
      45
    );
  });

  it('decreases durability by 10 if enhancement is greater or equal to 15', () => {
    expect(enhancer.fail({ durability: 50, enhancement: 15 })).toHaveProperty(
      'durability',
      40
    );
  });
});
