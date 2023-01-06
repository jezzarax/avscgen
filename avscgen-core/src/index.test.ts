import {sumfn} from '.';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sumfn(1, 2)).toBe(3);
  });
});