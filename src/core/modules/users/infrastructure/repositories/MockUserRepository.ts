import { mockDelay } from "../../../../api/mock-client";
import type { AuthResponse } from "../../domain/models/Auth";
import type { UsersRepository } from "../../domain/repositories/UsersRepository";
import mockAuthResponse from "../mocks/auth-response.json";

export const MockUserRepository: UsersRepository = {
  register: async function (): Promise<AuthResponse> {
    await mockDelay();
    return Promise.resolve(mockAuthResponse as AuthResponse);
  },
  login: async function (): Promise<AuthResponse> {
    await mockDelay();
    return Promise.resolve(mockAuthResponse as AuthResponse);
  },
};
