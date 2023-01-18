import { Set } from '../structures/set';

let set: Set<string>;

describe('Set', () => {
  beforeEach(() => {
    set = new Set<string>();
  });

  it('should add elements to the set', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    expect(set.items).toEqual({ a: 'a', b: 'b', c: 'c' });
  });

  it('should return true if the element is added to the set', () => {
    expect(set.add('a')).toBe(true);
  });

  it('should return false if the element is not added to the set', () => {
    set.add('a');
    expect(set.add('a')).toBe(false);
  });

  it('should return true if the element is deleted from the set', () => {
    set.add('a');
    expect(set.delete('a')).toBe(true);
  });

  it('should return false if the element is not deleted from the set', () => {
    expect(set.delete('a')).toBe(false);
  });

  it('should return true if the element is in the set', () => {
    set.add('a');
    expect(set.has('a')).toBe(true);
  });

  it('should return false if the element is not in the set', () => {
    expect(set.has('a')).toBe(false);
  });

  it('should clear the set', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    set.clear();

    expect(set.items).toEqual({});
  });

  it('should return the size of the set', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    expect(set.size()).toBe(3);
  });

  it('should return the size of the set using a legacy method', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    expect(set.sizeLegacy()).toBe(3);
  });

  it('should return the values of the set', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    expect(set.values()).toEqual(['a', 'b', 'c']);
  });

  it('should return the values of the set using a legacy method', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    expect(set.valuesLegacy()).toEqual(['a', 'b', 'c']);
  });

  it('should return the union of sets ', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    const otherSet = new Set<string>();
    otherSet.add('a');
    otherSet.add('c');
    otherSet.add('d');
    otherSet.add('e');

    const unionSet = set.union(otherSet);

    expect(unionSet.values()).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('should return the intersection between sets', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    const otherSet = new Set<string>();
    otherSet.add('a');
    otherSet.add('c');
    otherSet.add('d');
    otherSet.add('e');

    const intersectionSet = set.intersection(otherSet);

    expect(intersectionSet.values()).toEqual(['a', 'c']);
  });

  it('should return the difference between sets', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    const otherSet = new Set<string>();
    otherSet.add('a');
    otherSet.add('c');
    otherSet.add('d');
    otherSet.add('e');

    const differenceSet = set.difference(otherSet);

    expect(differenceSet.values()).toEqual(['b']);
  });
});
