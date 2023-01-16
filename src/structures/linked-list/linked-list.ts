import { Node } from '../../models/linked-list-models';
import { defaultEquals } from '../../utils';

export class LinkedList {
  count: number;
  head: any;
  readonly equalsFn: Function;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
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
}
