export class ValuePair<T> {
  key: string;
  value: T;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString(): string {
    return `[#${this.key}: ${this.value}]`;
  }
}
