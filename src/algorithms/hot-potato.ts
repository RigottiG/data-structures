import { Queue } from '../structures/queue';

export function hotPotato(elements: string[], num: number): { eliminated: string[]; winner: string } {
  const queue = new Queue<string>();
  const eliminatedList: string[] = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    queue.enqueue(element);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue() as string);
    }

    eliminatedList.push(queue.dequeue() as string);
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue() as string,
  };
}
