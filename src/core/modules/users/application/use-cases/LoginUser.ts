import type { AuthResponse, LoginRequest } from "../../domain/models/Auth";
import type { UsersRepository } from "../../domain/repositories/UsersRepository";

export function LoginUser(userRepository: UsersRepository) {
  return async function (user: LoginRequest): Promise<AuthResponse> {
    return await userRepository.login(user);
  };
}
