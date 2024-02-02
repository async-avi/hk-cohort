interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

//class and inheritance

interface Animal {
  name: string;
  sound: string;
}
interface Dog extends Animal {
  breed: string;
}

const jimmy: Dog = {
  name: "Jimmy",
  sound: "Woof",
  breed: "Pitbull",
};

const harry: Animal = {
  name: "Harry",
  sound: "Meow",
};

console.log(jimmy);
console.log(harry);
