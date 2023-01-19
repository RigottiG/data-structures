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
}
