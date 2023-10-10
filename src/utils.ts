export type Unprefix<T extends Record<string, any>, Pre extends string> = {
  [K in keyof T as K extends `${Pre}${infer U}` ? U : never]: T[K];
};

export type Prefix<T extends Record<string, any>, Pre extends string> = {
  // @ts-expect-error
  [K in keyof T as `${Pre}${K}`]: T[K];
};

export type RenamePrefix<
  T extends Record<string, any>,
  Old extends string,
  New extends string,
> = Prefix<Unprefix<T, Old>, New>;

export type MergeIntersection<T extends Record<any, any>> = {
  [K in keyof T]: T[K];
};
