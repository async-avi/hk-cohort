import { atom, selector } from "recoil";
import axios from "axios";

export const headerCount = atom({
  key: "headerCount",
  default: selector({
    key: "getCountFromBackend",
    get: async () => {
      let result = await axios.get(
        "https://6a30000c-ef3b-4b66-ac84-9bc1371a2674-00-7fz04n6ph0ut.sisko.replit.dev/"
      );
      return result.data;
    },
  }),
});

// export const totalNotifications = selector({
//   key: "totalNotifications",
//   get: ({ get }) => {
//     const headerCountSelector = get(headerCount);
//     const { myNetwork, jobs, messages, notifications } = headerCountSelector;
//     return myNetwork + jobs + messages + notifications;
//   },
// });
