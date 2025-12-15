import type { UsersRepository } from "../../domain/repositories/UsersRepository";
import { ApiUserRepository } from "../repositories/ApiUserRepository";
import { MockUserRepository } from "../repositories/MockUserRepository";

export const getUsersRepository = (): UsersRepository => {
  const mode = import.meta.env.MODE;
  console.log("🚀 ~ getUsersRepository ~ mode:", mode);
  const useMocks = mode === "none";

  if (useMocks) {
    return MockUserRepository;
  }

  return ApiUserRepository;
};
