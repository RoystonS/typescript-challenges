// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];

// ============= Your Code Here =============

// This is trivially simple assuming you already have Reverse, Parameters and ReturnType.
import { Reverse } from './03192-medium-reverse';
import { MyParameters } from './03312-easy-parameters';
import { MyReturnType } from './00002-medium-return-type';

type FlipArguments<T extends (...args: any) => any> = (
  ...args: Reverse<MyParameters<T>>
) => MyReturnType<T>;
