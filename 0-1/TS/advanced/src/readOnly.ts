type newUser = {
  readonly name: string;
  readonly email: string;
};

const bob: newUser = {
  name: "Bob",
  email: "bob@example.com",
};

// bob.name = "Mahesh" //it will show error
