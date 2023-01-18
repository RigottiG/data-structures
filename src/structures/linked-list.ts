import { Node } from '../../models/linked-list-models';
import { defaultEquals } from '../../utils';

export class LinkedList {
  private count: number;
  private head: any;
  private readonly equalsFn: Function;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  insert(element, index): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }

      this.count++;
      return true;
    }

    return false;
  }

  push(element: any): void {
    const node = new Node(element);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        // get the last item
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  getElementAt(index: number): any {
    if (!(index >= 0 && index < this.count)) {
      return undefined;
    }

    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node.next;
    }

    return node;
  }

  removeAt(index: number): any {
    if (!(index >= 0 && index < this.count)) {
      return undefined;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.count--;
    return current.element;
  }

  indexOf(element): number {
    let current = this.head;

    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  remove(element): any {
    const index = this.indexOf(element);

    return this.removeAt(index);
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  getHead(): any {
    return this.head;
  }

  toString(): string {
    if (this.head == null) {
      return '';
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    return objString;
  }
}
