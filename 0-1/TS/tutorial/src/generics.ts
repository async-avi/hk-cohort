function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const getName = getFirstElement(["abhinav", "Bhattacharya"]);

const numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getName);

function getElementMoreThan2(arr: number[]) {
  const moreElem: number[] = arr.filter((elem) => elem > 2);
  return getFirstElement(moreElem);
}

console.log(getElementMoreThan2(numArr));
