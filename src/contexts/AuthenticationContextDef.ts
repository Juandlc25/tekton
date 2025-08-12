import { createContext } from "react";
import type { AuthenticationState } from "../types";

export const AuthenticationContext = createContext<
  AuthenticationState | undefined
>(undefined);
