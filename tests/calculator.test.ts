import { calculateAverage } from "../src/calculator";

describe("calculateAverage", () => {
  test("calculates average of numbers correctly", () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });

  test("returns 0 when array is empty", () => {
    expect(calculateAverage([])).toBe(0);
  });
});
