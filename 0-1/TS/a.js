"use strict";
const x = 102;
console.log(x);
function greet(fName) {
    console.log(`Hello ${fName}`);
}
greet("Abhinav");
function sum(a, b) {
    return a + b;
}
console.log(sum(64, 5));
function isLegal(age) {
    if (age < 18) {
        return false;
    }
    return true;
}
console.log(isLegal(18));
function run1sLate(fn) {
    setTimeout(fn, 1000);
}
function randomFunc() {
    console.log("Hi after 1 second");
}
run1sLate(randomFunc);
