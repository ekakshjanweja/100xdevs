import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios";

// const todoAtomFamily = atomFamily({
//   key: "todoAtomFamily",
//   default: (id) => {
//     return TODOS.find((todo) => todo.id === id);
//   },
// });

const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoAtomFamily/Default",
    get:
      (id) =>
      async ({ get }) => {
        await new Promise((r) => setTimeout(r, 5000));
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});

export default todoAtomFamily;
