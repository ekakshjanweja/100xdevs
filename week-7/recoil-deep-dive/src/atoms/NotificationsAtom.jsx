import axios from "axios";
import { atom, selector } from "recoil";

const notificationsAtom = atom({
  key: "notificationsAtom",
  default: selector({
    key: "notificationsAtom/Default",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export default notificationsAtom;
