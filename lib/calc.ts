/**
 * calculates the average of the passed values.
 * @param values
 * @returns the average of the passed values.
 */
export function calcAverage(...values: number[]): number {
  return values.length === 0 ? 0 : calcSum(...values) / values.length;
}

/**
 * calculates the sum of the passed values.
 * @param values
 * @returns the sum of passed values.
 */
export function calcSum(...values: number[]): number {
  return values.reduce((acc, cur) => acc + cur, 0);
}

/**
 * calculates the variance of the passed values.
 * @param values
 * @returns the variance of passed values.
 */
export function calcVariance(...values: number[]): number {
  if (values.length === 0) return 0;
  const average = calcAverage(...values);
  return calcSum(...values.map((v) => (v - average) ** 2)) / values.length;
}

/**
 * calculates the standard deviation of the passsed values.
 * @param values
 * @returns the standard deviation of passed values.
 */
export function calcStandardDeviation(...values: number[]): number {
  return Math.sqrt(calcVariance(...values));
}

/**
 * calculates the deviation of the passed value.
 * when standard deviation is zero, throw an error.
 * @param value
 * @param average
 * @param standardDeviation
 * @returns the deviation of the passed value.
 */
export function calcDeviation(
  value: number,
  average: number,
  standardDeviation: number
): number {
  if (standardDeviation === 0)
    throw new CalculationError("standard deviation is zero");
  return ((value - average) / standardDeviation) * 10 + 50;
}

export class CalculationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
