// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
];

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// ============= Your Code Here =============

// This doesn't work properly: whilst it maps
// some keys to never, the keys remain.
type Attempt1<T, K extends keyof T> = {
  [Q in keyof T]: Q extends K ? never : T[Q];
};

// We can cheat and use Pick and Exclude. We have already implemented
// them in 00004 and 00043 but implementing both together from
// scratch illustrates a use of 'as' to filter the keys.
type CheatyImplementation<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type MyOmit<T, K extends keyof T> = {
  [Q in keyof T as Q extends K ? never : Q]: T[Q];
};
