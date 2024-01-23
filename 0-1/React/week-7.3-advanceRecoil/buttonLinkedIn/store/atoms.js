import { atom, selector } from "recoil";

export const headerCount = atom({
  key: "networkCount",
  default: {
    myNetwork: 98,
    jobs: 0,
    messages: 3,
    notifications: 12,
  },
});

export const totalNotifications = selector({
  key: "totalNotifications",
  get: ({ get }) => {
    const headerCountSelector = get(headerCount);
    const { myNetwork, jobs, messages, notifications } = headerCountSelector;
    return myNetwork + jobs + messages + notifications;
  },
});
