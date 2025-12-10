export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export const ROLES = {
  ADMIN: "admin",
  DEVELOPER: "developer",
  PROJECT_MANAGER: "project_manager",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
