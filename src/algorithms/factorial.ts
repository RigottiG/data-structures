export function factorialIterative(number): number | undefined {
  if (number < 0) return undefined;

  let total = 1;
  for (let n = number; n > 1; n--) {
    total *= n;
  }
  return total;
}

export function factorial(number): number {
  if (number === 1 || number === 0) return 1;

  return number * factorial(number - 1);
}
