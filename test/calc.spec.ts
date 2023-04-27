import {
  calcAverage,
  calcSum,
  calcVariance,
  calcStandardDeviation,
  calcDeviation,
  CalculationError,
} from "../lib/calc";

describe("calcAverage", () => {
  test("calculate average", () => {
    const actual = calcAverage(5, 6, 7, 7, 10);
    const expected = 7.0;
    expect(actual).toBe(expected);
  });

  test("calculate average when nothing passed", () => {
    const actual = calcAverage();
    const expected = 0;
    expect(actual).toBe(expected);
  });

  test("calculate average accurately to the 7th decimal place", () => {
    const actual = calcAverage(10, 7, 0, 2, 2, 4);
    const expected = 4.166666667;
    expect(actual).toBeCloseTo(expected, 7);
  });
});

describe("calcSum", () => {
  test("calculate sum", () => {
    const actual = calcSum(1, 2, 3, 4, 5);
    const expected = 15;
    expect(actual).toBe(expected);
  });

  test("calculate sum when nothing passed", () => {
    const actual = calcSum();
    const expected = 0;
    expect(actual).toBe(expected);
  });

  test("calculate sum accurately to the 7th decimal place", () => {
    const actual = calcSum(
      1.728199812,
      1.263424052,
      1.523971889,
      4.498008094,
      2.572831809,
      2.957541788
    );
    const expected = 14.54397744;
    expect(actual).toBeCloseTo(expected, 7);
  });
});

describe("calcVariance", () => {
  test("calculate variance", () => {
    const actual = calcVariance(5, 6, 7, 7, 10);
    const expected = 2.8;
    expect(actual).toBe(expected);
  });

  test("calculate variance when nothing passed", () => {
    const actual = calcVariance();
    const expected = 0;
    expect(actual).toBe(expected);
  });
});

describe("calcStandardDeviation", () => {
  test("calculate standard deviation", () => {
    const actual = calcStandardDeviation(55, 70, 35, 80);
    const expected = 16.95582495781317;
    expect(actual).toBeCloseTo(expected, 7);
  });

  test("calculate variance when nothing passed", () => {
    const actual = calcStandardDeviation();
    const expected = 0;
    expect(actual).toBe(expected);
  });
});

describe("calcDeviation", () => {
  test("calculate deviation", () => {
    const actual = calcDeviation(50, 58, 20);
    const expected = 46;
    expect(actual).toBe(expected);
  });

  test("throw error when standard deviation is zero", () => {
    expect(() => calcDeviation(50, 58, 0)).toThrowError(
      new CalculationError("standard deviation is zero")
    );
  });
});
