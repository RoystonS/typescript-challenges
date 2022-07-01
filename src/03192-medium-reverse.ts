// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
];

// ============= Your Code Here =============
export type Reverse<T extends any[]> = T extends [infer TFirst, ...infer TRest]
  ? [...Reverse<TRest>, TFirst]
  : T;
