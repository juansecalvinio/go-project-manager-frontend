import type { Role } from "./User";

export type RegisterRequestDTO = {
  name: string;
  email: string;
  password: string;
  role: Role;
};

export type RegisterResponseDTO = {
  id: string;
  name: string;
  email: string;
  role: Role;
};
