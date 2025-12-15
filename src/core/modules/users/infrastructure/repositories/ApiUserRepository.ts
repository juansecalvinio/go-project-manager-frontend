import { api } from "../../../../api/http-client";
import type { UsersRepository } from "../../domain/repositories/UsersRepository";
import type { AuthResponse } from "../../domain/models/Auth";
import type { LoginRequest, RegisterRequest } from "../../domain/models/Auth";

export const ApiUserRepository: UsersRepository = {
  async register(user: RegisterRequest): Promise<AuthResponse> {
    return await api.post<AuthResponse>("/register", user);
  },

  async login(user: LoginRequest): Promise<AuthResponse> {
    return await api.post<AuthResponse>("/login", user);
  },
};
