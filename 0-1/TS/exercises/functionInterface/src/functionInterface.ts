//Basic function interface
interface Operation {
  (a: number, b: number): number;
}

const Addition: Operation = (a: number, b: number) => a + b;

//event interface
interface RegisterEvent {
  (event: KeyboardEvent): void;
}

const EventHandler: RegisterEvent = (event: KeyboardEvent) => null;

//high order interface
interface HighOrder {
  (a: number, b: number, cb: (a: number, b: number) => any): any;
}

const MathOperation: HighOrder = (
  a: number,
  b: number,
  cb: (a: number, b: number) => any
) => cb(a, b);

//! Implementation

const division = (a: number, b: number): number => a / b;

const result1 = MathOperation(4, 2, division);

//promise interface
interface PromiseInterface {
  (arg: string): Promise<any>;
}

const asyncFunc: PromiseInterface = (arg: string) =>
  new Promise<any>((resolve) =>
    setTimeout(() => resolve(`Your text was ${arg}`), 1000)
  );

//generic interface
interface GenericInterface<T> {
  (arr: T[], cb: (arr: T[]) => any): T[];
}

const ArrayFilterGreaterThan2 = (arr: number[]) =>
  arr.filter((item) => item > 2);

const getElementMoreThan2: GenericInterface<number> = (
  arr: number[],
  cb: (arr: number[]) => any
) => {
  const filteredArray = cb(arr);
  return filteredArray;
};
