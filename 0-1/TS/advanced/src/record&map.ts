type userScore = {
  score: number;
  league: string;
};

// type userDetails = Record<string, userScore>;

// const aviDetails: userDetails = {
//   ["avi"]: {
//     score: 99980,
//     league: "bronze",
//   },
// };

// console.log(aviDetails);

const userDetails = new Map<string, userScore>();
userDetails.set("avi", { score: 99980, league: "bronze" });

// console.log(userDetails);
const aviDetails = userDetails.get("avi");
console.log(aviDetails);
