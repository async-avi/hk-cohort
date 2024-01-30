//problem 1

function greet(fName: string) {
  console.log(`Hi ${fName}`);
}

//problem 2
function sum(a: number, b: number): number {
  return a + b;
}

//problem 3
function isLegal(age: number): boolean {
  if (age < 18) return false;
  return true;
}

//problem 4
function runAfter1s(fn: () => void) {
  setTimeout(fn, 1000);
}

function randomFunc() {
  console.log("Hi after 1 seconds");
}

runAfter1s(randomFunc);
