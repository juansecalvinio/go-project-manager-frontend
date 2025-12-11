import type {
  LoginRequestDTO,
  LoginResponseDTO,
} from "../../domain/models/Login";
import type { UsersRepository } from "../../domain/repositories/UsersRepository";

export function LoginUser(userRepository: UsersRepository) {
  return async function (user: LoginRequestDTO): Promise<LoginResponseDTO> {
    return await userRepository.login(user);
  };
}
