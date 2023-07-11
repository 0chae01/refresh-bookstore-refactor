import { atom } from "recoil";
import { cartStateType } from "../types/cartStateType";

export const cartState = atom({
  key: "cartState",
  default: [] as cartStateType[],
});
