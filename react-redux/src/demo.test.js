function sum(...args) {
  return args.reduce((a, b) => a + b);
}

describe('the sum function', () => {
  it('works for any number of arguments', () => {
    let result = sum(1, 2, 3, 4);
    expect(result).toBe(10);
    result = sum(-1, 2, 0, 4, 1);
    expect(result).toBe(6);
  });
});
