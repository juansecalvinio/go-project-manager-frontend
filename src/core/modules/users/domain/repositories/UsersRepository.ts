import type { LoginRequestDTO, LoginResponseDTO } from "../models/Login";
import type {
  RegisterRequestDTO,
  RegisterResponseDTO,
} from "../models/Register";

export interface UsersRepository {
  register: (user: RegisterRequestDTO) => Promise<RegisterResponseDTO>;
  login: (user: LoginRequestDTO) => Promise<LoginResponseDTO>;
}
