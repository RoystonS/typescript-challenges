// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
];

// ============= Your Code Here =============
import { Length } from './00018-easy-tuple-length';

// We can't really do any numeric manipulation, but we can
// split out the characters to form a tuple, and then extract
// the length of the tuple.
type Split<S extends string> = S extends `${infer First}${infer Rest}`
  ? [First, ...Split<Rest>]
  : S extends ''
  ? []
  : [S];
type LengthOfString<S extends string> = Length<Split<S>>;
