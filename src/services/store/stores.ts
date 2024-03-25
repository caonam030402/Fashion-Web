import { UseBoundStore, create } from "zustand";
import { UserSlice, createUserSlice } from "./slices/user-slice";

export interface Store extends UserSlice {}

export const store = () => {
  return create<Store>()((...a) => ({
    ...createUserSlice(...a),
  }));
};
