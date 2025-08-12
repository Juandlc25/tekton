import { useContext } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContextDef";
import type { AuthenticationState } from "../types";

export const useAuthentication = (): AuthenticationState => {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error(
      "useAuthentication must be used within an AuthenticationProvider"
    );
  }
  return context;
};
