// ============= Test Cases =============
import type { Alike, Expect } from './test-utils';

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// ============= Your Code Here =============

// We've already implemented Exclude in 00043 and there's
// nothing to be gained by using an 'as' filter here, so we just use Exclude
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Q in K]: T[Q];
} & {
  [Q in Exclude<keyof T, K>]: T[Q];
};
