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
