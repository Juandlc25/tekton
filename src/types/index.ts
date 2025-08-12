export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  message: string;
}

export interface ApiItem {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface AuthenticationState {
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isInitialized: boolean;
}
