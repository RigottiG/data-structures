export class Set<T> {
  items: Record<string, T>;

  constructor() {
    this.items = {};
  }

  has(element): boolean {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element): boolean {
    if (this.has(element)) {
      return false;
    }

    this.items[element] = element;
    return true;
  }

  delete(element): boolean {
    if (!this.has(element)) {
      return false;
    }

    delete this.items[element];
    return true;
  }

  clear(): void {
    this.items = {};
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  sizeLegacy(): number {
    let count = 0;
    for (const key in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        count++;
      }
    }

    return count;
  }

  values(): T[] {
    return Object.values(this.items);
  }

  valuesLegacy(): T[] {
    const values: T[] = [];
    for (const key in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        values.push(this.items[key]);
      }
    }

    return values;
  }

  union(otherSet: Set<T>): Set<T> {
    const unionSet = new Set<T>();

    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));

    return unionSet;
  }

  intersection(otherSet: Set<T>): Set<T> {
    const intersectionSet = new Set<T>();
    const values = this.values();
    const otherValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(otherSet: Set<T>): Set<T> {
    const differenceSet = new Set<T>();

    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  isSubsetOf(otherSet): boolean {
    if (this.size() > otherSet.size()) {
      return false
    }

    let isSubset = true

    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }

      return true
    })

    return isSubset
  }
}
