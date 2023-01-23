import { fibonacci, fibonacciIterative } from '../algorithms/fibonacci';

describe('Fibonacci', () => {
  it('should return 0 when n = 0', () => {
    expect(fibonacciIterative(0)).toEqual(0);
  });

  it('should return 1 when n = 1', () => {
    expect(fibonacciIterative(1)).toEqual(1);
  });

  it('should return 1 when n = 2', () => {
    expect(fibonacciIterative(2)).toEqual(1);
  });

  it('should return 2 when n = 3', () => {
    expect(fibonacci(3)).toEqual(2);
  });

  it('should return 3 when n = 4', () => {
    expect(fibonacci(4)).toEqual(3);
  });
});
