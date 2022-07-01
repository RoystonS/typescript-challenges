// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
      [{ foo: 'bar'; 2: 10 }, 'foobar']
    >
  >
];

// ============= Your Code Here =============

// A nice recursive processing where we unwrap the array from the first element until it doesn't
// have a wrapping, and then we repeat with the rest of the array.

type Flatten<T extends any[]> = T extends [[...infer A], ...infer Y]
  ? Flatten<[...A, ...Flatten<Y>]>
  : T extends [infer A, ...infer Y]
  ? [A, ...Flatten<Y>]
  : T;
