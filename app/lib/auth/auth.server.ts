import type { User } from "@prisma/client";
import { json } from "@remix-run/node";
import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "../session.server";
import registerFormLoginStrategy from "./strategies/login";
import registerFormSignupStrategy from "./strategies/signup";

export let authenticator = new Authenticator<User["id"]>(sessionStorage);
export type AuthenticatorType = typeof authenticator;

registerFormLoginStrategy(authenticator);
registerFormSignupStrategy(authenticator);

export async function authenticate(strategy: string, request: Request) {
  try {
    return await authenticator.authenticate(strategy, request, {
      successRedirect: "/",
      throwOnError: true,
    });
  } catch (error) {
    // Not an actual error but a success redirect
    if (error instanceof Response) return error;
    if (error instanceof AuthorizationError) {
      return json({ errorMessage: error.message });
    }
    return json({ errorMessage: "Unknown error has happened" });
  }
}
