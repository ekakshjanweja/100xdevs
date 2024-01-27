import { atom } from "recoil";

const jobsAtom = atom({
  key: "jobsAtom",
  default: 23,
});

export default jobsAtom;
