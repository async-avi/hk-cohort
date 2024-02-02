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

//Optional Properties

interface Car {
  company: string;
  model: string;
  year?: number;
}

interface Cat extends Animal {
  color: string;
}

interface Shape {
  area: () => void;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.floor(Math.PI * this.radius * this.radius);
  }
}

const newCircle = new Circle(7);
console.log(newCircle.area());

interface SearchFunction {
  (arr: any[], searchValue: any): boolean;
}

const search: SearchFunction = (arr, searchValue) => arr.includes(searchValue);

const result1: boolean = search([1, 2, 3, 4], 3);
console.log(result1);
