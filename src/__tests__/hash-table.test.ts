import { HashTable } from '../structures/hash-table';

let hashTableTest: HashTable<string>;

describe('HashTable', function () {
  beforeEach(() => {
    hashTableTest = new HashTable<string>();
  });

  it('should return an hash code', () => {
    expect(hashTableTest.hashCode('John')).toBe(29);
  });

  it('should put a key-value pair in the hash table', () => {
    expect(hashTableTest.put('John', 'johnsnow@mail.com')).toBe(true);
  });

  it('should get a value by key', () => {
    hashTableTest.put('John', 'johnsnow@mail.com');
    expect(hashTableTest.get('John').value).toBe('johnsnow@mail.com');
  });

  it('should remove a value by key', () => {
    hashTableTest.put('John', 'johnsnow@mail.com');
    expect(hashTableTest.remove('John')).toBe(true);
  });

  it('should return undefined when the key does not exist', () => {
    expect(hashTableTest.get('John')).toBe(undefined);
  });
});
