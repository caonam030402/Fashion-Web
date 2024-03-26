import { getProfileFromLS } from "@/lib/local-storage";
import { StateCreator } from "zustand";

export interface UserSlice {
  user: User;
  setUser: (user: User) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: getProfileFromLS(),
  setUser: (user: User) => set((state) => ({ user: user })),
});
