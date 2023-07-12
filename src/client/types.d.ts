export type Arguments<T extends Function> = T extends (...args: infer A) => any
  ? A
  : never;
