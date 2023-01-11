import { Stack } from '../stack-array';

let stack: Stack<number>;

describe('Stack Array', () => {
  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('push method', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack).toEqual({ items: [1, 2, 3] });
  });

  it('pop method', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('peek method', () => {
    stack.push(72);
    stack.push(81);
    expect(stack.peek()).toBe(81);
  });

  it('isEmpty method', () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('size method', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });
});
