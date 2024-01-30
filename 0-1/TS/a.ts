const x: number = 102;
console.log(x);

function greet(fName: string) {
  console.log(`Hello ${fName}`);
}

greet("Abhinav");

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(64, 5));

function isLegal(age: number): boolean {
  if (age < 18) {
    return false;
  }
  return true;
}

console.log(isLegal(18));

function run1sLate(fn: () => void) {
  setTimeout(fn, 1000);
}
function randomFunc() {
  console.log("Hi after 1 second");
}

run1sLate(randomFunc);
