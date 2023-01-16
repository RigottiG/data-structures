import { LinkedList } from '../structures/linked-list/linked-list';

let linkedList: LinkedList;

describe('Linked list', () => {
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should push elements to the list', () => {
    const element = 'test';
    linkedList.push(element);

    expect(linkedList.count).toBe(1);
    expect(linkedList.head.element).toBe(element);
  });

  test('should remove element at index', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const element = linkedList.removeAt(2);
    expect(element).toBe(3);
    expect(linkedList.count).toBe(3);
    expect(linkedList.getElementAt(2).element).toBe(4);
  });

  test('should return undefined if index is out of range', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    const element = linkedList.removeAt(4);

    expect(element).toBe(undefined);
    expect(linkedList.count).toBe(4);
  });
});
