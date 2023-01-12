import { Stack } from '../stack';

let stack: Stack<number>;

describe('Stack Array', () => {
  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('push method', () => {
    stack.push(5);
    stack.push(8);
    expect(stack).toEqual({
      count: 2,
      items: {
        0: 5,
        1: 8,
      },
    });
  });

  it('size method', () => {
    expect(stack.size()).toBe(0);
    stack.push(5);
    stack.push(8);
    expect(stack.size()).toBe(2);
  });

  it('size method', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('pop method', () => {
    expect(stack.pop()).toBe(undefined);

    stack.push(5);
    stack.push(8);
    const valueDeleted = stack.pop();

    expect(valueDeleted).toEqual(8);
    expect(stack).toEqual({ count: 1, items: { 0: 5 } });
  });

  it('peek method', () => {
    expect(stack.peek()).toBe(undefined);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('clear method', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('toString method', () => {
    expect(stack.toString()).toBe('');
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toString()).toBe('1, 2, 3');
  });
});
