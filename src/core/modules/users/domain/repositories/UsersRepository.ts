import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../models/Auth";

export interface UsersRepository {
  register: (user: RegisterRequest) => Promise<AuthResponse>;
  login: (user: LoginRequest) => Promise<AuthResponse>;
}
