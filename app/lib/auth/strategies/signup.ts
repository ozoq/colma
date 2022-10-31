import invariant from "invariant";
import { FormStrategy } from "remix-auth-form";
import { db } from "~/lib/db.server";
import type { AuthenticatorType } from "../auth.server";
import { hashPassword, validatePassword, validateUsername } from "../utils";

export default function registerFormSignupStrategy(
  authenticator: AuthenticatorType
) {
  authenticator.use(
    new FormStrategy(async ({ form }) => {
      const username = validateUsername(form.get("username"));
      const password = validatePassword(form.get("password"));

      const existingUser = await db.user.findUnique({
        where: {
          username,
        },
      });

      invariant(existingUser === null, "Username is taken");

      const user = await db.user.create({
        data: {
          username,
          passwordHash: await hashPassword(password),
        },
      });

      return user.id;
    }),
    "form-signup"
  );
}
