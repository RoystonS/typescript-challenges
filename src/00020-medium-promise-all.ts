// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];

// ============= Your Code Here =============

// We've already implemented a (properly recursive) Awaited in 00189, so
// we reuse it here.
declare function Attempt1<T>(values: T): Promise<{
  -readonly [K in keyof T]: Awaited<T[K]>;
}>;
// That doesn't work because it doesn't preserve the tuple type correctly.

// The correct solution involves using variable tuple types, which gives
// us individual types from the array, rather than attempting to collapse
// down to a single type for the whole array.
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: Awaited<T[K]>;
}>;
