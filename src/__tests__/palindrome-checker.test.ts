import { palindromeChecker } from '../algorithms/palindrome-checker';

describe('Palindrome checker', () => {
  it('should return true for a palindrome', () => {
    expect(palindromeChecker('madam')).toBeTruthy();
  });

  it('should return false for a non-palindrome', () => {
    expect(palindromeChecker('hello')).toBeFalsy();
  });
});
