import { factorial, factorialIterative } from '../algorithms/factorial';

describe('Factorial', () => {
  it('should return the factorial of a number', () => {
    expect(factorial(5)).toEqual(120);
  });

  it('should return the factorial of a number', () => {
    expect(factorialIterative(5)).toEqual(120);
  });
});
