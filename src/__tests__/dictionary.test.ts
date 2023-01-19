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

  it('should return all keys', () => {
    dictionary.set('key1', 1);
    dictionary.set('key2', 2);
    dictionary.set('key3', 3);
    expect(dictionary.keys()).toEqual(['key1', 'key2', 'key3']);
  });

  it('should return all values', () => {
    dictionary.set('key1', 1);
    dictionary.set('key2', 2);
    dictionary.set('key3', 3);
    expect(dictionary.values()).toEqual([1, 2, 3]);
  });

  it('should return all key value pairs', () => {
    dictionary.set('key1', 1);
    dictionary.set('key2', 2);
    dictionary.set('key3', 3);
    expect(dictionary.keyValues()).toEqual([
      { key: 'key1', value: 1 },
      { key: 'key2', value: 2 },
      { key: 'key3', value: 3 },
    ]);
  });

  it('should iterate over all key value pairs', () => {
    dictionary.set('key1', 1);
    dictionary.set('key2', 2);
    dictionary.set('key3', 3);
    const result: any[] = [];

    dictionary.forEach((key, value) => {
      result.push({ key, value });
    });

    expect(result).toEqual([
      { key: 'key1', value: 1 },
      { key: 'key2', value: 2 },
      { key: 'key3', value: 3 },
    ]);
  });

  it('should stop iteration if callback returns false', () => {
    dictionary.set('key1', 1);
    dictionary.set('key2', 2);
    dictionary.set('key3', 3);
    const result: any[] = [];
    dictionary.forEach((key, value) => {
      result.push({ key, value });
      return false;
    });

    expect(result).toEqual([{ key: 'key1', value: 1 }]);
  });

  it('should return the size of the dictionary', () => {
    dictionary.set('key1', 1);
    dictionary.set('key2', 2);
    dictionary.set('key3', 3);
    expect(dictionary.size()).toBe(3);
  });

  it('should clear the dictionary', () => {
    dictionary.set('key1', 1);
    dictionary.set('key2', 2);
    dictionary.set('key3', 3);
    dictionary.clear();
    expect(dictionary.size()).toBe(0);
  });

  it('should return true if the dictionary is empty', () => {
    expect(dictionary.isEmpty()).toBeTruthy();
  });

  it('should return false if the dictionary is not empty', () => {
    dictionary.set('key1', 1);
    expect(dictionary.isEmpty()).toBeFalsy();
  });

  it('should return an string representation of the dictionary', () => {
    dictionary.set('key1', 1);
    dictionary.set('key2', 2);
    dictionary.set('key3', 3);
    expect(dictionary.toString()).toBe('[#key1: 1][#key2: 2][#key3: 3]');
  });

  it('should return an empty string if the dictionary is empty', () => {
    expect(dictionary.toString()).toBe('');
  });
});
