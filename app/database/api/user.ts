import { formatFullUser } from "./../shapes/fullUser";
import type { User } from "@prisma/client";
import { db } from "~/lib/db.server";
import { fullUserArgs } from "../shapes/fullUser";

export async function getFullUserById(id: User["id"]) {
  const user = await db.user.findUnique({
    ...fullUserArgs,
    where: {
      id,
    },
  });

  if (!user) {
    return null;
  }

  return formatFullUser(user);
}
