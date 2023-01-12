export class Stack<T> {
  private count: number;
  private readonly items: Record<number, T>;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear(): void {
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}
