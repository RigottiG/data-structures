import { Queue } from '../structures/queue';

let queue: Queue<number>;

describe('Queue', () => {
  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('should enqueue and dequeue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
  });

  it('isEmpty method', () => {
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  it('peek method', () => {
    expect(queue.peek()).toBe(undefined);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('size method', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
  });

  it('clear method', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
    queue.clear();
    expect(queue.size()).toBe(0);
  });

  it('toString method', () => {
    expect(queue.toString()).toBe('');
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toString()).toBe('1,2,3');
  });
});
