export function asleep<T = never>(
  milisecond: number,
  value: T | PromiseLike<T>,
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), milisecond);
  });
}
