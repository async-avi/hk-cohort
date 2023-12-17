//! normal promises example

function sayHi() {
  return new Promise((resolve, reject) => {
    const message = "Hello, world!";
    resolve(message);
  });
}

// function popMessage(message) {
//   console.log(message);
// }

// sayHi().then(popMessage);

//! normal async example

function getHours() {
  return new Promise((resolve, reject) => {
    let date = new Date();
    const data = date.getHours();
    resolve(data);
  });
}

function greetIf(data) {
  if (data < 12 && data > 0) {
    console.log("Good Morning");
  } else if (data > 12 && data < 20) {
    console.log("Good Evening");
  } else {
    console.log("Good Night");
  }
}

async function main() {
  console.log("Hi there, welcome");
  const data = await getHours();
  greetIf(data);
}

main();
