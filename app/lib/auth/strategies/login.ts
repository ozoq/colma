import invariant from "invariant";
import { FormStrategy } from "remix-auth-form";
import { db } from "~/lib/db.server";
import type { AuthenticatorType } from "../auth.server";
import { validatePassword, validateUsername, verifyPassword } from "../utils";

export default function registerFormLoginStrategy(
  authenticator: AuthenticatorType
) {
  authenticator.use(
    new FormStrategy(async ({ form }) => {
      const username = validateUsername(form.get("username"));
      const password = validatePassword(form.get("password"));

      let user = await db.user.findUnique({
        where: {
          username,
        },
      });

      invariant(
        user && (await verifyPassword(password, user.passwordHash)),
        "Incorrect username and/or password"
      );

      return user.id;
    }),
    "form-login"
  );
}
