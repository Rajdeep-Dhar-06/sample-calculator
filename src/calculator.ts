export function calculateAverage(numbers: number[]): number {
  // Fix: Return 0 when numbers array is empty to avoid division by zero
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((total, n) => total + n, 0);
  return sum / numbers.length;
}
