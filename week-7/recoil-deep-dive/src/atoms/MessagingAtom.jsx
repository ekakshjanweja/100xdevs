import { atom } from "recoil";

const messagingAtom = atom({
  key: "messagingAtom",
  default: 2,
});

export default messagingAtom;