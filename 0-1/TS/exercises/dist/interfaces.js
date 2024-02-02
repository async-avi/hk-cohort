"use strict";
const jimmy = {
    name: "Jimmy",
    sound: "Woof",
    breed: "Pitbull",
};
const harry = {
    name: "Harry",
    sound: "Meow",
};
console.log(jimmy);
console.log(harry);
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.floor(Math.PI * this.radius * this.radius);
    }
}
const newCircle = new Circle(7);
console.log(newCircle.area());
const search = (arr, searchValue) => arr.includes(searchValue);
const result1 = search([1, 2, 3, 4], 3);
console.log(result1);
