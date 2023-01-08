import {Calculator} from './calculator';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect((new Calculator()).add(1, 2)).toBe(3);
  });
});