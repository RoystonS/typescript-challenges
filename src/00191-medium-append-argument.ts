// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>];

// ============= Your Code Here =============

// We've already implemented Parameters and ReturnType in 03312 and 00002,
// so we use the official versions here.
type AppendArgument<Fn extends (...args: any) => any, A> = (
  ...args: [...Parameters<Fn>, A]
) => ReturnType<Fn>;
