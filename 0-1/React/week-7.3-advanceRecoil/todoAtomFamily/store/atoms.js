import { atomFamily } from "recoil";
import { todos } from "../todos";

export const todoFamily = atomFamily({
  key: "todo",
  default: function (id) {
    const todo = todos.find((todo) => todo.id === id);
    return todo;
  },
});
