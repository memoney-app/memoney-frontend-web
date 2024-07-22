import { atom } from "recoil";

export const activeIndexState = atom<string>({
  key: "activeIndexState",
  default: "NavHome",
});
