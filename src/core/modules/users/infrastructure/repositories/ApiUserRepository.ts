import { api } from "../../../../api/http-client";
import type {
  RegisterRequestDTO,
  RegisterResponseDTO,
} from "../../domain/models/Register";
import type {
  LoginRequestDTO,
  LoginResponseDTO,
} from "../../domain/models/Login";
import type { UsersRepository } from "../../domain/repositories/UsersRepository";

export const ApiUserRepository: UsersRepository = {
  async register(user: RegisterRequestDTO): Promise<RegisterResponseDTO> {
    return await api.post<RegisterResponseDTO>("/register", user);
  },

  async login(user: LoginRequestDTO): Promise<LoginResponseDTO> {
    return await api.post<LoginResponseDTO>("/login", user);
  },
};
