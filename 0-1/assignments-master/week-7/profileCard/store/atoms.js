import { atom } from "recoil";
import { people } from "../people";

export const peopleArr = atom({
  key: "people",
  default: people,
});
