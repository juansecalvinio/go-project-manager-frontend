import { useCallback, useState } from "react";
import type { LoginRequest } from "@/core/modules/users/domain/models/Auth";
import type { UsersRepository } from "@/core/modules/users/domain/repositories/UsersRepository";
import { getUsersRepository } from "@/core/modules/users/infrastructure/factories/UsersRepositoryFactory";
import { useUserContext } from "@/ui/context/user.context";

export const useLoginUser = (
  usersRepository: UsersRepository = getUsersRepository()
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isRequested, setIsRequested] = useState(false);

  const saveUser = useUserContext((state) => state.saveUser);
  const saveToken = useUserContext((state) => state.saveToken);
  const saveIsAuthenticated = useUserContext(
    (state) => state.saveIsAuthenticated
  );

  const postLogin = useCallback(
    async (body: LoginRequest) => {
      setIsLoading(true);
      setIsRequested(false);
      setError(null);

      try {
        const response = await usersRepository.login(body);
        saveUser(response.user);
        saveToken(response.token);
        saveIsAuthenticated(true);

        return response;
      } catch (error) {
        const errorObj = error as Error;
        setError(errorObj);
        saveIsAuthenticated(false);
      } finally {
        setIsLoading(false);
        setIsRequested(true);
      }
    },
    [usersRepository, saveUser, saveToken, saveIsAuthenticated]
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { clearError, postLogin, isLoading, error, isRequested };
};
