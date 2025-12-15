import type { AuthResponse, RegisterRequest } from "../../domain/models/Auth";
import type { UsersRepository } from "../../domain/repositories/UsersRepository";

export function RegisterUser(userRepository: UsersRepository) {
  return async function (user: RegisterRequest): Promise<AuthResponse> {
    return await userRepository.register(user);
  };
}
