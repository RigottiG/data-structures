import { Dictionary } from '../structures/dictionary';

let dictionary: Dictionary<number>;

describe('Dictionary', () => {
  beforeEach(() => {
    dictionary = new Dictionary<number>();
  });

  it('should set a key value pair', () => {
    dictionary.set('key', 1);
    expect(dictionary.hasKey('key')).toBeTruthy();
  });

  it('should get a value by key', () => {
    dictionary.set('key', 1);
    expect(dictionary.get('key')).toBe(1);
  });

  it('should remove a value by key', () => {
    dictionary.set('key', 1);
    expect(dictionary.remove('key')).toBeTruthy();
    expect(dictionary.hasKey('key')).toBeFalsy();
  });

  it('should return undefined if key does not exist', () => {
    expect(dictionary.get('key')).toBeUndefined();
  });

  it('should return false if key does not exist', () => {
    expect(dictionary.remove('key')).toBeFalsy();
  });

  it('should return false if key and value are not provided', () => {
    expect(dictionary.set(null, null)).toBeFalsy();
  });

  it('should return false if key is not provided', () => {
    expect(dictionary.set(null, 1)).toBeFalsy();
  });

  it('should return false if value is not provided', () => {
    expect(dictionary.set('key', null)).toBeFalsy();
  });
});
