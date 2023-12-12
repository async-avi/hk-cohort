//! for getting even number in an array

const numArr = [1, 2, 3, 4, 5];

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 === 0) {
    // console.log(numArr[i]);
  }
}

//! check gender
const users = [
  {
    firstName: "John",
    gender: "male",
  },
  {
    firstName: "Sara",
    gender: "female",
  },
  {
    firstName: "Billy",
    gender: "male",
  },
  {
    firstName: "Elizabeth",
    gender: "female",
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].gender === "male") {
    // console.log(`${users[i].firstName}`);
  }
}

//! findSum fancy
function findSum(num1, num2, funcToCall) {
  let sum = num1 + num2;
  funcToCall(sum);
}

function displayResult(data) {
  console.log(`The result of sum is ${data}`);
}

function displayResultPassive(data) {
  console.log(`Result is ${data}`);
}

findSum(1, 2, displayResultPassive);
