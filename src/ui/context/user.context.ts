import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { AuthUser } from "@/core/modules/users/domain/models/Auth";

export interface UserState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface UserActions {
  saveUser: (user: AuthUser) => void;
  saveToken: (token: string) => void;
  saveIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
}

export type UserStore = UserState & UserActions;

export const useUserContext = create<UserStore>()(
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,
      saveUser: (user: AuthUser) => {
        set({ user });
      },
      saveToken: (token: string) => {
        set({ token });
      },
      saveIsAuthenticated: (isAuthenticated: boolean) => {
        set({ isAuthenticated });
      },
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: "user-context",
    }
  )
);
