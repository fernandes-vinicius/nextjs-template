export enum AuthProviders {
  CREDENTIALS = "credentials",
  // ...more
}

export type AuthProvider = (typeof AuthProviders)[keyof typeof AuthProviders];
