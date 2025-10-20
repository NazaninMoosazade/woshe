// utils/constants.ts

export const authTypes = {
  LOGIN: "login",
  REGISTER: "register",
} as const;

export const roles = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export type AuthType = (typeof authTypes)[keyof typeof authTypes];
export type Role = (typeof roles)[keyof typeof roles];
