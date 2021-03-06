// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>
];

// ============= Your Code Here =============
// Trim is fairly straightforward, but reminds us that we can use ORed string literal types.
type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer Rest1}`
  ? Trim<Rest1>
  : S extends `${infer Rest2}${' ' | '\t' | '\n'}`
  ? Trim<Rest2>
  : S;
