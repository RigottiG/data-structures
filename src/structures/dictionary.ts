import { ValuePair } from '../models/dictionary-models';

export class Dictionary<T> {
  table: Record<string, ValuePair<T>>;

  constructor() {
    this.table = {};
  }

  hasKey(key): boolean {
    return !!this.table[key];
  }

  set(key, value): boolean {
    if (!key || !value) {
      return false;
    }

    this.table[key] = new ValuePair(key, value);

    return true;
  }

  remove(key): boolean {
    if (!this.hasKey(key)) {
      return false;
    }

    delete this.table[key];
    return true;
  }

  get(key): T | undefined {
    return this.table[key] ? this.table[key].value : undefined;
  }

  keyValues(): Array<ValuePair<T>> {
    return Object.values(this.table);
  }

  keys(): string[] {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  values(): T[] {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  forEach(callbackFn): void {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);

      if (result === false) {
        break;
      }
    }
  }

  size(): number {
    return this.keyValues().length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.table = {};
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;

    for (let i = 1; i < valuePairs.length; i++) {
      objString += valuePairs[i].toString();
    }

    return objString;
  }
}
