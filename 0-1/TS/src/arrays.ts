const arr: number[] = [1, 2, 3, 4];

interface UserForApp {
  name: string;
  password: string;
}

function filterUser(users: UserForApp[], nameString: string) {
  return users.filter((user) => user.name == nameString);
}

const userArray: UserForApp[] = [
  { name: "John", password: "123" },
  { name: "avi", password: "abcd" },
];

console.log(filterUser(userArray, "avi"));
