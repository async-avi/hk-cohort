//!Greeter

const greetings = (fName, lName) => {
  const num = 1;
  if (typeof fName === typeof num && typeof lName === typeof num) {
    console.log("Enter a valid name");
  }
  console.log(
    `Hello ${fName} ${lName}, welcome!! We appreciate your stay here`
  );
};

// greetings("Abhinav", "Bhattacharya");

//! Greets according to Gender

const genderGreeting = (name, gender) => {
  const num = 1;
  if (typeof name == typeof num) {
    console.log("Enter a valid name");
  } else if (gender === "male") {
    console.log(
      `Everyone welcome ${name}, he is specially invited in this occasion to deliver a speech`
    );
  } else if (gender === "female") {
    console.log(
      `Everyone welcome ${name}, she is specially invited in this occasion to deliver a speech`
    );
  } else {
    console.log(`Enter a valid gender`);
  }
};

// genderGreeting(9, "male");

//! zero to 1k

const printNum = () => {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }
};

// printNum();
