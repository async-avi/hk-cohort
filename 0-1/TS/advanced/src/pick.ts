type User = {
  name: string;
  age: number;
  city: string;
  email: string;
};

type updatedFields = Pick<User, "name" | "age" | "city">;
type updatedFieldsOptional = Partial<updatedFields>;

const avi: User = {
  name: "avi",
  age: 18,
  city: "New York",
  email: "user@1.com",
};

function updateUser(user: User, updatedFields: updatedFieldsOptional) {
  const { name, age, city } = updatedFields;

  if (name) user.name = name;
  if (age) user.age = age;
  if (city) user.city = city;

  return user;
}

console.log(avi);
const updatedUser = updateUser(avi, { name: "tina" });
console.log(updatedUser);
