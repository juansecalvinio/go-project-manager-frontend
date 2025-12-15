import type { Role, User } from "./User";

export type AuthUser = Omit<User, "password">;

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  role: Role;
};
