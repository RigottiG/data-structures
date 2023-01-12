import { Deque } from '../structures/deque';

let deque: Deque<string>;

describe('Deque', () => {
  beforeEach(() => {
    deque = new Deque<string>();
  });

  it('should be empty', () => {
    expect(deque.isEmpty()).toBeTruthy();
  });

  it('should add elements to the back of the deque', () => {
    deque.addBack('John');
    deque.addBack('Jack');
    expect(deque.toString()).toBe('John,Jack');
  });

  it('should remove elements from the front of the deque', () => {
    deque.addBack('John');
    deque.addBack('Jack');
    expect(deque.removeFront()).toBe('John');
    expect(deque.removeFront()).toBe('Jack');
  });

  it('should remove elements from the back of the deque', () => {
    deque.addBack('John');
    deque.addBack('Jack');
    expect(deque.removeBack()).toBe('Jack');
    expect(deque.removeBack()).toBe('John');
  });

  it('should peek the front element from the deque', () => {
    deque.addBack('John');
    deque.addBack('Jack');
    expect(deque.peekFront()).toBe('John');
    expect(deque.peekFront()).toBe('John');
  });

  it('should peek the back element from the deque', () => {
    deque.addBack('John');
    deque.addBack('Jack');
    expect(deque.peekBack()).toBe('Jack');
    expect(deque.peekBack()).toBe('Jack');
  });

  it('should return the correct size', () => {
    expect(deque.size()).toBe(0);
    deque.addBack('John');
    deque.addBack('Jack');
    expect(deque.size()).toBe(2);
    deque.removeFront();
    expect(deque.size()).toBe(1);
    deque.removeBack();
    expect(deque.size()).toBe(0);
  });
});
