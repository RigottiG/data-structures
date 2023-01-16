export class Node {
  private readonly element: any;
  private readonly next: any;

  constructor(element: any) {
    this.element = element;
    this.next = undefined;
  }
}
