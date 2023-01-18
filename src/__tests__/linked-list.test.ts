import { LinkedList } from '../structures/linked-list';

let linkedList: LinkedList;

describe('Linked list', () => {
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should push elements to the list', () => {
    const element = 'test';
    linkedList.push(element);

    expect(linkedList.size()).toBe(1);
    expect(linkedList.getHead().element).toBe(element);
  });

  it('should remove element at index', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const element = linkedList.removeAt(2);
    expect(element).toBe(3);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.getElementAt(2).element).toBe(4);
  });

  it('should return undefined if index is out of range', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    const element = linkedList.removeAt(4);

    expect(element).toBe(undefined);
    expect(linkedList.size()).toBe(4);
  });

  it('should return index of element', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const index = linkedList.indexOf(3);
    expect(index).toBe(2);
  });

  it('should return -1 if element is not found', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const index = linkedList.indexOf(5);
    expect(index).toBe(-1);
  });

  it('should remove element from the list', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const element = linkedList.remove(3);
    expect(element).toBe(3);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.indexOf(3)).toBe(-1);
  });

  it('should return undefined if element is not found', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const element = linkedList.remove(5);
    expect(element).toBe(undefined);
    expect(linkedList.size()).toBe(4);
  });

  it('should return true if list is empty', () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  it('should return false if list is not empty', () => {
    linkedList.push(1);
    expect(linkedList.isEmpty()).toBe(false);
  });

  it('should return size of the list', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    expect(linkedList.size()).toBe(4);
  });

  it('should return head of the list', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    expect(linkedList.getHead().element).toBe(1);
  });

  it('should return undefined if list is empty', () => {
    expect(linkedList.getHead()).toBe(undefined);
  });

  it('should return element at index', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    expect(linkedList.getElementAt(2).element).toBe(3);
  });

  it('should return undefined if index is out of range', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    expect(linkedList.getElementAt(4)).toBe(undefined);
  });

  it('should insert element at index', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(4);

    linkedList.insert(3, 2);
    expect(linkedList.size()).toBe(4);
    expect(linkedList.getElementAt(2).element).toBe(3);
  });

  it('should return false if index is out of range', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(4);

    const result = linkedList.insert(3, 4);
    expect(result).toBe(false);
    expect(linkedList.size()).toBe(3);
  });

  it('should return string representation of the list', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    expect(linkedList.toString()).toBe('1,2,3,4');
  });

  it('should return empty string if list is empty', () => {
    expect(linkedList.toString()).toBe('');
  });
});
