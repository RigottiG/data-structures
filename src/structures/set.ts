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
}
