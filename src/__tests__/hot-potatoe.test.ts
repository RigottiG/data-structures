import { hotPotato } from '../algorithms/hot-potato';

describe('Hot Potato', () => {
  it('should return the winner', () => {
    expect(hotPotato(['John', 'Jack', 'Camila', 'Ingrid', 'Carl'], 7).winner).toBe('John');
  });
});
