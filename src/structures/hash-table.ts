import { ValuePair } from '../models/dictionary-models';

export class HashTable<T> {
  table: Record<string, ValuePair<T>>;

  constructor() {
    this.table = {};
  }

  loseloseHashCode(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }

  hashCode(key): number {
    return this.loseloseHashCode(key);
  }

  put(key, value): boolean {
    if (!key || !value) {
      return false;
    }

    const position = this.hashCode(key);
    this.table[position] = new ValuePair<T>(key, value);
    return true;
  }

  get(key): ValuePair<T> {
    return this.table[this.hashCode(key)];
  }

  remove(key): boolean {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];

    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }

    return false;
  }
}
