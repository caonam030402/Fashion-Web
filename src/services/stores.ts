import { getProfileFromLS } from "@/utils/local-storage";
import { createStore } from "zustand/vanilla";

export type StoreState = {
  user: User;
};

export type StoreActions = {};

export type Store = StoreState & StoreActions;

export const defaultInitState: StoreState = {
  user: getProfileFromLS(),
};

export const store = (initState: StoreState = defaultInitState) => {
  return createStore<Store>()((set) => ({
    ...initState,
  }));
};
