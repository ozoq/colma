import type { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "./session.server";
import invariant from "invariant";
import bcrypt from "bcrypt";
import { db } from "./db.server";

type UserId = User["id"];

export let authenticator = new Authenticator<UserId>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const username = form.get("username");
    const password = form.get("password");

    console.log(username, password);

    invariant(typeof username === "string", "Username must be a string");
    invariant(username.length > 0, "Username cannot be empty");

    invariant(typeof password === "string", "Password must be a string");
    invariant(password.length > 0, "Password cannot be ampty");

    let hashedPassword = hashPassword(password);

    let user = await db.user.findUnique({
      where: {
        // TODO: rename nickname to username in prisma, it is more convinient
        nickname: username,
        // TODO: prisma user to use passwords
        // password: hashedPassword,
      },
      select: {
        id: true,
      },
    });

    invariant(user, "Incorrect username and/or password");

    return user.id;
  })
);

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 4);
}

export async function verifyPassword(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed);
}
