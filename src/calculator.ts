export function calculateAverage(numbers: number[]): number {
  // Bug: Returns NaN when numbers array is empty
  const sum = numbers.reduce((total, n) => total + n, 0);
  return sum / numbers.length;
}
