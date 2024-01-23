import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todoFamily = atomFamily({
  key: "todoFamilyKey",
  default: selectorFamily({
    key: "fetchTodoFamily",
    get: (id) => async () => {
      await new Promise((r) => setTimeout(r, 3000));
      let result = await axios.get(
        `https://sum-server.100xdevs.com/todo?id=${id}`
      );
      return result.data.todo;
    },
  }),
});
