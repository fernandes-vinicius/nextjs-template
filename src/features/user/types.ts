export type UserRole = "user" | "admin";

export interface User {
  is: string;
  name: string;
  email: string;
  role: UserRole;
}
