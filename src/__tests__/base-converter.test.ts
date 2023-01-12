import { baseConverter } from '../algorithms/base-converter';

describe('Base converter', () => {
  it('should return empty string when base is invalid', () => {
    expect(baseConverter(100345, 1)).toBe('');
    expect(baseConverter(100345, 37)).toBe('');
  });

  it('should convert decimal to binary', () => {
    expect(baseConverter(100345, 2)).toBe('11000011111111001');
  });

  it('should convert decimal to octal', () => {
    expect(baseConverter(100345, 8)).toBe('303771');
  });

  it('should convert decimal to hexadecimal', () => {
    expect(baseConverter(100345, 16)).toBe('187F9');
  });

  it('should convert decimal to base 35', () => {
    expect(baseConverter(100345, 35)).toBe('2BW0');
  });
});
