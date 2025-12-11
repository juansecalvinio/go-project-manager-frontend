import { mockDelay } from "../../../../api/mock-client";
import type { LoginResponseDTO } from "../../domain/models/Login";
import type { RegisterResponseDTO } from "../../domain/models/Register";
import type { UsersRepository } from "../../domain/repositories/UsersRepository";
import mockLoginResponse from "../mocks/login-response.json";
import mockRegisterResponse from "../mocks/register-response.json";

export const MockUserRepository: UsersRepository = {
  register: async function (): Promise<RegisterResponseDTO> {
    await mockDelay();
    return Promise.resolve(mockRegisterResponse as RegisterResponseDTO);
  },
  login: async function (): Promise<LoginResponseDTO> {
    await mockDelay();
    return Promise.resolve(mockLoginResponse as LoginResponseDTO);
  },
};
