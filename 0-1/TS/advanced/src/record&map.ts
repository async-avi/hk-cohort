type userScore = {
  score: number;
  league: string;
};

type userDetails = Record<string, userScore>;

const aviDetails: userDetails = {
  ["avi"]: {
    score: 99980,
    league: "bronze",
  },
};

console.log(aviDetails);
