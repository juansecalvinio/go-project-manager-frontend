import type { Role } from "./User";

export type LoginRequestDTO = {
  email: string;
  password: string;
};

export type LoginResponseDTO = {
  role: Role;
  token: string;
  user_id: string;
};
