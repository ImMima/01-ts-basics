function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement<number>([1, 2, 3]); // 1
const string = getFirstElement<string>(["a", "b", "c"]); // "a"
const boolean = getFirstElement<boolean>([true, false, true]); // true
const mixed = getFirstElement<number | string | boolean>([1, "a", true]);
