import type {
  RegisterRequestDTO,
  RegisterResponseDTO,
} from "../../domain/models/Register";
import type { UsersRepository } from "../../domain/repositories/UsersRepository";

export function RegisterUser(userRepository: UsersRepository) {
  return async function (
    user: RegisterRequestDTO
  ): Promise<RegisterResponseDTO> {
    return await userRepository.register(user);
  };
}
