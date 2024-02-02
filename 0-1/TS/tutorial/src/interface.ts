// problem 1, check if the user is above 18

interface User {
  name: string;
  age: number;
}
function isLegalTwo(user: User): boolean {
  if (user.age < 18) return false;
  return true;
}
const Mahesh: User = {
  name: "Mahesh",
  age: 18,
};

console.log(isLegalTwo(Mahesh));

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const TigerBiscuit: Square = { color: "brown", sideLength: 4 };
console.log(TigerBiscuit);

interface Logger {
  log(msg: string): void;
}

class Greetings implements Logger {
  log(msg: string) {
    console.log(msg);
  }
}

const merryChristmas = new Greetings();

merryChristmas.log("Wish you merry christmas");
