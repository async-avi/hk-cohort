import { atom } from "recoil";

export const headerCount = atom({
  key: "networkCount",
  default: {
    myNetwork: 98,
    jobs: 0,
    messages: 3,
    notifications: 12,
  },
});
