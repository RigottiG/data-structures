import { Stack } from '../stack-array';

describe('Stack Array', () => {
  it('push method', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack).toEqual({ items: [1, 2, 3] });
  });

  it('pop method', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('peek method', () => {
    const stack = new Stack<number>();
    stack.push(72);
    stack.push(81);
    expect(stack.peek()).toBe(81);
  });
});
